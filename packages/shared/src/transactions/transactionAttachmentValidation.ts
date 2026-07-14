export const TRANSACTION_ATTACHMENT_ACCEPT =
  ".pdf,.png,.jpg,.jpeg";

export const TRANSACTION_ATTACHMENT_MAX_SIZE =
  5 * 1024 * 1024;

export const TRANSACTION_ATTACHMENT_MAX_SIZE_LABEL =
  "5 MB";

type TransactionAttachmentInput = {
  name: string;
  type: string;
  size: number;
  base64?: string;
};

const ALLOWED_MIME_TYPES_BY_EXTENSION: Record<
  string,
  string[]
> = {
  ".pdf": ["application/pdf"],
  ".png": ["image/png"],
  ".jpg": ["image/jpeg"],
  ".jpeg": ["image/jpeg"],
};

function getFileExtension(fileName: string) {
  const lastDotIndex = fileName.lastIndexOf(".");

  if (lastDotIndex < 0) {
    return "";
  }

  return fileName
    .slice(lastDotIndex)
    .toLowerCase();
}

function getBase64Data(base64: string) {
  const match = base64.match(
    /^data:([^;,]+);base64,([A-Za-z0-9+/]*={0,2})$/
  );

  if (!match) {
    return null;
  }

  return {
    mimeType: match[1].toLowerCase(),
    content: match[2],
  };
}

function getDecodedBase64Size(content: string) {
  const padding = content.endsWith("==")
    ? 2
    : content.endsWith("=")
      ? 1
      : 0;

  return Math.floor((content.length * 3) / 4) - padding;
}

export function validateTransactionAttachment(
  attachment: TransactionAttachmentInput
): string | null {
  const extension = getFileExtension(attachment.name);
  const allowedMimeTypes =
    ALLOWED_MIME_TYPES_BY_EXTENSION[extension];

  if (!allowedMimeTypes) {
    return `O arquivo ${attachment.name} possui formato não permitido.`;
  }

  const normalizedMimeType =
    attachment.type.toLowerCase();

  if (!allowedMimeTypes.includes(normalizedMimeType)) {
    return `O tipo do arquivo ${attachment.name} não corresponde à extensão informada.`;
  }

  if (
    !Number.isFinite(attachment.size) ||
    attachment.size <= 0
  ) {
    return `O arquivo ${attachment.name} está vazio ou possui tamanho inválido.`;
  }

  if (
    attachment.size >
    TRANSACTION_ATTACHMENT_MAX_SIZE
  ) {
    return `O arquivo ${attachment.name} deve possuir no máximo ${TRANSACTION_ATTACHMENT_MAX_SIZE_LABEL}.`;
  }

  if (!attachment.base64) {
    return null;
  }

  const base64Data = getBase64Data(
    attachment.base64
  );

  if (!base64Data) {
    return `O conteúdo do arquivo ${attachment.name} é inválido.`;
  }

  if (
    base64Data.mimeType !== normalizedMimeType
  ) {
    return `O conteúdo do arquivo ${attachment.name} não corresponde ao tipo informado.`;
  }

  const decodedSize = getDecodedBase64Size(
    base64Data.content
  );

  if (
    decodedSize <= 0 ||
    decodedSize >
      TRANSACTION_ATTACHMENT_MAX_SIZE
  ) {
    return `O conteúdo do arquivo ${attachment.name} possui tamanho inválido.`;
  }

  return null;
}

export function validateTransactionAttachments(
  attachments: TransactionAttachmentInput[] = []
): string | null {
  for (const attachment of attachments) {
    const validationError =
      validateTransactionAttachment(attachment);

    if (validationError) {
      return validationError;
    }
  }

  return null;
}
"use client";

import { useRef, useState } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import UploadFileRoundedIcon from "@mui/icons-material/UploadFileRounded";
import InsertDriveFileRoundedIcon from "@mui/icons-material/InsertDriveFileRounded";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";

import type { TransactionAttachment } from "@/types/transaction";

import {
  TRANSACTION_ATTACHMENT_ACCEPT,
  TRANSACTION_ATTACHMENT_MAX_SIZE,
  TRANSACTION_ATTACHMENT_MAX_SIZE_LABEL,
} from "@/constants/transaction";

import { fileDropzoneStyles } from "@/styles/fileDropZoneStyles";

type FileDropzoneProps = {
  files?: File[];
  attachments?: TransactionAttachment[];
  onAddFiles?: (files: File[]) => void;
  onRemoveFile?: (index: number) => void;
  onRemoveAttachment?: (attachmentId: string) => void;
  error?: boolean;
  helperText?: string;
};

function formatFileSize(size: number) {
  if (size < 1024) return `${size} B`;

  if (size < 1024 * 1024) {
    return `${(size / 1024).toFixed(1)} KB`;
  }

  return `${(size / (1024 * 1024)).toFixed(1)} MB`;
}

export default function FileDropzone({
  files = [],
  attachments = [],
  onAddFiles,
  onRemoveFile,
  onRemoveAttachment,
  error = false,
  helperText,
}: FileDropzoneProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const [isDragging, setIsDragging] = useState(false);
  const [localError, setLocalError] = useState("");

  const hasFiles = files.length > 0 || attachments.length > 0;
  const hasError = error || Boolean(localError);

  function validateFile(file: File) {
    const acceptedTypes = TRANSACTION_ATTACHMENT_ACCEPT.split(",");
    const extension = `.${file.name.split(".").pop()?.toLowerCase()}`;

    if (!acceptedTypes.includes(extension)) {
      setLocalError("Um ou mais arquivos possuem formato não permitido.");
      return false;
    }

    if (file.size > TRANSACTION_ATTACHMENT_MAX_SIZE) {
      setLocalError(
        `Cada arquivo deve possuir no máximo ${TRANSACTION_ATTACHMENT_MAX_SIZE_LABEL}.`
      );

      return false;
    }

    return true;
  }

  function handleFiles(fileList?: FileList | null) {
    if (!fileList) return;

    const selectedFiles = Array.from(fileList);
    const validFiles = selectedFiles.filter(validateFile);

    if (validFiles.length === 0) return;

    setLocalError("");
    onAddFiles?.(validFiles);

    if (inputRef.current) {
      inputRef.current.value = "";
    }
  }

  function handleInputChange(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    handleFiles(event.target.files);
  }

  function handleDrop(event: React.DragEvent<HTMLDivElement>) {
    event.preventDefault();
    event.stopPropagation();

    setIsDragging(false);
    handleFiles(event.dataTransfer.files);
  }

  function handleKeyDown(
    event: React.KeyboardEvent<HTMLDivElement>
  ) {
    if (event.key !== "Enter" && event.key !== " ") return;

    event.preventDefault();
    openPicker();
  }

  function handleDragOver(
    event: React.DragEvent<HTMLDivElement>
  ) {
    event.preventDefault();
    setIsDragging(true);
  }

  function openPicker() {
    inputRef.current?.click();
  }

  return (
    <Box sx={fileDropzoneStyles.root}>
      <input
        hidden
        multiple
        ref={inputRef}
        type="file"
        accept={TRANSACTION_ATTACHMENT_ACCEPT}
        onChange={handleInputChange}
      />

      {hasFiles && (
        <Box sx={fileDropzoneStyles.fileList}>
          {attachments.map((attachment) => (
            <Box
              key={attachment.id}
              sx={fileDropzoneStyles.fileItem}
            >
              <InsertDriveFileRoundedIcon
                sx={fileDropzoneStyles.fileIcon}
              />

              <Box sx={fileDropzoneStyles.fileInfo}>
                <Typography sx={fileDropzoneStyles.fileName}>
                  {attachment.name}
                </Typography>

                <Typography sx={fileDropzoneStyles.fileSize}>
                  {formatFileSize(attachment.size)}
                </Typography>
              </Box>

              <IconButton
                type="button"
                onClick={() =>
                  onRemoveAttachment?.(attachment.id)
                }
                aria-label={`Remover comprovante ${attachment.name}`}
                sx={fileDropzoneStyles.removeButton}
              >
                <DeleteOutlineRoundedIcon
                  sx={fileDropzoneStyles.removeIcon}
                />
              </IconButton>
            </Box>
          ))}

          {files.map((file, index) => (
            <Box
              key={`${file.name}-${file.size}-${index}`}
              sx={fileDropzoneStyles.fileItem}
            >
              <InsertDriveFileRoundedIcon
                sx={fileDropzoneStyles.fileIcon}
              />

              <Box sx={fileDropzoneStyles.fileInfo}>
                <Typography sx={fileDropzoneStyles.fileName}>
                  {file.name}
                </Typography>

                <Typography sx={fileDropzoneStyles.fileSize}>
                  {formatFileSize(file.size)}
                </Typography>
              </Box>

              <IconButton
                type="button"
                onClick={() => onRemoveFile?.(index)}
                aria-label={`Remover comprovante ${file.name}`}
                sx={fileDropzoneStyles.removeButton}
              >
                <DeleteOutlineRoundedIcon
                  sx={fileDropzoneStyles.removeIcon}
                />
              </IconButton>
            </Box>
          ))}
        </Box>
      )}

      <Box
        role="button"
        tabIndex={0}
        onClick={openPicker}
        onKeyDown={handleKeyDown}
        onDragOver={handleDragOver}
        onDragLeave={() => setIsDragging(false)}
        onDrop={handleDrop}
        sx={{
          ...fileDropzoneStyles.dropzone,
          ...(isDragging
            ? fileDropzoneStyles.dropzoneActive
            : {}),
          ...(hasError
            ? fileDropzoneStyles.dropzoneError
            : {}),
        }}
      >
        <UploadFileRoundedIcon
          sx={fileDropzoneStyles.uploadIcon}
        />

        <Box sx={fileDropzoneStyles.dropzoneText}>
          <Typography sx={fileDropzoneStyles.title}>
            Arraste comprovantes aqui
          </Typography>

          <Typography sx={fileDropzoneStyles.info}>
            ou selecione arquivos • PDF, PNG ou JPG • Máximo{" "}
            {TRANSACTION_ATTACHMENT_MAX_SIZE_LABEL} por arquivo
          </Typography>
        </Box>
      </Box>

      {(hasError || helperText) && (
        <Typography sx={fileDropzoneStyles.helperText}>
          {localError || helperText}
        </Typography>
      )}
    </Box>
  );
}
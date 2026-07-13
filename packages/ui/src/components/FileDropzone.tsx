"use client";

import { useRef, useState } from "react";
import type {
  ChangeEvent,
  DragEvent,
  KeyboardEvent,
} from "react";
import {
  Box,
  IconButton,
  Typography,
} from "@mui/material";
import UploadFileRoundedIcon from "@mui/icons-material/UploadFileRounded";
import InsertDriveFileRoundedIcon from "@mui/icons-material/InsertDriveFileRounded";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";

import { fileDropzoneStyles } from "../styles/fileDropzoneStyles";

export type FileDropzoneAttachment = {
  id: string;
  name: string;
  size: number;
};

export type FileDropzoneProps = {
  files?: File[];
  attachments?: FileDropzoneAttachment[];
  accept: string;
  maxSize: number;
  maxSizeLabel: string;
  acceptedFormatsLabel: string;
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
  accept,
  maxSize,
  maxSizeLabel,
  acceptedFormatsLabel,
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
    const acceptedTypes = accept
      .split(",")
      .map((type) => type.trim().toLowerCase());

    const extension = `.${file.name
      .split(".")
      .pop()
      ?.toLowerCase()}`;

    if (!acceptedTypes.includes(extension)) {
      setLocalError(
        "Um ou mais arquivos possuem formato não permitido."
      );
      return false;
    }

    if (file.size > maxSize) {
      setLocalError(
        `Cada arquivo deve possuir no máximo ${maxSizeLabel}.`
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
    event: ChangeEvent<HTMLInputElement>
  ) {
    handleFiles(event.target.files);
  }

  function handleDrop(event: DragEvent<HTMLDivElement>) {
    event.preventDefault();
    event.stopPropagation();

    setIsDragging(false);
    handleFiles(event.dataTransfer.files);
  }

  function handleKeyDown(
    event: KeyboardEvent<HTMLDivElement>
  ) {
    if (event.key !== "Enter" && event.key !== " ") return;

    event.preventDefault();
    openPicker();
  }

  function handleDragOver(
    event: DragEvent<HTMLDivElement>
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
        accept={accept}
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
                aria-hidden="true"
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
                aria-hidden="true"
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
          aria-hidden="true"
        />

        <Box sx={fileDropzoneStyles.dropzoneText}>
          <Typography sx={fileDropzoneStyles.title}>
            Arraste comprovantes aqui
          </Typography>

          <Typography sx={fileDropzoneStyles.info}>
            ou selecione arquivos • {acceptedFormatsLabel} • Máximo{" "}
            {maxSizeLabel} por arquivo
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
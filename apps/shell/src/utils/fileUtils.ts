export function readFileAsBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      resolve(String(reader.result));
    };

    reader.onerror = () => {
      reject(new Error("Não foi possível ler o arquivo."));
    };

    reader.readAsDataURL(file);
  });
}

export function base64ToBlob(base64: string, type: string) {
  const byteCharacters = atob(base64.split(",")[1]);
  const byteNumbers = Array.from(byteCharacters).map((character) =>
    character.charCodeAt(0)
  );
  const byteArray = new Uint8Array(byteNumbers);

  return new Blob([byteArray], { type });
}

export function createObjectUrlFromBase64(base64: string, type: string) {
  const blob = base64ToBlob(base64, type);

  return URL.createObjectURL(blob);
}
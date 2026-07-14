export function formatDateInput(value: string) {
  const onlyNumbers = value.replace(/\D/g, "").slice(0, 8);

  if (onlyNumbers.length <= 2) {
    return onlyNumbers;
  }

  if (onlyNumbers.length <= 4) {
    return `${onlyNumbers.slice(0, 2)}/${onlyNumbers.slice(2)}`;
  }

  return `${onlyNumbers.slice(0, 2)}/${onlyNumbers.slice(2, 4)}/${onlyNumbers.slice(4)}`;
}

export function isValidDateBR(value: string) {
  const regex = /^(\d{2})\/(\d{2})\/(\d{4})$/;

  const match = value.match(regex);

  if (!match) {
    return false;
  }

  const day = Number(match[1]);
  const month = Number(match[2]);
  const year = Number(match[3]);

  if (year < 1900 || year > 2100) {
    return false;
  }

  const date = new Date(year, month - 1, day);

  return (
    date.getFullYear() === year &&
    date.getMonth() === month - 1 &&
    date.getDate() === day
  );
}

export function parseDateBR(value: string) {
  if (!isValidDateBR(value)) {
    return null;
  }

  const [day, month, year] = value.split("/").map(Number);

  return new Date(year, month - 1, day);
}

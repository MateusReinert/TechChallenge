export function paginate<T>(
  items: T[],
  currentPage: number,
  itemsPerPage: number
) {
  return items.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
}
export const createSlug = (name: string): string => {
  return name
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "_") // Replaces spaces with _
    .replace(/[^\w-]+/g, ""); // Removes non-alphanumeric chars (punctuation, etc.)
};

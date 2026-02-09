import fs from "fs";
import path from "path";

export function getPhotoCount(countrySlug: string): number {
  const folderPath = path.join(
    process.cwd(),
    "public",
    "images",
    "travel",
    countrySlug,
  );

  // 1. Check if folder exists
  if (!fs.existsSync(folderPath)) {
    return 0;
  }

  try {
    // 2. Read files and filter for images
    const files = fs.readdirSync(folderPath);
    const images = files.filter((file) =>
      /\.(jpg|jpeg|png|webp|avif)$/i.test(file),
    );

    return images.length;
  } catch (error) {
    console.error(`Error reading folder for ${countrySlug}:`, error);
    return 0;
  }
}

export function getImagesFromFolder(folderPath: string) {
  // Construct the absolute path to the public directory
  const fullPath = path.join(process.cwd(), "public", folderPath);

  try {
    const files = fs.readdirSync(fullPath);

    // Filter for .jpg and .jpeg files (case-insensitive)
    // Map them to the public URL path
    return files
      .filter((file) => /\.(jpg|jpeg|png|webp)$/i.test(file))
      .map((file) => `${folderPath}/${file}`);
  } catch (error) {
    console.error("Folder not found:", fullPath);
    return [];
  }
}

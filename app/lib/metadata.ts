import { Metadata } from "next";

interface PageMetadataProps {
  title: string;
  description: string;
  slug?: string;
  image?: string;
}

export function generateMetadata({
  title,
  description,
  slug = "",
  image,
}: PageMetadataProps): Metadata {
  const baseUrl = "https://natc79.github.io";
  const fullTitle =
    title === "Natalie Chun | Data Scientist and Economist"
      ? title
      : `${title} | Natalie Chun`;

  // Use the dynamic OG route we built earlier as the default image
  const ogImage = image || `${baseUrl}/og/${encodeURIComponent(title)}`;

  return {
    title: title,
    description,
    openGraph: {
      title: fullTitle,
      description,
      url: `${baseUrl}${slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
      //creator: "@your_twitter_handle",
    },
    // This allows you to still override specific things later if needed
    alternates: {
      canonical: `${baseUrl}${slug}`,
    },
  };
}

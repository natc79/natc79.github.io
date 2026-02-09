import { getImagesFromFolder } from "@/app/lib/getImages";
import { destinations } from "@/app/lib/data";
import { notFound } from "next/navigation";
import PhotoCarousel from "@/app/components/PhotoCarousel";

// The PageProps type for Next.js 15
interface PageProps {
  params: Promise<{ slug: string }>;
}

// 1. Tell Next.js which pages to build at compile time
export async function generateStaticParams() {
  return destinations.map((d) => ({
    slug: d.slug,
  }));
}

export default async function CountryPage({ params }: PageProps) {
  const { slug } = await params;
  const imageFolder = `/images/travel/${slug}`;
  const images = getImagesFromFolder(imageFolder);
  const country = destinations.find((d) => d.slug === slug);

  if (!country) notFound();

  return (
    <main className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-5xl font-bold mb-6">{country.country}</h1>

      <div className="mb-8">
        {images.length > 0 ? (
          <PhotoCarousel images={images} />
        ) : (
          <p className="text-slate-500">No photos found </p>
        )}
      </div>

      <div className="prose prose-lg">
        <p className="text-xl text-slate-600 mb-8">{country.description}</p>
        <div dangerouslySetInnerHTML={{ __html: country.content }} />
      </div>
    </main>
  );
}

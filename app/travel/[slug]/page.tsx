import { destinations } from "@/app/lib/data";
import { notFound } from "next/navigation";

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
  const country = destinations.find((d) => d.slug === slug);

  if (!country) notFound();

  return (
    <main className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-5xl font-bold mb-6">{country.country}</h1>

      {/* 2. The Photo Carousel Placeholder */}
      <div className="bg-slate-100 rounded-xl aspect-video mb-8 flex items-center justify-center">
        {/* You can drop a library like Embla Carousel or Swiper here */}
        <p className="text-slate-500">
          Photo Carousel for {country.images.length} images
        </p>
      </div>

      <div className="prose prose-lg">
        <p className="text-xl text-slate-600 mb-8">{country.description}</p>
        <div dangerouslySetInnerHTML={{ __html: country.content }} />
      </div>
    </main>
  );
}

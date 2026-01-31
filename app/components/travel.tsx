import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Camera } from "lucide-react";

const TravelPage = () => {
  const destinations = [
    {
      country: "Argentina",
      slug: "argentina",
      image: "/images/travel/argentina_cover.JPG",
      overview:
        "Patagonia’s glacial wilderness a study of environmental isolation.",
      photoCount: 42,
    },
    {
      country: "Armenia",
      slug: "armenia",
      image: "/images/travel/armenia_cover.jpg",
      overview:
        "Ancient stone churches anchoring a resilient nation through centuries of geopolitical and economic transition.",
      photoCount: 42,
    },
    {
      country: "Australia",
      slug: "australia",
      image: "/images/travel/australia_cover.jpg",
      overview:
        "Iconic architecture and unique wildlife across a diverse landscape of world-class coastlines and rugged wilderness.",
      photoCount: 42,
    },
    {
      country: "Bangladesh",
      slug: "bangladesh",
      image: "/images/travel/bangladesh_cover.jpg",
      overview:
        "An overwhelming scale of extreme poverty meeting a vibrant, resilient culture in the heart of Dhaka.",
      photoCount: 42,
    },
    {
      country: "Belgium",
      slug: "belgium",
      image: "/images/travel/belgium_cover.jpg",
      overview:
        "Historic canals and medieval architecture meeting a refined culinary culture in the storied streets of Bruges and Ghent.",
      photoCount: 42,
    },
    {
      country: "Bhutan",
      slug: "bhutan",
      image: "/images/travel/bhutan_cover.jpg",
      overview:
        "Deep spirituality, dignity and pride transcend material poverty in a peaceful mountainous landscape.",
      photoCount: 42,
    },
    {
      country: "Bolivia",
      slug: "bolivia",
      image: "/images/travel/bolivia_cover.jpg",
      overview:
        "A landlocked high-altitude landscape where pure indigenous culture perseveres and economic opportunities remain limited.",
      photoCount: 42,
    },
    {
      country: "Brazil",
      slug: "brazil",
      image: "/images/travel/brazil_cover.jpg",
      overview:
        "Dramatic seascapes and mountain peaks framing a sharp dissonance between elite wealth and the sprawling favelas of Rio.",
      photoCount: 42,
    },
    {
      country: "Brunei",
      slug: "brunei",
      image: "/images/travel/brunei_cover.jpg",
      overview:
        "A small wealthy nation offering jungle adventure, preserving rare genetic diversity and exotic wildlife within its borders.",
      photoCount: 42,
    },
    {
      country: "Cambodia",
      slug: "cambodia",
      image: "/images/travel/cambodia_cover.jpg",
      overview:
        "Angkor Wat’s grandeur masks brutal tragedy in a nation reliant on tourism for survival.",
      photoCount: 42,
    },
    {
      country: "Canada",
      slug: "canada",
      image: "/images/travel/canada_cover.jpg",
      overview:
        "oronto’s familiar urban pulse contrasted with the distinct, French-speaking soul of Montreal.",
      photoCount: 42,
    },
    {
      country: "China",
      slug: "china",
      image: "/images/travel/china_cover.jpg",
      overview:
        "Aggressive infrastructure and policy drive unprecedented growth and poverty reduction across a vast, diverse population.",
      photoCount: 42,
    },
    {
      country: "Ecuador",
      slug: "ecuador",
      image: "/images/travel/ecuador_cover.jpg",
      overview:
        "Summitting equatorial volcanoes in a stable, middle-income economy defined by its dramatic geological landscape.",
      photoCount: 42,
    },
    {
      country: "Ethiopia",
      slug: "ethiopia",
      image: "/images/travel/ethiopia_cover_alt.jpg",
      overview:
        "Deep spirituality and ancient stone history anchoring an agrarian society through profound economic struggle.",
      photoCount: 42,
    },
    {
      country: "Japan",
      slug: "japan",
      image: "/images/travel/japan_cover.jpg",
      overview:
        "A traditional aging society where modern innovation and architectural mastery collide with non-progressive stagnation.",
      photoCount: 42,
    },
    {
      country: "South Korea",
      slug: "south_korea",
      image: "/images/travel/south_korea_cover.jpg",
      overview:
        "Elite modern infrastructure and creative energy meeting traditional gender constraints in a high-growth society.",
      photoCount: 42,
    },
    {
      country: "Uzbekistan",
      slug: "uzbekistan",
      image: "/images/travel/uzbekistan_cover.jpg",
      overview:
        "A Silk Road legacy of trade and entrepreneurship constrained by the friction of modern policies",
      photoCount: 28,
    },
    // ...
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-16 text-slate-100">
      <header className="mb-12 border-b border-slate-800 pb-8">
        <h1 className="text-4xl font-extrabold mb-4">Global Lens</h1>
        <p className="mb-6">
          Documenting the world through a photographic lens—capturing the
          intersection of culture, environment, and the systemic forces that
          shape individual outcomes.
        </p>
        <p className="mb-6">
          The core of my perspective is shaped by the duality of my time in the
          United States and the Philippines. While the US provides a lens on
          high-tier infrastructure and global influence, my years living in the
          Philippines allowed for a deeper, more intimate connection. It was
          there that I moved beyond the role of an observer and became a witness
          to the daily grit, the communal warmth, and the complex barriers to
          social mobility.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {destinations.map((dest, index) => (
          <article
            key={index}
            className="group flex flex-col bg-slate-900 border border-slate-800 rounded-xl overflow-hidden aspect-square"
          >
            {/* Top 2/3: Photo + hover callout */}
            <div className="relative h-3/4 w-full overflow-hidden">
              <Image
                src={dest.image}
                alt={dest.country}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Overview callout — appears on hover */}
              <div className="absolute inset-x-3 bottom-3 left-3 right-3 opacity-0 transition-opacity duration-200 group-hover:opacity-100 pointer-events-none">
                <div className="rounded-lg border-l-4 border-slate-400 bg-slate-900/95 backdrop-blur-sm px-4 py-3 shadow-lg opacity-50">
                  <p className="text-slate-200 text-sm leading-snug line-clamp-3">
                    {dest.overview}
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom 1/3: Content */}
            <div className="h-1/4 min-h-0 flex flex-col p-3">
              <h2 className="text-xl font-bold mb-1.5 text-white shrink-0">
                {dest.country}
              </h2>

              <div className="flex-grow min-h-0" aria-hidden />

              {/* Bottom Row: Metadata and Link */}
              <div className="mt-auto shrink-0 pt-2 border-t border-slate-800 flex items-center justify-between">
                {/* Photo Count */}
                <div className="flex items-center gap-1.5 text-slate-500 text-xs font-medium">
                  <Camera size={14} className="text-slate-400" />
                  <span>{dest.photoCount} Photos</span>
                </div>

                {/* View Story Link */}
                {/* <Link
                  href={`/travel/${dest.slug}`}
                  className="flex items-center gap-1 text-sm font-bold text-blue-400 group-hover:text-white transition-colors"
                >
                  View Story
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link> */}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default TravelPage;

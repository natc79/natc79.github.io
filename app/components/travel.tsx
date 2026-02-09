import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Camera } from "lucide-react";
// Import the photo count utility we created earlier
import { getPhotoCount } from "@/app/lib/getImages";
import { createSlug } from "@/app/lib/utils";

const TravelPage = () => {
  const rawDestinations = [
    {
      country: "Argentina",
      overview:
        "Patagonia’s glacial wilderness a study of environmental isolation.",
    },
    {
      country: "Armenia",
      overview:
        "Ancient stone churches anchoring a resilient nation through centuries of geopolitical and economic transition.",
    },
    {
      country: "Australia",
      overview:
        "Iconic architecture and unique wildlife across a diverse landscape of world-class coastlines and rugged wilderness.",
    },
    {
      country: "Bangladesh",
      overview:
        "An overwhelming scale of extreme poverty meeting a vibrant, resilient culture in the heart of Dhaka.",
    },
    {
      country: "Belgium",
      overview:
        "Historic canals and medieval architecture meeting a refined culinary culture in the storied streets of Bruges and Ghent.",
    },
    {
      country: "Bhutan",
      overview:
        "Deep spirituality, dignity and pride transcend material poverty in a peaceful mountainous landscape.",
    },
    {
      country: "Bolivia",
      overview:
        "A landlocked high-altitude landscape where pure indigenous culture perseveres and economic opportunities remain limited.",
    },
    {
      country: "Brazil",
      overview:
        "Dramatic seascapes and mountain peaks framing a sharp dissonance between elite wealth and the sprawling favelas of Rio.",
    },
    {
      country: "Brunei",
      overview:
        "A small wealthy nation offering jungle adventure, preserving rare genetic diversity and exotic wildlife within its borders.",
    },
    {
      country: "Cambodia",
      overview:
        "Angkor Wat’s grandeur masks brutal tragedy in a nation reliant on tourism for survival.",
    },
    {
      country: "Canada",
      overview:
        "Toronto’s familiar urban pulse contrasted with the distinct, French-speaking soul of Montreal.",
    },
    {
      country: "Chile",
      overview:
        "A sophisticated blend of high-rise modernity, world-class vineyards, and rugged wilderness, defining South America’s most seamless and accessible landscape.",
    },
    {
      country: "China",
      overview:
        "Aggressive infrastructure and policy drive unprecedented growth and poverty reduction across a vast, diverse population.",
    },
    {
      country: "Costa Rica",
      overview:
        "A safe, biodiversity sanctuary where volcanic peaks and coffee highlands meet a warm, friendly culture for adventure and relaxation.",
    },
    {
      country: "Czech Republic",
      overview:
        "A timeless blend of medieval beauty and deep history, offering world-class architecture alongside remarkably affordable living and cuisine.",
    },
    {
      country: "Denmark",
      overview:
        "A pinnacle of design culture featuring vibrant architecture and a sophisticated, world-class culinary scene.",
    },
    {
      country: "Ecuador",
      overview:
        "Summitting equatorial volcanoes in a stable, middle-income economy defined by its dramatic geological landscape.",
    },
    {
      country: "England",
      overview:
        "A diverse, royal-centric melting pot where deep history meets world-tier museums in the bustling heart of London.",
    },
    {
      country: "Ethiopia",
      overview:
        "Deep spirituality and ancient stone history anchoring an agrarian society through profound economic struggle.",
    },
    {
      country: "France",
      overview:
        "Grand monuments and world-renowned architecture within a storied culture that remains deeply rooted in its native tongue.",
    },
    {
      country: "French Polynesia",
      overview:
        "Lush peaks and vibrant reefs where Franco-Polynesian culture thrives within a focused, tourism-driven island economy.",
    },
    {
      country: "Germany",
      overview:
        "Efficient, modern, and effortlessly navigable, Berlin stands as a testament to German precision and urban vitality.",
    },
    {
      country: "Greece",
      overview:
        "History meets modern struggle; a landscape of island reprieves contrasted with the hardened grit of Athens.",
    },
    {
      country: "Guatemala",
      overview:
        "A hidden treasure of Mayan ruins and rich traditions, preserved by its wild jungles and understated global profile.",
    },
    {
      country: "Hong Kong",
      overview:
        "Enormous high-rises and world-class infrastructure meet vibrant culinary traditions, masking deep-seated wealth inequalities within one of the densest landscapes.",
    },
    {
      country: "Hungary",
      overview:
        "Imperial architecture and world-class cuisine along the Danube, contrasted by an increasingly tightening political climate.",
    },
    {
      country: "Indonesia",
      overview:
        "Breathtaking volcanic landscapes and deep cultural heritage across a vast archipelago, facing unique logistical hurdles in island-wide development.",
    },
    {
      country: "India",
      overview:
        "A tech-forward global power of immense scale and heritage, where vast wealth gaps and ancestral social structures challenge mobility.",
    },
    {
      country: "Italy",
      overview:
        "Centuries of history from Rome to the Renaissance paired with peerless culinary excellence and a timeless, world-renowned cultural allure.",
    },
    {
      country: "Japan",
      overview:
        "A traditional aging society where modern innovation and architectural mastery collide with non-progressive stagnation.",
    },
    {
      country: "Jordan",
      overview:
        "A stable desert sanctuary of Bedouin hospitality and ancient wonders, preserving peace amid regional storms through traditional resilience.",
    },
    {
      country: "Kyrgyzstan",
      overview:
        "Stunning alpine peaks and nomadic heritage defined by a resilient spirit, yet burdened by the shadows of post-Soviet politics.",
    },
    {
      country: "Laos",
      overview:
        "Stunning Buddhist traditions and mountain vistas define this serene nation, though geographic isolation limits economic opportunities and modern growth.",
    },
    {
      country: "Macau",
      overview:
        "Portuguese colonial charm meets a high-stakes skyline, where a world-leading casino industry fuels rapid, glitzy modern development.",
    },
    {
      country: "Malaysia",
      overview:
        "A vibrant cultural fusion of Malay, Chinese, and Indian heritages set against lush jungles and thriving, stable development.",
    },
    {
      country: "Mexico",
      overview:
        "Ancient Mayan heritage meets sun-drenched tourism, where coastal resorts and modern luxury stand in contrast to deep regional poverty.",
    },
    {
      country: "Mongolia",
      overview:
        "Stark nomadic beauty across the steppes and mountains, where herding families face extreme vulnerability to brutal, life-altering winters.",
    },
    {
      country: "Morocco",
      overview:
        "Culturally vibrant and historically deep, this charismatic, chaotic kingdom is also maked by pockets of abject poverty.",
    },
    {
      country: "Myanmar",
      overview:
        "Breathtaking temples and landscapes haunted by a tragic reversal from brief democratic hope to renewed regime oppression.",
    },
    {
      country: "Namibia",
      overview:
        "Magical desert landscapes and diverse wildlife meet surprising, first-world infrastructure, offering a seamless journey.",
    },
    {
      country: "Nepal",
      overview:
        "Stunning Himalayan peaks and a robust people, persevering through extreme poverty with limited access to modern infrastructure and amenities.",
    },
    {
      country: "Netherlands",
      overview:
        "Seafaring innovators with a premier social safety net, mastering a low-land landscape through constant adaptation.",
    },
    {
      country: "New Zealand",
      overview:
        "Remote, wild islands of breathtaking beauty where pristine landscapes remain untamed and sheep famously outnumber the spirited local population.",
    },
    {
      country: "North Korea",
      overview:
        "Historical sites serve a curated, anti-imperialist alternate reality and indoctrination and propaganda are pervasive.",
    },
    {
      country: "Norway",
      overview:
        "Breathtaking glacial fjords and dancing auroras, supported by world-class infrastructure that defies its vast, sparsely populated wilderness.",
    },
    {
      country: "Palau",
      overview:
        "A pristine snorkeling paradise of fragile beauty, currently grappling with high costs and the existential threat of climate change.",
    },
    {
      country: "Peru",
      overview:
        "Timeless Incan ruins and dramatic peaks, preserved by a warm, welcoming culture that remains authentic despite global popularity.",
    },
    {
      country: "Philippines",
      overview:
        "Vast inequality, systemic corruption and poor infrastructure mar a beautiful archipelago, where talent is often exported",
    },
    {
      country: "Portugal",
      overview:
        "Affordable culinary excellence set against dramatic, water-view hillsides, where historic charm meets a vibrant, high-potential future.",
    },
    {
      country: "Qatar",
      overview:
        "A pristine desert oasis where oil wealth fuels hyper-modernity and artistic architecture, built largely by a transient workforce",
    },
    {
      country: "Russia",
      overview:
        "An oppressive regime contrasted by warm people, eclectic creativity, and a rich history spanning European elegance and Soviet power.",
    },
    {
      country: "Scotland",
      overview:
        "Ancient castles dot the grassy, treeless Highlands, offering a safe, historic sanctuary for solo trekkers on the great walks.",
    },
    {
      country: "Singapore",
      overview:
        "A compact, ultra-modern financial hub where innovative concrete jungles and global flavors create Asia’s premier, high-tech transit point.",
    },
    {
      country: "South Korea",
      overview:
        "Elite modern infrastructure and creative energy meeting traditional gender constraints in a high-growth society.",
    },
    {
      country: "Spain",
      overview:
        "A laid-back, livable capital in Madrid offering a relaxed pace, though with more subtle historical depth than neighbors.",
    },
    {
      country: "Sri Lanka",
      overview:
        "Exotic landscapes and sacred heights offering a safer, more navigable solo-travel alternative.",
    },
    {
      country: "Taiwan",
      overview:
        "A surprising fusion of high-tech efficiency and rugged nature, where 12,000-foot peaks meet world-class modern city living.",
    },
    {
      country: "Tajikistan",
      overview:
        "A mountain-covered nation where deep agricultural roots and Muslim traditions endure, but may hinder development.",
    },
    {
      country: "Tanzania",
      overview:
        "A land of iconic peaks and safaris where tourism wealth struggles to reach the wider struggling population.",
    },
    {
      country: "Thailand",
      overview:
        "Affordable luxury defined by exceptional service, aromatic flavors, and modern infrastructure, making it a premier, easy-to-navigate global tourist favorite.",
    },
    {
      country: "Turkey",
      overview:
        "Istanbul stands as a breathtaking, densely populated bridge of cultures, offering immense history within a vibrant, sprawling metropolis.",
    },
    {
      country: "UAE",
      overview:
        "A gaudy, ultra-modern desert oasis where oil wealth and imported labor create a climate-controlled world of luxury malls.",
    },
    {
      country: "United States",
      overview:
        "A vast, varied expanse where immense opportunity and coastal wealth contrast sharply with thin safety nets and extreme poverty.",
    },
    {
      country: "Uzbekistan",
      overview:
        "A Silk Road legacy of trade and entrepreneurship constrained by the friction of modern policies",
    },
    {
      country: "Vietnam",
      overview:
        "A motivated, rising star moving beyond war with exceptional cuisine, unexpected diversity, and charming French-influenced colonial jewels.",
    },
  ];

  // Count the total number of destinations defined in your array
  const totalDestinations = rawDestinations.length;
  const destinations = rawDestinations.map((dest) => {
    const slug = createSlug(dest.country);
    const photoCount = getPhotoCount(slug);

    return {
      ...dest,
      slug,
      photoCount,
      image: `/images/travel/${slug}_cover.jpg`,
      hasStory: photoCount > 0,
    };
  });

  return (
    <div className="max-w-6xl mx-auto px-6 py-16 text-slate-100">
      <header className="mb-12 text-slate-900 dark:text-slate-100 border-b border-slate-800 pb-8">
        <h1 className="text-4xl font-extrabold mb-4">Global Lens</h1>
        <p className="mb-6">
          Documenting the world through a photographic lens—capturing the
          intersection of culture, environment, and the systemic forces that
          shape individual outcomes. The core of my perspective is shaped by my
          time in the United States and the Philippines where I have witnessed
          the daily grit, the communal warmth, and the complex barriers to
          social mobility.
        </p>
        {/* The Counter Display */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          {totalDestinations} Destinations
        </div>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {destinations.map((dest, index) => {
          // FIX: Calculate the count for EACH destination inside the loop
          const currentPhotoCount = getPhotoCount(dest.slug);
          const hasStory = currentPhotoCount > 0;

          return (
            <article
              key={index}
              className="group flex flex-col bg-slate-900 border border-slate-800 rounded-xl overflow-hidden aspect-square"
            >
              {/* Top 3/4: Photo + hover callout */}
              <div className="relative h-3/4 w-full overflow-hidden">
                <Image
                  src={dest.image}
                  alt={dest.country}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />

                {/* Overview callout — appears on hover */}
                <div className="absolute inset-x-3 bottom-3 left-3 right-3 opacity-0 transition-opacity duration-200 group-hover:opacity-100 pointer-events-none">
                  <div className="rounded-lg border-l-4 border-blue-400 bg-slate-900/90 backdrop-blur-md px-4 py-3 shadow-2xl opacity-70">
                    <p className="text-slate-200 text-sm leading-snug line-clamp-3 italic">
                      {dest.overview}
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom 1/4: Content */}
              <div className="h-1/4 min-h-0 flex flex-col p-4">
                <h2 className="text-xl font-bold text-white truncate">
                  {dest.country}
                </h2>

                {/* Metadata Row */}
                <div className="mt-auto pt-2 border-t border-slate-800 flex items-center justify-between">
                  {/* Photo Count Display */}
                  <div className="flex items-center gap-1.5 text-slate-400 text-xs font-medium">
                    <Camera size={14} />
                    <span>{currentPhotoCount} Photos</span>
                  </div>

                  {/* Conditionality: Only show link if folder has images */}
                  {hasStory && (
                    <Link
                      href={`/travel/${dest.slug}`}
                      className="flex items-center gap-1 text-sm font-bold text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      View Story
                      <ArrowRight
                        size={16}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </Link>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default TravelPage;

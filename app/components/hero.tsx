import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden flex items-center justify-center bg-[#0a0a0a]">
      {/* Background Image: Using a subtle data-node or abstract dark image */}
      <Image
        src="/hero_oakland_lake_merritt_2026.jpg" // Place your downloaded image in /public
        alt="Natalie Chun Portfolio Background"
        fill
        priority
        className="object-cover opacity-40 z-0"
      />

      {/* Subtle Gradient Overlay to ensure text pops regardless of image brightness */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60 z-10" />

      {/* Content Area */}
      <div className="relative z-20 text-center px-6">
        <span className="text-blue-400 font-mono text-sm tracking-widest uppercase mb-4 block animate-fade-in">
          Data Scientist & Economist
        </span>

        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-4">
          Natalie Chun
        </h1>

        <div className="h-1 w-20 bg-blue-500 mx-auto mb-6 rounded-full" />

        <p className="text-xl md:text-2xl text-gray-300 font-light max-w-2xl mx-auto leading-relaxed">
          Architecting data systems that bridge rigorous causal economics with
          interpretable machine learning to drive strategic decision-making.
        </p>
      </div>
    </section>
  );
}

import React from "react";
import Image from "next/image";
import Link from "next/link";

const AboutSection = () => {
  const pillars = [
    {
      title: "Economic Research",
      href: "/research",
      image: "/market_economics.jpg", // Replace with your paths
      description:
        "My journey began in international development, including significant work with the Asian Development Bank on poverty reduction and social welfare. This experience instilled in me a rigorous approach to understanding human incentives and a commitment to building systems that don't just generate insights, but drive equity and access.",
    },
    {
      title: "Strategy",
      href: "/strategy",
      image: "/strategy_chess_board_bw.jpg",
      description:
        "I bring a unique dual-capacity to leadership: the ability to navigate high-stakes strategic decisions with C-suite stakeholders, and the technical rigor to deploy production-grade data infrastructure. I specialize in aligning technical roadmaps with mission-critical business value.",
    },
    {
      title: "Full-Stack Execution",
      href: "https://github.com/natc79",
      image: "/builder_bridge.jpg",
      description:
        "I am a builder at heart. I am equally at home defining a multi-year data strategy as I am productionizing dbt pipelines or engineering predictive models. I thrive in high-growth, ambiguous environments, helping cross-functional teams speak a common, data-driven language.",
    },
    {
      title: "Global Lens",
      href: "/travel",
      image: "/travel_global_lens.jpg",
      description:
        "Having traveled to more than 60 countries, I have a deep appreciation for the diversity of human experience. This global perspective allows me to navigate operational ambiguity with empathy and adaptability, ensuring that the solutions I build are as inclusive as they are scalable.",
    },
  ];

  return (
    <section className="max-w-4xl mx-auto px-6 py-12 lg:py-20 text-slate-900">
      {/* Intro Bio */}
      <article className="mb-16 text-lg leading-relaxed text-slate-400 max-w-6xl">
        <p className="mb-6">
          My personal mission is to use data to help solve the world&apos;s most
          pressing challenges.
        </p>
        <p>
          My career is defined by 0→1 ownership, where I specialize in building
          data functions from the ground up—architecting both the strategic
          roadmaps and the full-stack, production-facing systems necessary to
          turn ambiguous problems into scalable solutions.
        </p>
      </article>

      {/* Pillar Grid */}
      {/* Pillar List */}
      <div className="flex flex-col gap-16">
        {" "}
        {/* Increased gap for visual breathing room */}
        {pillars.map((pillar, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row gap-8 items-start"
          >
            {/* Image Container */}
            <Link
              href={pillar.href}
              className="relative w-full md:w-1/3 aspect-[4/3] overflow-hidden rounded-xl bg-slate-800 shadow-lg block"
            >
              <Image
                src={pillar.image}
                alt={pillar.title}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </Link>

            {/* Text Content */}
            <div className="w-full md:w-2/3 space-y-3">
              <h2 className="font-bold text-xl uppercase tracking-wide text-white">
                {pillar.title}
              </h2>
              <p className="text-slate-400 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Personal Note / Footer */}
      <footer className="mt-20 pt-8 border-t border-slate-200">
        <p className="text-slate-400 italic">
          When I’m not architecting data systems, I like to spend my time
          capturing the world through a lens and exploring different cultures
          and the environments that shape economic outcomes.
        </p>
      </footer>
    </section>
  );
};

export default AboutSection;

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BarChart3, Globe, Cpu } from "lucide-react";

const StrategyPage = () => {
  const projects = [
    {
      company: "Cambly",
      title: "Product Prioritization and Conversion Funnel Optimization",
      slug: "conversion-funnel-optimization", // Used for the detailed page link
      image: "/conversion_funnel.png",
      impact: "30% increase in paid trial purchases",
      abstract:
        "To align engineering and product roadmaps, I architected a 5-stage conversion funnel analysis (Signup → Tutor Search → Trial Purchase → Trial Booking → Conversion). Leveraging observational data while correcting for omitted variable bias through historical experiment benchmarking, I modeled the expected returns of various interventions. My analysis identified the Tutor Search Page and Search Ranking Algorithm as the highest-leverage opportunities for driving profitability.",
      stack: ["Python", "DBT", "BigQuery", "Algolia", "MongoDB"],
      year: "2025",
    },
    {
      company: "Retool",
      title: "Data Infrastructure ROI",
      slug: "dynamic-pricing-markets",
      image: "/data_pipeline.png",
      impact: "$500K+ savings per year from reduction in compute costs",
      abstract:
        "Upon joining Retool, I inherited a legacy data infrastructure built for speed but not for scale, resulting in fragmented metrics, high maintenance overhead, and escalating warehouse costs. I led a 0→1 overhaul of the data warehouse architecture, moving from an ad-hoc pipeline to a modular, reporting-first framework. My strategy focused on three pillars: Usability, by creating a robust reporting layer tied to core company KPIs; Performance, by modularizing code to eliminate redundant compute; and Reliability, by implementing standardized data testing and quality protocols.",
      stack: ["DBT", "BigQuery"],
      year: "2023",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-16 text-slate-100">
      <header className="mb-20 text-slate-900 dark:text-slate-100 border-b border-slate-800 pb-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 mb-6 bg-clip-text">
          Strategy & Execution
        </h1>
        <p className="text-slate-400 text-xl max-w-3xl leading-relaxed">
          Engineering clarity from ambiguity: Leading the evolution of data
          functions from early-stage startups to rapid-scale environments.
        </p>
      </header>

      <div className="grid gap-20">
        {projects.map((project, index) => (
          <article
            key={index}
            className="group flex flex-col lg:flex-row gap-12 items-center"
          >
            {/* Image / Visual Anchor */}
            <Link
              href={`/strategy/${project.slug}`}
              className="relative w-full lg:w-1/3 aspect-video overflow-hidden rounded-2xl bg-slate-800 border border-slate-700 shadow-2xl"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-60" />
            </Link>

            {/* Content Section */}
            <div className="w-full lg:w-2/3 space-y-5">
              <div className="flex items-center gap-4 text-blue-400 font-mono text-sm tracking-widest uppercase">
                <span>{project.company}</span>
                <span className="text-slate-700">•</span>
                <span>{project.year}</span>
              </div>

              <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-blue-400 transition-colors">
                <Link href={`/strategy/${project.slug}`}>{project.title}</Link>
              </h2>

              <div className="bg-blue-500/10 border-l-2 border-blue-500 p-4 mb-4">
                <p className="text-blue-400 font-medium italic">
                  {project.impact}
                </p>
              </div>

              <p className="text-slate-400 text-lg leading-relaxed">
                {project.abstract}
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-md bg-slate-800 text-slate-300 text-xs font-semibold border border-slate-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* <div className="pt-6">
                <Link
                  href={`/strategy/${project.slug}`}
                  className="inline-flex items-center gap-2 text-white font-bold group/btn"
                >
                  Read Full Case Study
                  <ArrowRight
                    size={20}
                    className="transition-transform group-hover/btn:translate-x-2 text-blue-400"
                  />
                </Link>
              </div> */}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default StrategyPage;

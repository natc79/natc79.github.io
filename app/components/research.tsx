import React from "react";
import { FileText, ExternalLink, Download, BookOpen } from "lucide-react";
import Link from "next/link";

const ResearchPage = () => {
  const researchPieces = [
    {
      title:
        "Special Chapter:  A Smarter Future:  Skills, Education, and Growth in Asia.",
      type: "Published Report",
      year: "2015",
      journal: "Key Indicators for Asia and the Pacific.",
      abstract:
        "While progress in the spread of education is noticeable, shortfalls in the quantity and, especially, quality of education constrain skill development and growth. This report examines learning progress based on empirical research finding that beyond public expenditures, families and firms need to be involved in the region's skill development agenda.",
      tags: ["Development Economics", "Skills", "Education", "Asia"],
      link: "https://www.adb.org/publications/key-indicators-asia-and-pacific-2015", // Link to your PDF in /public
    },
    {
      title:
        "Bonus compensation and productivity:  evidence from Indian manufacturing plants (with S. Lee)",
      type: "Published Paper",
      year: "2015",
      journal: "Journal of Productivity Analysis",
      abstract:
        "This paper examines whether bonus compensation for managers and workers matter for manufacturing plant productivity. We find that conditional on a plant’s observable and unobservable characteristics, allocating a higher proportion of compensation to bonus pay for managers and workers has a significant positive effect on productivity.",
      tags: ["Development Economics", "Compensation", "Manufacturing", "India"],
      link: "https://link.springer.com/article/10.1007/s11123-014-0421-z", // Link to your PDF in /public
    },
    {
      title:
        "Increasing households access to water services:  a cost recoverable pricing model",
      type: "Published Paper",
      year: "2014",
      journal: "Journal of Water Resources Development",
      abstract:
        "Pricing policies can serve as a low-cost and effective tool for increasing access to water and sanitation services among poor households while allowing the provider to recover costs. An empirical model is applied to contingent-valuation survey data for water services in Cebu, Philippines.",
      tags: [
        "Development Economics",
        "Water Services",
        "Pricing",
        "Phillipines",
      ],
      link: "https://www.tandfonline.com/doi/abs/10.1080/07900627.2014.895926", // Link to your PDF in /public
    },
    {
      title:
        "How households in Pakistan take on energy efficient lighting (with Y. Jiang)",
      type: "Published Paper",
      year: "2013",
      journal: "Energy Economics",
      abstract:
        "A household survey in Pakistan is used to examine drivers of more efficient compact fluorescent light bulb (CFL) adoption and the impact of CFL adoption on the demand for lighting services.",
      tags: ["Development Economics", "Energy Economics", "Pakistan"],
      link: "https://www.sciencedirect.com/science/article/abs/pii/S0140988313001515", // Link to your PDF in /public
    },
    {
      title:
        "Can skill diversification improve welfare in rural areas? evidence from Bhutan (with M. Watanabe)",
      type: "Published Paper",
      year: "2012",
      journal: "Journal of Development Effectiveness",
      abstract:
        "Income growth in rural areas is a considerable challenge to further poverty reduction and economic development.  Using a survey of rural Bhutanese households, we investigate the impacts of a vocational skills training programme that was intended to diversify incomes outside agriculture.",
      tags: ["Development Economics", "Rural Economics", "Skills", "Bhutan"],
      link: "https://www.tandfonline.com/doi/abs/10.1080/19439342.2012.674965", // Link to your PDF in /public
    },
    {
      title:
        "The impact of health insurance mandates on drug innovation:  evidence from the United States (with M. Park)",
      type: "Published Paper",
      year: "2012",
      journal: "European Journal of Health Economics",
      abstract:
        "An important health policy issue is the low rate of patient enrollment into clinical trials, which may slow down the process of clinical trials and discourage their supply, leading to delays in innovative life-saving drug treatments reaching the general population.  This paper evaluates empirically how effective these policies were in increasing the supply of clinical trials and speeding up their completion, using data on cancer clinical trials initiated in the US between 2001 and 2007. ",
      tags: ["Health Economics", "Health Policy", "Clinical Trials"],
      link: "https://link.springer.com/article/10.1007/s10198-012-0379-6", // Link to your PDF in /public
    },
    {
      title:
        "The impact of clinical trial insurance coverage mandates on racial minorities and low income individuals (with M. Park)",
      type: "Published Paper",
      year: "2012",
      journal: "Applied Economics",
      abstract:
        "This article examines if state mandates requiring health insurers to cover routine care costs for patients enrolled in clinical trials helped reduce the gap in clinical trial access between the affluent and the poor and between whites and racial minorities.",
      tags: ["Health Economics", "Health Policy", "Clinical Trials"],
      link: "https://www.tandfonline.com/doi/full/10.1080/00036846.2011.556595", // Link to your PDF in /public
    },
    {
      title:
        "Do markets respond to quality information? The case of fertility clinics (with M. Bundforf, G. Shah Goda, D. Kessler)",
      type: "Published Paper",
      year: "2011",
      journal: "Journal of Health Economics",
      abstract:
        "Although policymakers have increasingly turned to provider report cards as a tool to improve healthcare quality, existing studies provide mixed evidence on whether they influence consumer choices. We examine the effects of providing consumers with quality information in the context of fertility clinics providing Assisted Reproductive Therapies (ART).",
      tags: ["Health Economics", "Report Cards"],
      link: "https://econpapers.repec.org/article/eeejhecon/v_3a28_3ay_3a2009_3ai_3a3_3ap_3a718-727.htm", // Link to an external URL
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-16 text-slate-900 dark:text-slate-100">
      <header className="mb-16 border-b border-slate-800 pb-8">
        <h1 className="text-4xl font-bold mb-4">Research & Publications</h1>
        <p className="text-slate-400 text-lg max-w-4xl">
          My body of work spans the space of empirical analysis of health
          economics, poverty, and social welfare within the context of
          international development. My portfolio includes a diverse range of
          publications, from rigorous empirical studies in peer-reviewed
          journals that showcase methodological excellence to approachable
          research briefs and reports tailored for development policy audiences.
          The common theme of this research is to provide rigorous evidence
          needed to develop strategic data driven recommendations to identify
          impactful investment opportunities.
        </p>
      </header>

      <div className="grid gap-12">
        {researchPieces.map((piece, index) => (
          <article
            key={index}
            className="group relative flex flex-col md:flex-row gap-8 p-6 rounded-2xl transition-all hover:bg-slate-900/50 border border-transparent hover:border-slate-800"
          >
            {/* Left: Metadata */}
            <div className="w-full md:w-48 shrink-0">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-500/10 text-blue-400 mb-4">
                {piece.type}
              </span>
              <div className="text-slate-500 font-mono text-sm">
                {piece.year}
              </div>
              <div className="text-slate-400 font-medium text-sm mt-1">
                {piece.journal}
              </div>
            </div>

            {/* Right: Content */}
            <div className="flex-grow">
              <h2 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white group-hover:text-blue-400 transition-colors">
                {piece.title}
              </h2>
              <p className="text-slate-400 leading-relaxed mb-6">
                {piece.abstract}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {piece.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 bg-slate-800 text-slate-300 rounded"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <Link
                  href={piece.link}
                  target="_blank"
                  className="flex items-center gap-2 px-5 py-2 bg-white text-black rounded-full font-semibold hover:bg-blue-400 transition-colors"
                >
                  <FileText size={18} />
                  Full Article
                </Link>
                <button className="flex items-center gap-2 px-5 py-2 border border-slate-700 rounded-full font-semibold hover:border-slate-400 transition-colors">
                  <BookOpen size={18} />
                  Cite
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default ResearchPage;

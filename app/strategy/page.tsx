import StrategyPage from "app/components/strategy";
import { generateMetadata } from "@/app/lib/metadata";

export const metadata = generateMetadata({
  title: "Strategy",
  description:
    "Turning ambiguous business problems into production-grade data products.",
  slug: "/strategy",
});

export default function Page() {
  return (
    <section className="antialiased mx-4 mt-8 max-w-6xl lg:mx-auto">
      <StrategyPage />
    </section>
  );
}

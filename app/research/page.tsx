import ResearchPage from "app/components/research";
import { generateMetadata } from "@/app/lib/metadata";

export const metadata = generateMetadata({
  title: "Economic Research",
  description: "Economics, poverty, and social welfare research articles",
  slug: "/research",
});

export default function Page() {
  return (
    <section className="antialiased mx-4 mt-8 max-w-6xl lg:mx-auto">
      <ResearchPage />
    </section>
  );
}

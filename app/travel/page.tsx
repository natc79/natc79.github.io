import TravelPage from "app/components/travel";
import { generateMetadata } from "@/app/lib/metadata";


export const metadata = generateMetadata({
  title: "Travel",
  description: "Travel and photography log",
  slug: "/travel",
});

export default function Page() {
  return (
    <section className="antialiased mx-4 mt-8 max-w-6xl lg:mx-auto">
      <TravelPage />
    </section>
  );
}

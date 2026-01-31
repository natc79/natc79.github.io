import { BlogPosts } from "app/components/posts";
import Hero from "app/components/hero";
import AboutSection from "app/components/about";
import { generateMetadata } from "@/app/lib/metadata";

export const metadata = generateMetadata({
  title: "Natalie Chun | Data Scientist and Economist",
  description: "Economist and Staff Data Scientist...",
  slug: "/",
});

export default function Page() {
  return (
    <main className="w-full">
      <Hero />
      <section className="antialiased mx-4 mt-8 max-w-6xl lg:mx-auto">
        <AboutSection />
      </section>
    </main>
  );
}

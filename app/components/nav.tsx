import Link from "next/link";

const navItems = {
  "/": {
    name: "home",
  },
  // "/blog": {
  //   name: "blog",
  // },
  "/research": {
    name: "research",
  },
  "/strategy": {
    name: "strategy",
  },
  "/travel": {
    name: "travel",
  },
  // "https://vercel.com/templates/next.js/portfolio-starter-kit": {
  //   name: "deploy",
  // },
};

export function Navbar() {
  return (
    /* 1. Changed to <header> for SEO/Accessibility.
       2. added 'sticky top-0' and 'z-50' to ensure it stays on top.
       3. 'backdrop-blur' improves readability of text passing underneath.
    */
    <header className="sticky top-0 z-50 w-full shrink-0 border-b border-neutral-200 bg-white/75 backdrop-blur-md dark:border-neutral-800 dark:bg-neutral-950/75">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-10 lg:px-16">
        <nav
          className="flex h-16 items-center justify-between"
          aria-label="Main navigation"
        >
          <div className="flex flex-row items-center space-x-2">
            {Object.entries(navItems).map(([path, { name }]) => {
              const isExternal = path.startsWith("http");
              return (
                <Link
                  key={path}
                  href={path}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  className="relative px-3 py-2 text-sm font-medium transition-colors hover:text-neutral-900 dark:hover:text-neutral-50 text-neutral-600 dark:text-neutral-400"
                >
                  {name}
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </header>
  );
}

import Image from "next/image";
import { languages } from "@/config/languages";
import ShareQrCode from "@/components/ShareQrCode";

const symbols = [
  {
    name: "The Stone",
    description: "A foundation of faith.",
    image: "/images/symbols/stone.png",
    alt: "Stone representing a strong foundation of faith",
    number: "01",
  },
  {
    name: "The Eagle",
    description: "Strength and protection.",
    image: "/images/symbols/eagle.jpeg",
    alt: "Eagle representing strength and protection",
    number: "02",
  },
  {
    name: "The Olive Tree",
    description: "Rooted in hope.",
    image: "/images/symbols/olive-tree.png",
    alt: "Olive tree representing hope",
    number: "03",
  },
  {
    name: "The Lion",
    description: "Courage and majesty.",
    image: "/images/symbols/lion.png",
    alt: "Lion standing on a rock",
    number: "04",
  },
];

const greetings = [
  "Welcome",
  "Murakaza neza",
  "Bem-vindos",
  "Byenveni",
  "Bienvenue",
  "Tukwanirizza",
  "Karibu",
  "Murakaza neza",
  "Bienvenidos",
];

export default function Home() {
  return (
    <main
      id="top"
      className="min-h-screen overflow-hidden bg-[#8FAE8B] font-sans text-[#243B2A]"
    >
      {/* HEADER */}
      <header className="relative z-10 border-b border-[#243B2A]/10 bg-[#8FAE8B]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-6 py-5 sm:flex-row lg:px-10">
          <a href="#top" className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#243B2A] text-xl text-white">
              ✦
            </span>

            <span className="text-sm font-bold tracking-[0.12em] sm:text-base">
              GREAT TENT CATHEDRAL
            </span>
          </a>

          <nav
            aria-label="Main navigation"
            className="flex flex-wrap items-center justify-center gap-3 text-sm font-semibold"
          >
            <a
              href="#symbols"
              className="hidden rounded-full px-3 py-2 transition hover:bg-white/30 sm:inline-block"
            >
              Our Identity
            </a>

            <a
              href="#languages"
              className="hidden rounded-full px-3 py-2 transition hover:bg-white/30 sm:inline-block"
            >
              Languages
            </a>

            <a
              href="/login"
              className="rounded-full border border-[#243B2A]/30 px-5 py-3 transition hover:bg-white/40"
            >
              Member Login
            </a>

            <a
              href="/signup"
              className="rounded-full bg-[#243B2A] px-5 py-3 text-white transition hover:bg-[#405D46]"
            >
              Create Account <span aria-hidden="true">↗</span>
            </a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="relative px-6 pb-20 pt-14 sm:pt-20 lg:px-10 lg:pb-28 lg:pt-24">
        <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-white/15 blur-3xl" />

        {/* CENTERED CATHEDRAL TITLE */}
        <p className="relative mb-12 text-center text-xl font-bold uppercase tracking-[0.24em] text-white">
          LA CARPA DE YO SOY JOSÉ
        </p>

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.35fr_0.65fr]">
          <div>
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-[#243B2A]/20 bg-white/30 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-[#243B2A]" />
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#243B2A]">
                A worldwide community
              </span>
            </div>

            <div className="mb-7 flex flex-wrap gap-x-2 gap-y-2 text-sm font-semibold leading-relaxed text-[#243B2A] sm:text-base">
              {greetings.map((greeting, index) => (
                <span key={`${greeting}-${index}`}>
                  {greeting}
                  {index !== greetings.length - 1 && (
                    <span className="ml-2 text-white">·</span>
                  )}
                </span>
              ))}
            </div>

            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.08] tracking-[-0.045em] text-[#243B2A] sm:text-6xl lg:text-7xl">
              One community.
              <span className="block text-white">
                Many languages.
              </span>
              One shared faith.
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-[#243B2A] sm:text-lg">
              Welcome to the Great Tent Cathedral. Discover our international
              community, explore our symbolic identity and connect through
              the official Telegram channel in your preferred language.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#languages"
                className="inline-flex items-center gap-3 rounded-full bg-[#243B2A] px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-[#243B2A]/15 transition hover:-translate-y-1 hover:bg-[#405D46]"
              >
                Explore our community <span>↗</span>
              </a>

              <a
                href="#symbols"
                className="rounded-full border border-[#243B2A]/30 px-8 py-4 text-sm font-semibold transition hover:bg-white/30"
              >
                Discover our identity
              </a>
            </div>

            <p className="mt-7 text-xs font-semibold tracking-wide text-[#243B2A]">
              OPEN TO EVERYONE · NO ACCOUNT REQUIRED TO EXPLORE
            </p>
          </div>

          {/* FEATURE PANEL */}
          <div className="relative mx-auto w-full max-w-md">
            <div className="relative overflow-hidden rounded-[2rem] bg-[#243B2A] p-8 text-white shadow-2xl shadow-[#243B2A]/20 sm:p-10">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-white/10" />
              <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full border border-white/10" />

              <div className="relative">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#AFC9A9]">
                  A connected world
                </p>

                <div className="my-12">
                  <p className="text-7xl font-semibold tracking-tight sm:text-8xl">
                    09
                  </p>
                  <p className="mt-3 text-sm font-medium tracking-[0.18em] text-[#DCE8D8]">
                    LANGUAGES
                  </p>
                </div>

                <div className="h-px w-full bg-white/20" />

                <h2 className="mt-7 text-2xl font-semibold leading-snug">
                  Different languages.
                  <span className="block text-[#AFC9A9]">
                    One community.
                  </span>
                </h2>

                <p className="mt-4 text-sm leading-7 text-[#DCE8D8]">
                  Wherever you are, find a place to connect, discover and
                  participate in your preferred language.
                </p>

                <a
                  href="#languages"
                  className="mt-8 inline-flex items-center gap-3 text-sm font-semibold text-white transition hover:text-[#AFC9A9]"
                >
                  Find your language <span>→</span>
                </a>
              </div>
            </div>

            <div className="absolute -bottom-5 -left-5 -z-10 h-32 w-32 rounded-full bg-white/30 blur-2xl" />
          </div>
        </div>
      </section>

      {/* SYMBOLS */}
      <section
        id="symbols"
        className="border-y border-[#243B2A]/10 bg-[#8FAE8B] px-6 py-20 lg:px-10 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-[#243B2A]">
                Our identity
              </p>

              <h2 className="max-w-2xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Symbols that tell a story.
              </h2>
            </div>

            <p className="max-w-md text-base leading-7 text-[#243B2A]">
              Explore four symbolic elements representing the values of faith,
              strength, hope and courage.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {symbols.map((symbol) => (
              <article
                key={symbol.name}
                className="group overflow-hidden rounded-2xl border border-white/50 bg-[#F7F6F0] shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-xl"
              >
                {/* Image display reduced by 20% in width and height */}
                <div className="relative flex aspect-[4/5] items-center justify-center overflow-hidden bg-[#DCE8D8]">
                  <div className="absolute inset-[10%] overflow-hidden rounded-xl">
                    <Image
                      src={symbol.image}
                      alt={symbol.alt}
                      fill
                      sizes="(max-width: 640px) 80vw, (max-width: 1024px) 40vw, 20vw"
                      quality={90}
                      className="object-contain transition duration-700"
                    />
                  </div>

                  <span className="absolute left-4 top-4 rounded-full bg-[#243B2A]/90 px-4 py-2 text-xs font-semibold text-white">
                    {symbol.number}
                  </span>
                </div>

                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-[#243B2A]">
                    {symbol.name}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-[#718D6D]">
                    {symbol.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* LANGUAGE CHANNELS */}
      <section
        id="languages"
        className="relative overflow-hidden bg-[#243B2A] px-6 py-24 text-white lg:px-10 lg:py-28"
      >
        <div className="pointer-events-none absolute -left-40 -top-40 h-96 w-96 rounded-full border border-white/10" />
        <div className="pointer-events-none absolute -bottom-48 -right-32 h-[500px] w-[500px] rounded-full border border-white/10" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-[#AFC9A9]">
              Stay connected
            </p>

            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Find your language.
            </h2>

            <p className="mt-6 text-base leading-8 text-[#DCE8D8]">
              Choose a language below to visit its official Great Tent
              Cathedral Telegram community.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {languages.map((language, index) => (
              <article
                key={language.name}
                className="group rounded-2xl border border-white/15 bg-white/[0.06] p-7 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-[#AFC9A9]/60 hover:bg-white/[0.11]"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold tracking-[0.18em] text-[#AFC9A9]">
                    LANGUAGE {String(index + 1).padStart(2, "0")}
                  </span>

                  <span
                    className="text-3xl"
                    aria-label={`${language.name} flag`}
                  >
                    {language.flag}
                  </span>
                </div>

                <h3 className="mt-7 text-2xl font-semibold text-white">
                  {language.name}
                </h3>

                <p className="mt-2 text-sm text-[#DCE8D8]">
                  {language.nativeName}
                </p>

                {language.url ? (
                  <a
                    href={language.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-7 inline-flex items-center gap-3 rounded-full bg-[#AFC9A9] px-6 py-3 text-sm font-semibold text-[#243B2A] transition hover:bg-white"
                  >
                    Join Telegram <span>↗</span>
                  </a>
                ) : (
                  <span className="mt-7 inline-block rounded-full border border-white/20 px-6 py-3 text-sm text-[#DCE8D8]">
                    Channel coming soon
                  </span>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* QR CODE */}
      <div className="bg-[#8FAE8B]">
        <ShareQrCode />
      </div>

      {/* CENTERED FOOTER */}
      <footer className="bg-[#17291D] px-6 py-16 text-center text-white">
        <div className="mx-auto flex max-w-5xl flex-col items-center">
          <a
            href="#top"
            className="flex items-center justify-center gap-3 text-lg font-bold tracking-[0.12em]"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#8FAE8B] text-xl text-[#243B2A]">
              ✦
            </span>
            GREAT TENT CATHEDRAL
          </a>

          <p className="mt-5 text-base font-semibold tracking-wide text-[#AFC9A9]">
            LA CARPA DE YO SOY JOSÉ
          </p>

          <p className="mt-3 text-sm leading-7 text-[#DCE8D8]">
            One community. Many languages. One shared faith.
          </p>

          <nav
            aria-label="Footer navigation"
            className="mt-9 flex flex-wrap items-center justify-center gap-x-7 gap-y-4 text-sm font-medium text-[#DCE8D8]"
          >
            <a href="#symbols" className="transition hover:text-white">
              Our Identity
            </a>

            <a href="#languages" className="transition hover:text-white">
              Languages
            </a>

            <a href="/login" className="transition hover:text-white">
              Member Login
            </a>

            <a href="/signup" className="transition hover:text-white">
              Register
            </a>
          </nav>

          <div className="mt-10 w-full border-t border-white/15 pt-7">
            <p className="text-xs text-[#AFC9A9]">
              © 2026 Great Tent Cathedral. All rights reserved.
            </p>

            <a
              href="#top"
              className="mt-5 inline-block text-xs font-semibold text-[#DCE8D8] transition hover:text-white"
            >
              Back to top ↑
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

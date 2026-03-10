import { useRef } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { useSEO } from "@/hooks/useSEO";
import { games, featuredGame, categories } from "@/data/games";
import { GameIframe } from "@/components/game/GameIframe";
import { GameGrid } from "@/components/game/GameGrid";
import { FloatingSearch } from "@/components/game/FloatingSearch";
import { Link } from "react-router-dom";

const DOMAIN = "https://slice-master.us";

const Index = () => {
  const { t, language, localizedPath } = useLanguage();
  const iframeRef = useRef<HTMLDivElement>(null);

  useSEO({
    title: t("site_title"),
    description: t("site_description"),
    canonical: language === "en" ? DOMAIN : `${DOMAIN}/${language}`,
    lang: language,
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Slice Master",
        url: DOMAIN,
        potentialAction: {
          "@type": "SearchAction",
          target: `${DOMAIN}/search?q={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Slice Master",
        url: DOMAIN,
        email: "game@slice-master.us",
        logo: `${DOMAIN}/og-image.jpg`,
      },
      {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "Slice Master",
        applicationCategory: "GameApplication",
        operatingSystem: "Web Browser",
        description: featuredGame.description,
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        aggregateRating: { "@type": "AggregateRating", ratingValue: "4.7", ratingCount: "12840" },
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: t("faq_free_q"), acceptedAnswer: { "@type": "Answer", text: t("faq_free_a") } },
          { "@type": "Question", name: t("faq_mobile_q"), acceptedAnswer: { "@type": "Answer", text: t("faq_mobile_a") } },
          { "@type": "Question", name: t("faq_unblocked_q"), acceptedAnswer: { "@type": "Answer", text: t("faq_unblocked_a") } },
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [{ "@type": "ListItem", position: 1, name: t("home"), item: DOMAIN }],
      },
      {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: t("all_games"),
        hasPart: games.map((g, i) => ({
          "@type": "VideoGame",
          position: i + 1,
          name: g.name,
          url: `${DOMAIN}/game/${g.slug}`,
          description: g.description,
          playMode: "SinglePlayer",
          isAccessibleForFree: true,
        })),
      },
    ],
  });

  return (
    <div>
      {/* Featured game */}
      <div ref={iframeRef}>
        <GameIframe
          src={featuredGame.iframeUrl}
          title={featuredGame.name}
          className="w-full h-[55vh] md:h-[60vh]"
        />
      </div>

      <FloatingSearch triggerRef={iframeRef as React.RefObject<HTMLElement>} />

      <div className="container px-4 mt-8">
        {/* Featured game info */}
        <section className="mb-10 max-w-4xl">
          <h1 className="font-heading font-bold text-2xl md:text-4xl mb-3 text-foreground leading-tight">
            {featuredGame.name} — {t("free_online_games")}
          </h1>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {featuredGame.description}
          </p>
        </section>

        {/* Categories */}
        <section className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-6 bg-primary" />
            <h2 className="font-heading font-bold text-lg text-foreground">{t("categories")}</h2>
          </div>
          <div className="flex flex-wrap">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                to={localizedPath(`/category/${cat.slug}`)}
                className="border blade-border px-5 py-2.5 text-sm font-heading font-semibold text-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-150 -ml-px first:ml-0"
              >
                {cat.name}
              </Link>
            ))}
          </div>
        </section>

        {/* All games grid */}
        <GameGrid games={games} title={t("all_games")} />

        {/* FAQ */}
        <section className="mt-14 mb-8 max-w-3xl">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-1 h-6 bg-primary" />
            <h2 className="font-heading font-bold text-lg text-foreground">{t("faq")}</h2>
          </div>
          <div className="flex flex-col">
            {[
              { q: t("faq_free_q"), a: t("faq_free_a") },
              { q: t("faq_mobile_q"), a: t("faq_mobile_a") },
              { q: t("faq_unblocked_q"), a: t("faq_unblocked_a") },
            ].map((item, i) => (
              <div key={i} className="border blade-border p-5 -mt-px">
                <h3 className="font-heading font-bold text-sm text-foreground">{item.q}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SEO content block */}
        <section className="mt-10 mb-8 max-w-4xl">
          <h2 className="font-heading font-bold text-lg mb-3 text-foreground">
            Play Slice Master Online Free — The Best Slicing Games
          </h2>
          <div className="text-sm text-muted-foreground leading-relaxed space-y-3">
            <p>
              Welcome to <strong>Slice Master</strong> — your ultimate destination for free online slicing games! Whether you're looking for <em>Slice Master Cool Math Games</em>, fruit cutting challenges, ninja sword action, or relaxing puzzle slicers, we have the perfect game for you.
            </p>
            <p>
              Our collection features over 30 hand-picked slicing games that you can play instantly in your browser — no downloads, no sign-ups, completely free. From the viral hit <strong>Slice Master on Cool Math Games</strong> to creative titles like Sushi Slice, Jelly Slices, and Samurai Slash 3D, every game delivers satisfying cutting action.
            </p>
            <p>
              All games on slice-master.us are <strong>unblocked</strong> and work on desktop, tablet, and mobile devices. Start playing now and discover why millions of players love slicing games!
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;

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
        {/* Featured game description */}
        <section className="mb-8">
          <h1 className="font-heading font-bold text-2xl md:text-3xl mb-2 text-foreground">
            {featuredGame.name} — {t("free_online_games")}
          </h1>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl">
            {featuredGame.description}
          </p>
        </section>

        {/* Categories */}
        <section className="mb-8">
          <h2 className="font-heading font-bold text-lg mb-3 text-foreground">{t("categories")}</h2>
          <div className="flex flex-wrap gap-0">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                to={localizedPath(`/category/${cat.slug}`)}
                className="border blade-border px-4 py-2 text-sm font-heading font-medium text-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-150"
              >
                {cat.name}
              </Link>
            ))}
          </div>
        </section>

        {/* All games grid */}
        <GameGrid games={games} title={t("all_games")} />

        {/* FAQ */}
        <section className="mt-12 mb-8 max-w-3xl">
          <h2 className="font-heading font-bold text-lg mb-4 text-foreground">{t("faq")}</h2>
          <div className="flex flex-col">
            {[
              { q: t("faq_free_q"), a: t("faq_free_a") },
              { q: t("faq_mobile_q"), a: t("faq_mobile_a") },
              { q: t("faq_unblocked_q"), a: t("faq_unblocked_a") },
            ].map((item, i) => (
              <div key={i} className="border blade-border p-4 -mt-px">
                <h3 className="font-heading font-bold text-sm text-foreground">{item.q}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{item.a}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;

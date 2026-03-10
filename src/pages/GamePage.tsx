import { useParams, Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import { useSEO } from "@/hooks/useSEO";
import { games, categories, getRelatedGames } from "@/data/games";
import { GameIframe } from "@/components/game/GameIframe";
import { GameGrid } from "@/components/game/GameGrid";

const DOMAIN = "https://slice-master.us";

const GamePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t, language, localizedPath } = useLanguage();

  const game = games.find((g) => g.slug === slug);

  if (!game) {
    return (
      <div className="container px-4 py-16 text-center">
        <h1 className="font-heading font-bold text-2xl text-foreground">Game not found</h1>
        <Link to={localizedPath("/")} className="mt-4 inline-block text-primary text-sm font-heading font-medium">
          {t("back_to_games")}
        </Link>
      </div>
    );
  }

  const category = categories.find((c) => c.id === game.category);
  const related = getRelatedGames(game);

  useSEO({
    title: `${game.name} - Play Free Online | Slice Master`,
    description: game.description,
    canonical: `${DOMAIN}${localizedPath(`/game/${game.slug}`)}`,
    lang: language,
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: game.name,
        applicationCategory: "GameApplication",
        operatingSystem: "Web Browser",
        description: game.description,
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      },
      {
        "@context": "https://schema.org",
        "@type": "VideoGame",
        name: game.name,
        genre: category?.name || "Slicing",
        playMode: "SinglePlayer",
        isAccessibleForFree: true,
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: `Is ${game.name} free to play?`, acceptedAnswer: { "@type": "Answer", text: t("faq_free_a") } },
          { "@type": "Question", name: `Can I play ${game.name} on mobile?`, acceptedAnswer: { "@type": "Answer", text: t("faq_mobile_a") } },
          { "@type": "Question", name: `Is ${game.name} unblocked?`, acceptedAnswer: { "@type": "Answer", text: t("faq_unblocked_a") } },
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: t("home"), item: DOMAIN },
          ...(category
            ? [{ "@type": "ListItem", position: 2, name: category.name, item: `${DOMAIN}/category/${category.slug}` }]
            : []),
          { "@type": "ListItem", position: category ? 3 : 2, name: game.name, item: `${DOMAIN}/game/${game.slug}` },
        ],
      },
    ],
  });

  return (
    <div>
      {/* Game iframe */}
      <GameIframe src={game.iframeUrl} title={game.name} className="w-full h-[55vh] md:h-[65vh]" />

      <div className="container px-4 mt-6">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-1 text-xs text-muted-foreground mb-4">
          <Link to={localizedPath("/")} className="hover:text-primary">{t("home")}</Link>
          <span>/</span>
          {category && (
            <>
              <Link to={localizedPath(`/category/${category.slug}`)} className="hover:text-primary">{category.name}</Link>
              <span>/</span>
            </>
          )}
          <span className="text-foreground">{game.name}</span>
        </nav>

        {/* Game info */}
        <section className="mb-8">
          <h1 className="font-heading font-bold text-2xl md:text-3xl mb-2 text-foreground">
            {t("play_game")} {game.name}
          </h1>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl">{game.description}</p>
        </section>

        {/* FAQ */}
        <section className="mb-10 max-w-3xl">
          <h2 className="font-heading font-bold text-lg mb-4 text-foreground">{t("faq")}</h2>
          <div className="flex flex-col">
            {[
              { q: `Is ${game.name} free to play?`, a: t("faq_free_a") },
              { q: `Can I play ${game.name} on mobile?`, a: t("faq_mobile_a") },
              { q: `Is ${game.name} unblocked?`, a: t("faq_unblocked_a") },
            ].map((item, i) => (
              <div key={i} className="border blade-border p-4 -mt-px">
                <h3 className="font-heading font-bold text-sm text-foreground">{item.q}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Related games */}
        <GameGrid games={related} title={t("related_games")} />
      </div>
    </div>
  );
};

export default GamePage;

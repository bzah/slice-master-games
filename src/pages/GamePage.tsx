import { useParams, Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import { useSEO } from "@/hooks/useSEO";
import { games, categories, getRelatedGames, getGamesByCategory } from "@/data/games";
import { GameIframe } from "@/components/game/GameIframe";
import { GameGrid } from "@/components/game/GameGrid";

const DOMAIN = "https://slice-master.us";

const GamePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t, language, localizedPath } = useLanguage();

  const game = games.find((g) => g.slug === slug);

  if (!game) {
    return (
      <div className="container px-3 sm:px-4 py-16 text-center">
        <h1 className="font-heading font-bold text-xl sm:text-2xl text-foreground">Game not found</h1>
        <Link to={localizedPath("/")} className="mt-4 inline-block text-primary text-sm font-heading font-medium">
          {t("back_to_games")}
        </Link>
      </div>
    );
  }

  const category = categories.find((c) => c.id === game.category);
  const related = getRelatedGames(game);
  const sameCategoryGames = category ? getGamesByCategory(category.id).filter(g => g.id !== game.id).slice(0, 4) : [];

  useSEO({
    title: `${game.name} - Play Free Online | Slice Master`,
    description: `Play ${game.name} free online at Slice Master. ${game.description.substring(0, 120)}`,
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
        aggregateRating: { "@type": "AggregateRating", ratingValue: "4.6", ratingCount: "3280" },
      },
      {
        "@context": "https://schema.org",
        "@type": "VideoGame",
        name: game.name,
        genre: category?.name || "Slicing",
        playMode: "SinglePlayer",
        isAccessibleForFree: true,
        gamePlatform: ["Web Browser", "Mobile", "Desktop"],
        numberOfPlayers: { "@type": "QuantitativeValue", value: 1 },
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      },
      {
        "@context": "https://schema.org",
        "@type": "HowTo",
        name: `How to Play ${game.name}`,
        step: [
          { "@type": "HowToStep", position: 1, text: t("how_to_play_step1") },
          { "@type": "HowToStep", position: 2, text: t("how_to_play_step2") },
          { "@type": "HowToStep", position: 3, text: t("how_to_play_step3") },
          { "@type": "HowToStep", position: 4, text: t("how_to_play_step4") },
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: `Is ${game.name} free to play?`, acceptedAnswer: { "@type": "Answer", text: t("faq_free_a") } },
          { "@type": "Question", name: `Can I play ${game.name} on mobile?`, acceptedAnswer: { "@type": "Answer", text: t("faq_mobile_a") } },
          { "@type": "Question", name: `Is ${game.name} unblocked?`, acceptedAnswer: { "@type": "Answer", text: t("faq_unblocked_a") } },
          { "@type": "Question", name: `How do I play ${game.name}?`, acceptedAnswer: { "@type": "Answer", text: t("faq_how_play_a") } },
          { "@type": "Question", name: `Can I save my progress in ${game.name}?`, acceptedAnswer: { "@type": "Answer", text: t("faq_save_a") } },
          { "@type": "Question", name: `Is ${game.name} safe for kids?`, acceptedAnswer: { "@type": "Answer", text: t("faq_safe_a") } },
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

  // Split longDescription into paragraphs
  const longDescParagraphs = game.longDescription.split("\n\n").filter(Boolean);

  return (
    <div>
      {/* Game iframe */}
      <GameIframe src={game.iframeUrl} title={game.name} className="w-full h-[45vh] sm:h-[55vh] md:h-[65vh]" />

      <div className="container px-3 sm:px-4 mt-4 sm:mt-6">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-1 text-[10px] sm:text-xs text-muted-foreground mb-3 sm:mb-4 flex-wrap">
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

        {/* Game title + short description */}
        <section className="mb-6 sm:mb-8">
          <h1 className="font-heading font-bold text-xl sm:text-2xl md:text-3xl mb-2 text-foreground">
            {t("play_game")} {game.name} — {t("free_online_games")}
          </h1>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-3xl">{game.description}</p>
        </section>

        {/* Game Details Table + Tags */}
        <section className="mb-6 sm:mb-8 max-w-4xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Details table */}
            <div className="border blade-border">
              <div className="px-3 sm:px-4 py-2 bg-secondary/50 border-b blade-border">
                <h2 className="font-heading font-bold text-xs sm:text-sm text-foreground">Game Details</h2>
              </div>
              <table className="w-full text-xs sm:text-sm">
                <tbody>
                  {[
                    ["Game", game.name],
                    ["Category", category?.name || "Slicing"],
                    ["Platform", "Web Browser (Desktop, Mobile, Tablet)"],
                    ["Price", "Free to Play"],
                    ["Players", "Single Player"],
                    ["Rating", "⭐ 4.6/5"],
                    ["Status", "Unblocked"],
                  ].map(([label, value], i) => (
                    <tr key={i} className="border-b blade-border last:border-b-0">
                      <td className="px-3 sm:px-4 py-2 font-heading font-semibold text-foreground w-1/3">{label}</td>
                      <td className="px-3 sm:px-4 py-2 text-muted-foreground">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Tags + Quick Links */}
            <div className="flex flex-col gap-4">
              <div className="border blade-border p-3 sm:p-4">
                <h2 className="font-heading font-bold text-xs sm:text-sm mb-2 text-foreground">Tags</h2>
                <div className="flex flex-wrap gap-1.5">
                  {game.tags.map((tag, i) => (
                    <span key={i} className="bg-secondary text-secondary-foreground px-2 py-1 text-[10px] sm:text-xs font-heading">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              {category && (
                <div className="border blade-border p-3 sm:p-4">
                  <h2 className="font-heading font-bold text-xs sm:text-sm mb-2 text-foreground">
                    More {category.name} Games
                  </h2>
                  <ul className="space-y-1">
                    {sameCategoryGames.map(g => (
                      <li key={g.id}>
                        <Link
                          to={localizedPath(`/game/${g.slug}`)}
                          className="text-xs sm:text-sm text-primary hover:underline"
                        >
                          ▸ {g.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Two-column: How to Play + Tips */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-10 max-w-4xl">
          <section className="border blade-border p-4 sm:p-5">
            <h2 className="font-heading font-bold text-base sm:text-lg mb-3 text-foreground flex items-center gap-2">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-primary flex-shrink-0">
                <circle cx="9" cy="9" r="7" />
                <polygon points="7,6 13,9 7,12" fill="currentColor" stroke="none" />
              </svg>
              {t("how_to_play")} {game.name}
            </h2>
            <ol className="space-y-2">
              {[t("how_to_play_step1"), t("how_to_play_step2"), t("how_to_play_step3"), t("how_to_play_step4")].map((step, i) => (
                <li key={i} className="flex gap-2 text-xs sm:text-sm text-muted-foreground">
                  <span className="font-heading font-bold text-primary flex-shrink-0">{i + 1}.</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </section>

          <section className="border blade-border p-4 sm:p-5">
            <h2 className="font-heading font-bold text-base sm:text-lg mb-3 text-foreground flex items-center gap-2">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-primary flex-shrink-0">
                <path d="M9 2L11 7H16L12 10.5L13.5 16L9 12.5L4.5 16L6 10.5L2 7H7L9 2Z" />
              </svg>
              {t("tips_and_tricks")}
            </h2>
            <ul className="space-y-2">
              {[t("tip_1"), t("tip_2"), t("tip_3"), t("tip_4")].map((tip, i) => (
                <li key={i} className="flex gap-2 text-xs sm:text-sm text-muted-foreground">
                  <span className="text-primary flex-shrink-0">▸</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Game Features Grid */}
        <section className="mb-6 sm:mb-10 max-w-4xl">
          <h2 className="font-heading font-bold text-base sm:text-lg mb-3 sm:mb-4 text-foreground flex items-center gap-2">
            <div className="w-1 h-5 sm:h-6 bg-primary" />
            {t("game_features")}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-px bg-blade-border">
            {[
              { icon: "✓", text: t("feature_free") },
              { icon: "⚡", text: t("feature_no_download") },
              { icon: "📱", text: t("feature_mobile") },
              { icon: "🖥", text: t("feature_fullscreen") },
              { icon: "🔓", text: t("feature_unblocked") },
              { icon: "🚀", text: t("feature_instant") },
            ].map((feat, i) => (
              <div key={i} className="bg-card p-3 sm:p-4 flex gap-2 items-start">
                <span className="text-sm flex-shrink-0">{feat.icon}</span>
                <span className="text-[10px] sm:text-xs text-muted-foreground leading-relaxed">{feat.text}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Extended Description — Long SEO content */}
        <section className="mb-6 sm:mb-10 max-w-3xl">
          <h2 className="font-heading font-bold text-base sm:text-lg mb-3 text-foreground flex items-center gap-2">
            <div className="w-1 h-5 sm:h-6 bg-primary" />
            {t("about_game")}: {game.name}
          </h2>
          <div className="text-xs sm:text-sm text-muted-foreground leading-relaxed space-y-3">
            {longDescParagraphs.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </section>

        {/* Why Play Section with internal links */}
        <section className="mb-6 sm:mb-10 max-w-3xl">
          <h2 className="font-heading font-bold text-base sm:text-lg mb-3 text-foreground flex items-center gap-2">
            <div className="w-1 h-5 sm:h-6 bg-primary" />
            {t("why_play")}
          </h2>
          <div className="text-xs sm:text-sm text-muted-foreground leading-relaxed space-y-3">
            <p>
              <strong>Slice Master</strong> is your ultimate destination for the best free online slicing games. 
              We offer a carefully curated collection of over {games.length} games across {categories.length} categories: {" "}
              {categories.map((cat, i) => (
                <span key={cat.id}>
                  <Link to={localizedPath(`/category/${cat.slug}`)} className="text-primary hover:underline font-medium">
                    {cat.name}
                  </Link>
                  {i < categories.length - 1 ? ", " : ""}
                </span>
              ))}
              . Every game is free, unblocked, and plays instantly in your browser.
            </p>
            <p>
              If you enjoy {game.name}, you'll love these similar games: {" "}
              {related.slice(0, 5).map((g, i) => (
                <span key={g.id}>
                  <Link to={localizedPath(`/game/${g.slug}`)} className="text-primary hover:underline">
                    {g.name}
                  </Link>
                  {i < 4 ? ", " : ""}
                </span>
              ))}
              . All our games work on desktop computers, laptops, Chromebooks, iPads, Android tablets, 
              and smartphones — with optimized touch controls for mobile play and fullscreen mode for immersive gaming.
            </p>
            <p>
              Unlike other gaming sites, <strong>slice-master.us</strong> focuses exclusively on slicing and cutting games, 
              ensuring the highest quality selection. No distracting ads blocking your gameplay, no forced registrations, 
              and no app downloads — just pure, instant gaming fun. Whether you're at school during a break, 
              at work during lunch, or at home relaxing, you can enjoy {game.name} and all our titles anytime, anywhere. 
              Start playing now and discover why millions of players love slicing games!
            </p>
          </div>
        </section>

        {/* FAQ — 6 questions */}
        <section className="mb-6 sm:mb-10 max-w-3xl">
          <h2 className="font-heading font-bold text-base sm:text-lg mb-3 sm:mb-4 text-foreground flex items-center gap-2">
            <div className="w-1 h-5 sm:h-6 bg-primary" />
            {t("faq")} — {game.name}
          </h2>
          <div className="flex flex-col">
            {[
              { q: `Is ${game.name} free to play?`, a: t("faq_free_a") },
              { q: `Can I play ${game.name} on mobile?`, a: t("faq_mobile_a") },
              { q: `Is ${game.name} unblocked at school?`, a: t("faq_unblocked_a") },
              { q: `How do I play ${game.name}?`, a: t("faq_how_play_a") },
              { q: `Can I save my progress in ${game.name}?`, a: t("faq_save_a") },
              { q: `Is ${game.name} safe for kids?`, a: t("faq_safe_a") },
            ].map((item, i) => (
              <div key={i} className="border blade-border p-3 sm:p-4 -mt-px">
                <h3 className="font-heading font-bold text-xs sm:text-sm text-foreground">{item.q}</h3>
                <p className="mt-1 text-xs sm:text-sm text-muted-foreground">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Related games */}
        <GameGrid games={related} title={t("related_games")} />

        {/* Browse all link */}
        <div className="mt-6 sm:mt-8 mb-4 text-center">
          <Link
            to={localizedPath("/")}
            className="inline-block border blade-border px-6 py-3 font-heading font-bold text-sm text-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-150"
          >
            ← Browse All {games.length} Games
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GamePage;

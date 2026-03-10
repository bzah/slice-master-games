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
        gamePlatform: "Web Browser",
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

        {/* Game info */}
        <section className="mb-6 sm:mb-8">
          <h1 className="font-heading font-bold text-xl sm:text-2xl md:text-3xl mb-2 text-foreground">
            {t("play_game")} {game.name} — {t("free_online_games")}
          </h1>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-3xl">{game.description}</p>
        </section>

        {/* Two-column layout: How to Play + Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-10 max-w-4xl">
          {/* How to Play */}
          <section className="border blade-border p-4 sm:p-5">
            <h2 className="font-heading font-bold text-base sm:text-lg mb-3 text-foreground flex items-center gap-2">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-primary flex-shrink-0">
                <circle cx="9" cy="9" r="7" />
                <polygon points="7,6 13,9 7,12" fill="currentColor" stroke="none" />
              </svg>
              {t("how_to_play")}
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

          {/* Tips & Tricks */}
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

        {/* Game Features */}
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

        {/* About This Game - SEO rich content */}
        <section className="mb-6 sm:mb-10 max-w-3xl">
          <h2 className="font-heading font-bold text-base sm:text-lg mb-3 text-foreground flex items-center gap-2">
            <div className="w-1 h-5 sm:h-6 bg-primary" />
            {t("about_game")}
          </h2>
          <div className="text-xs sm:text-sm text-muted-foreground leading-relaxed space-y-3">
            <p>
              <strong>{game.name}</strong> is one of the most popular free online slicing games available on Slice Master. 
              {category && <> Part of our <Link to={localizedPath(`/category/${category.slug}`)} className="text-primary hover:underline">{category.name}</Link> collection, </>}
              this game delivers an engaging experience that combines precision cutting mechanics with satisfying gameplay. 
              Whether you're a fan of <em>Slice Master Cool Math Games</em> or looking for new slicing challenges, {game.name} offers hours of free entertainment.
            </p>
            <p>
              Play {game.name} online for free right here on slice-master.us — no downloads, no sign-ups, no ads blocking your gameplay. 
              Our games are <strong>unblocked</strong> and work perfectly on all devices including desktop computers, laptops, tablets, and mobile phones. 
              The game features responsive controls that adapt to your device, whether you're using a mouse, keyboard, or touchscreen.
            </p>
            <p>
              Looking for more games like {game.name}? Check out our collection of {related.length}+ related slicing games below, 
              or browse our <Link to={localizedPath("/")} className="text-primary hover:underline">complete game catalog</Link> featuring over 30 free online slicing games. 
              Every game on Slice Master is carefully selected to deliver the best cutting and slicing experience on the web.
            </p>
          </div>
        </section>

        {/* Why Play on Slice Master */}
        <section className="mb-6 sm:mb-10 max-w-3xl">
          <h2 className="font-heading font-bold text-base sm:text-lg mb-3 text-foreground flex items-center gap-2">
            <div className="w-1 h-5 sm:h-6 bg-primary" />
            {t("why_play")}
          </h2>
          <div className="text-xs sm:text-sm text-muted-foreground leading-relaxed space-y-2">
            <p>
              Slice Master is your go-to destination for the best free online slicing games. We offer a curated collection of over 30 games 
              across multiple categories including <strong>Fruit Slicing</strong>, <strong>Ninja & Sword</strong>, <strong>Puzzle & Strategy</strong>, 
              and <strong>Arcade</strong> games. All games are free, unblocked, and instantly playable in your browser.
            </p>
            <p>
              Unlike other gaming sites, Slice Master focuses exclusively on slicing and cutting games, ensuring the highest quality selection. 
              Our games load instantly, work on any device, and require no downloads or registrations. 
              Whether you're at school, work, or home, you can enjoy {game.name} and all our other titles anytime, anywhere.
            </p>
          </div>
        </section>

        {/* FAQ — expanded to 6 questions */}
        <section className="mb-6 sm:mb-10 max-w-3xl">
          <h2 className="font-heading font-bold text-base sm:text-lg mb-3 sm:mb-4 text-foreground flex items-center gap-2">
            <div className="w-1 h-5 sm:h-6 bg-primary" />
            {t("faq")}
          </h2>
          <div className="flex flex-col">
            {[
              { q: `Is ${game.name} free to play?`, a: t("faq_free_a") },
              { q: `Can I play ${game.name} on mobile?`, a: t("faq_mobile_a") },
              { q: `Is ${game.name} unblocked?`, a: t("faq_unblocked_a") },
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
      </div>
    </div>
  );
};

export default GamePage;

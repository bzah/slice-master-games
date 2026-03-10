import { useParams, Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import { useSEO } from "@/hooks/useSEO";
import { categories, getGamesByCategory } from "@/data/games";
import { GameGrid } from "@/components/game/GameGrid";

const DOMAIN = "https://slice-master.us";

const CategoryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t, language, localizedPath } = useLanguage();

  const category = categories.find((c) => c.slug === slug);
  const categoryGames = category ? getGamesByCategory(category.id) : [];

  if (!category) {
    return (
      <div className="container px-3 sm:px-4 py-16 text-center">
        <h1 className="font-heading font-bold text-xl sm:text-2xl text-foreground">Category not found</h1>
        <Link to={localizedPath("/")} className="mt-4 inline-block text-primary text-sm">{t("back_to_games")}</Link>
      </div>
    );
  }

  useSEO({
    title: `${category.name} - Free Slicing Games | Slice Master`,
    description: category.description,
    canonical: `${DOMAIN}${localizedPath(`/category/${category.slug}`)}`,
    lang: language,
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: category.name,
        description: category.description,
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: t("home"), item: DOMAIN },
          { "@type": "ListItem", position: 2, name: category.name, item: `${DOMAIN}/category/${category.slug}` },
        ],
      },
    ],
  });

  return (
    <div className="container px-3 sm:px-4 mt-4 sm:mt-6">
      <nav className="flex items-center gap-1 text-[10px] sm:text-xs text-muted-foreground mb-3 sm:mb-4">
        <Link to={localizedPath("/")} className="hover:text-primary">{t("home")}</Link>
        <span>/</span>
        <span className="text-foreground">{category.name}</span>
      </nav>

      <h1 className="font-heading font-bold text-xl sm:text-2xl md:text-3xl mb-2 text-foreground">{category.name}</h1>
      <p className="text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6 max-w-3xl">{category.description}</p>

      <GameGrid games={categoryGames} />

      {/* Other categories */}
      <section className="mt-8 sm:mt-10">
        <h2 className="font-heading font-bold text-base sm:text-lg mb-3 text-foreground">{t("categories")}</h2>
        <div className="flex flex-wrap gap-0">
          {categories.filter((c) => c.id !== category.id).map((cat) => (
            <Link
              key={cat.id}
              to={localizedPath(`/category/${cat.slug}`)}
              className="border blade-border px-3 sm:px-4 py-2 text-xs sm:text-sm font-heading font-medium text-foreground hover:bg-primary hover:text-primary-foreground active:bg-primary active:text-primary-foreground transition-colors duration-150 touch-manipulation"
            >
              {cat.name}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CategoryPage;

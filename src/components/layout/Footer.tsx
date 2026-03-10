import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import { games } from "@/data/games";

export function Footer() {
  const { t, localizedPath } = useLanguage();
  const popularGames = games.slice(0, 8);

  const legalLinks = [
    { key: "about", path: "/about" },
    { key: "contact", path: "/contact" },
    { key: "privacy", path: "/privacy" },
    { key: "terms", path: "/terms" },
    { key: "cookie_policy", path: "/cookie-policy" },
    { key: "dmca", path: "/dmca" },
    { key: "legal_notice", path: "/legal" },
    { key: "parents_info", path: "/parents" },
  ];

  return (
    <footer className="border-t blade-border bg-card mt-10 sm:mt-16">
      <div className="container px-3 sm:px-4 py-6 sm:py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 md:col-span-1">
            <Link to={localizedPath("/")} className="font-heading font-bold text-lg text-foreground">
              SLICE<span className="text-primary">MASTER</span>
            </Link>
            <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
              {t("site_description")}
            </p>
          </div>

          {/* Popular Games */}
          <div>
            <h3 className="font-heading font-bold text-xs sm:text-sm mb-2 sm:mb-3 text-foreground">{t("popular_games")}</h3>
            <ul className="grid grid-cols-2 gap-1">
              {popularGames.map((game) => (
                <li key={game.id}>
                  <Link
                    to={localizedPath(`/game/${game.slug}`)}
                    className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors duration-150 touch-manipulation py-0.5 inline-block"
                  >
                    {game.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-heading font-bold text-xs sm:text-sm mb-2 sm:mb-3 text-foreground">{t("legal_notice")}</h3>
            <ul className="grid grid-cols-2 sm:grid-cols-1 gap-1">
              {legalLinks.map((link) => (
                <li key={link.key}>
                  <Link
                    to={localizedPath(link.path)}
                    className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors duration-150 touch-manipulation py-0.5 inline-block"
                  >
                    {t(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-6 sm:mt-8 pt-3 sm:pt-4 border-t blade-border text-center">
          <p className="text-[10px] sm:text-xs text-muted-foreground">
            © {new Date().getFullYear()} slice-master.us — {t("free_online_games")}
          </p>
        </div>
      </div>
    </footer>
  );
}

import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import { searchGames } from "@/data/games";

interface FloatingSearchProps {
  triggerRef: React.RefObject<HTMLElement>;
}

export function FloatingSearch({ triggerRef }: FloatingSearchProps) {
  const { t, localizedPath } = useLanguage();
  const [visible, setVisible] = useState(false);
  const [query, setQuery] = useState("");
  const results = query.length > 1 ? searchGames(query) : [];

  useEffect(() => {
    const handleScroll = () => {
      if (!triggerRef.current) return;
      const rect = triggerRef.current.getBoundingClientRect();
      setVisible(rect.bottom < 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [triggerRef]);

  if (!visible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-card border-b blade-border wipe-in">
      <div className="container px-4 py-2">
        <div className="relative">
          <svg className="absolute left-3 top-1/2 -translate-y-1/2" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="7" cy="7" r="5" />
            <line x1="11" y1="11" x2="15" y2="15" />
          </svg>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t("search_placeholder")}
            className="w-full bg-background border blade-border pl-10 pr-4 py-2 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary"
          />
        </div>
        {results.length > 0 && (
          <div className="absolute left-0 right-0 bg-card border-x border-b blade-border max-h-64 overflow-y-auto">
            {results.slice(0, 8).map((game) => (
              <Link
                key={game.id}
                to={localizedPath(`/game/${game.slug}`)}
                onClick={() => setQuery("")}
                className="block px-4 py-2 text-sm text-foreground hover:bg-secondary transition-colors duration-150 border-b blade-border last:border-b-0"
              >
                {game.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

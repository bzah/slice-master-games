import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import type { Game } from "@/data/games";

interface GameCardProps {
  game: Game;
}

export function GameCard({ game }: GameCardProps) {
  const { localizedPath, t } = useLanguage();

  return (
    <Link
      to={localizedPath(`/game/${game.slug}`)}
      className="group relative block border blade-border bg-card overflow-hidden touch-manipulation"
    >
      {/* Image area */}
      <div className="aspect-[4/3] relative overflow-hidden">
        <img
          src={game.coverUrl}
          alt={game.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        {/* Play Now overlay */}
        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/50 transition-colors duration-200 flex items-center justify-center">
          <span className="bg-primary text-primary-foreground px-4 py-2 text-xs sm:text-sm font-heading font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-200">
            {t("play_now")}
          </span>
        </div>
      </div>

      {/* Title bar */}
      <div className="px-2 sm:px-3 py-2 sm:py-2.5 border-t blade-border bg-card">
        <h3 className="font-heading text-[11px] sm:text-xs font-bold truncate text-foreground">
          {game.name}
        </h3>
        <p className="text-[9px] sm:text-[10px] text-muted-foreground mt-0.5 truncate">
          {game.description.substring(0, 50)}...
        </p>
      </div>
    </Link>
  );
}

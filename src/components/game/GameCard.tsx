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
        {/* Default state: cover image */}
        <div className="game-card-image absolute inset-0">
          <img
            src={game.coverUrl}
            alt={game.name}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          {/* Play overlay - always visible on mobile, hover on desktop */}
          <div className="absolute inset-0 flex items-end p-2 sm:p-3">
            <span className="bg-primary text-primary-foreground px-2 sm:px-3 py-1 text-[10px] sm:text-xs font-heading font-bold uppercase tracking-wider opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-150">
              {t("play_now")}
            </span>
          </div>
        </div>

        {/* Hover state: description - only on desktop */}
        <div className="game-card-desc absolute inset-0 hidden sm:flex items-center bg-card p-4">
          <p className="text-xs text-foreground leading-relaxed line-clamp-5">
            {game.description}
          </p>
        </div>

        {/* Diagonal slice line - desktop only */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none hidden sm:block">
          <div className="slice-line" />
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

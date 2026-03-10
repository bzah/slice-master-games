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
      className="group relative block border blade-border bg-card overflow-hidden"
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
          {/* Play overlay */}
          <div className="absolute inset-0 flex items-end p-3">
            <span className="bg-primary text-primary-foreground px-3 py-1 text-xs font-heading font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-150">
              {t("play_now")}
            </span>
          </div>
        </div>

        {/* Hover state: description */}
        <div className="game-card-desc absolute inset-0 flex items-center bg-card p-4">
          <p className="text-xs text-foreground leading-relaxed line-clamp-5">
            {game.description}
          </p>
        </div>

        {/* Diagonal slice line */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="slice-line" />
        </div>
      </div>

      {/* Title bar */}
      <div className="px-3 py-2.5 border-t blade-border bg-card">
        <h3 className="font-heading text-xs font-bold truncate text-foreground">
          {game.name}
        </h3>
        <p className="text-[10px] text-muted-foreground mt-0.5 truncate">
          {game.description.substring(0, 60)}...
        </p>
      </div>
    </Link>
  );
}

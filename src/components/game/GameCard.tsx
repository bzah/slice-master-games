import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import type { Game } from "@/data/games";

interface GameCardProps {
  game: Game;
}

export function GameCard({ game }: GameCardProps) {
  const { localizedPath } = useLanguage();

  return (
    <Link
      to={localizedPath(`/game/${game.slug}`)}
      className="group relative block border blade-border bg-card overflow-hidden"
    >
      {/* Image area */}
      <div className="aspect-[4/3] relative overflow-hidden">
        {/* Default state: game name */}
        <div className="game-card-image absolute inset-0 flex items-center justify-center bg-secondary p-4">
          <span className="font-heading font-bold text-lg text-center text-foreground leading-tight">
            {game.name}
          </span>
        </div>

        {/* Hover state: description */}
        <div className="game-card-desc absolute inset-0 flex items-center bg-card p-4">
          <p className="text-sm text-foreground leading-relaxed line-clamp-4">
            {game.description}
          </p>
        </div>

        {/* Diagonal slice line */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="slice-line" />
        </div>
      </div>

      {/* Title bar */}
      <div className="px-3 py-2 border-t blade-border">
        <h3 className="font-heading text-xs font-bold truncate text-foreground">
          {game.name}
        </h3>
      </div>
    </Link>
  );
}

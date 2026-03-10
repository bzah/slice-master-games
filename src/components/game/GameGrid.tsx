import type { Game } from "@/data/games";
import { GameCard } from "./GameCard";

interface GameGridProps {
  games: Game[];
  title?: string;
}

export function GameGrid({ games, title }: GameGridProps) {
  return (
    <section>
      {title && (
        <div className="flex items-center gap-3 mb-5">
          <div className="w-1 h-6 bg-primary" />
          <h2 className="font-heading font-bold text-xl text-foreground">{title}</h2>
        </div>
      )}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-px bg-blade-border">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </section>
  );
}

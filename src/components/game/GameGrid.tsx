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
        <h2 className="font-heading font-bold text-xl mb-4 text-foreground">{title}</h2>
      )}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-0">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </section>
  );
}

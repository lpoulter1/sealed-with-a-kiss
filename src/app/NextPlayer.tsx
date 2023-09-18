"use client";
import { useState } from "react";
import PlayerSelect from "./PlayerSelect";
import PlayerView from "./PlayerView";
import type { Player } from "./page";

type NextPlayerProps = {
  players: Player[];
};

export default function NextPlayer({ players }: NextPlayerProps) {
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);
  function handlePlayerSelect(playerId: string) {
    const selectedPlayer = players.find(
      (player) => player.id.toString() === playerId
    )!;
    setSelectedPlayer(selectedPlayer);
  }

  return (
    <div>
      <PlayerSelect players={players} onPlayerSelect={handlePlayerSelect} />

      {selectedPlayer && <PlayerView player={selectedPlayer} />}
    </div>
  );
}

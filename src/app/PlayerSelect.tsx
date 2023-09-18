"use client";
import { getPosition } from "./utils";
import type { Player } from "./page";

type PlayerSelectProps = {
  players: Player[];
  onPlayerSelect: (playerId: string) => void;
};

export default function PlayerSelect({
  players,
  onPlayerSelect,
}: PlayerSelectProps) {
  function handlePlayerSelect(event: React.ChangeEvent<HTMLSelectElement>) {
    const playerId = event.target.value;
    onPlayerSelect(playerId);
  }

  return (
    <select onChange={handlePlayerSelect}>
      {players.map((player) => (
        <option key={player.id} value={player.id}>
          {getPosition(player.element_type)} | {player.web_name} | {player.team}
        </option>
      ))}
    </select>
  );
}

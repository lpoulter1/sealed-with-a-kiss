"use client";
import Image from "next/image";
import type { Player } from "./page";

type PlayerViewProps = {
  player: Player;
};

export default function PlayerView({ player }: PlayerViewProps) {
  console.log(player);
  return (
    <div>
      <Image
        src={`https://resources.premierleague.com/premierleague/photos/players/110x140/p${player.code}.png`}
        alt={`Image of ${player.web_name}`}
        width={110}
        height={140}
      />
      {player.web_name}
    </div>
  );
}

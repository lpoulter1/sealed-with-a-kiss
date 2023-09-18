"use client";
import Image from "next/image";
import type { Player } from "./page";

type PlayerViewProps = {
  player: Player;
};

export default function PlayerView({ player }: PlayerViewProps) {
  console.log(player);
  let isSold = false;

  return (
    <div className="flex flex-col justify-center h-100 items-center">
      <Image
        src={`https://resources.premierleague.com/premierleague/photos/players/110x140/p${player.code}.png`}
        width={125}
        height={160}
        className={`animate-[wiggle_1s_ease-in-out_infinite] rounded-full ${
          isSold ? "opacity-10" : ""
        }`}
        alt={player.web_name}
      />
      {player.web_name}
    </div>
  );
}

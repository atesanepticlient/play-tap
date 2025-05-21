"use client";
import AppHeader from "@/components/AppHeader";
import React from "react";

// import { useGames } from "@/lib/store.zustond";
// import { Categories } from "@/types/gamelist";
import PrimaryInput from "@/components/form/input";
import { JiliGame, jiliGames } from "@/components/Jili";

const JilliPage = () => {
  //   const { getGames } = useGames((state) => state);
  //   const gamesList = getGames(Categories.Sport);
  return (
    <div>
      <AppHeader title="Jilli" />
      <main className="py-5 px-2 bg-[#003e3e]">
        <div className="flex items-center">
          <PrimaryInput placeholder="Search Games" className="mb-2" />
        </div>
        <div className="grid grid-cols-2 gap-2">
          {jiliGames.map((game, i) => (
            <JiliGame game={game} key={i} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default JilliPage;

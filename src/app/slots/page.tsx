"use client";
import AppHeader from "@/components/AppHeader";
import React, { useEffect, useRef, useState } from "react";

import { GameCardWithProvider } from "@/components/GameCards";
import { useGames } from "@/lib/store.zustond";
import { Categories, Title } from "@/types/gamelist";
import PrimaryInput from "@/components/form/input";
import GameLoader from "@/components/loader/GameLoader";

import "swiper/css";
import "swiper/css/navigation";
import FilterProivder from "./filter-proivder";
import Link from "next/link";
import { MdFavorite } from "react-icons/md";
import { ClipLoader } from "react-spinners";
import { useSearchParams } from "next/navigation";

const SlotPage = () => {
  const providerParams =
    (useSearchParams().get("provider") as Title) || undefined;

  const loaderRef = useRef<HTMLDivElement | null>(null);

  const [search, setSearch] = useState<string>();
  const [provider, setProvider] = useState<Title | undefined>();
  const [limit, setLimit] = useState(30);

  const { getGames } = useGames((state) => state);
  const gamesList = getGames(Categories.Slots, search, limit, provider);

  const hasIntersectedOnce = useRef(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (entry.isIntersecting && !hasIntersectedOnce.current) {
          console.log("Loader is on screen, fetch data now!");
          setLimit((limit) => limit + 9);
          hasIntersectedOnce.current = true;
        }

        // Reset the flag when the loader goes out of view
        if (!entry.isIntersecting) {
          hasIntersectedOnce.current = false;
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (providerParams) {
      setProvider(providerParams);
    }
  }, [providerParams]);

  return (
    <div>
      <AppHeader title="Slots" />
      <main className="py-5 px-2 bg-[#003e3e]">
        <FilterProivder
          onSelect={(provider) => setProvider(provider)}
          defalut={provider}
        />
        <div className="flex items-center gap-2">
          <PrimaryInput
            placeholder="Search Games"
            className="mb-2"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
          <Link
            href="/favorits"
            title="favorits"
            className="bg-wwwwwwck-44-4comdaintree -mt-2 rounded-[10.4px] overflow-hidden border border-solid border-[#006165] shadow-[0px_2.08px_0px_#002631] p-3"
          >
            <MdFavorite className="w-5 h-5 text-[#23ffc8]" />
          </Link>
        </div>
        <div className="grid grid-cols-3 gap-2 mt-2">
          {gamesList &&
            gamesList.map((game, i) => (
              <GameCardWithProvider game={game} key={i} />
            ))}

          <GameLoader lenght={15} loading={!!!gamesList} />
        </div>

        <div ref={loaderRef} className="my-5 flex items-center justify-center">
          {gamesList && gamesList.length > 29 && (
            <ClipLoader color="#FFB800" size={25} />
          )}
        </div>
      </main>
    </div>
  );
};

export default SlotPage;

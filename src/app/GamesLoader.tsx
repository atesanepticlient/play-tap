/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useFetchGamesListQuery } from "@/lib/features/gamesApiSlice";
import { useGames } from "@/lib/store.zustond";
import { useEffect } from "react";

const GamesLoader = () => {
  const { data: data, isLoading, error } = useFetchGamesListQuery();
  console.log("Game data", data);
  const { setLoading, setGames } = useGames((state) => state);

  useEffect(() => {
    if (data && !isLoading) {
      setLoading(false);
      setGames(data.gamesList);
    }
  }, [data, isLoading]);

  useEffect(() => {
    console.log("Game error ", error);
  }, [error]);
  return null;
};

export default GamesLoader;

"use client";
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { NetEnt, Title } from "@/types/gamelist";
import Image from "next/image";
import { useEffect, useState } from "react";
import { LiaHeartSolid } from "react-icons/lia";
import { Loader } from "./loader/GameLoader";
import { providers } from "../../data/api-providers";
import { useOpenGameMutation } from "@/lib/features/gamesApiSlice";
import PrimaryButton from "./buttons/PrimaryButton";
import SecondaryButton from "./buttons/SecondaryButton";
import useCurrentUser from "@/hook/useCurrentUser";
import { redirect } from "next/navigation";
interface GameCardWithProviderProps {
  game: NetEnt;
}
export const GameCardWithProvider = ({ game }: GameCardWithProviderProps) => {
  const user = useCurrentUser();

  const [imageLoaded, setImageLoad] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const [iframe, setIframe] = useState("");
  const { img, name, title, id } = game;

  const [openGame, { isLoading }] = useOpenGameMutation();

  const handleImageLoad = () => {
    setImageLoad(true);
  };

  const findProviderImage = (providerName: Title) => {
    const provider = providers.find(
      (provider) => provider.name == providerName
    );
    console.log("provider ", providerName);
    return provider?.imageWhite;
  };
  const providerImag = findProviderImage(title);

  const handleOpenGame = (gameId: string) => {
    if (!user) {
      return redirect("/login");
    }
    openGame({ gameId, demo: "0" })
      .unwrap()
      .then((res) => {
        if (res) {
          const url = res.content.game.url;
          const iframeMode = res.content.game.iframe;
          if (iframeMode == "0") {
            location.href = url;
          } else {
            setIframe(url);
            setShowModal(true);
          }
        }
      })
      .catch((error) => {
        console.log("ERRRO ", error);
      });
  };

  const closeGame = () => {
    setShowModal(false);
    setIframe("");
  };

  return (
    <>
      <div className="relative game-main overflow-hidden">
        <div
          className={`relative overflow-y-hidden rounded-2xl ${
            imageLoaded ? "visible " : "invisible h-0 overflow-hidden"
          }`}
        >
          <div className="shiny-card w-full">
            <img
              alt={name}
              src={img}
              className="w-full h-auto  align-middle "
              onLoad={handleImageLoad}
            />
          </div>

          {providerImag && (
            <div className="absolute z-10 left-0 bottom-0  flex justify-center items-center game-card-provider-overllay rounded-2xl">
              <Image
                src={providerImag}
                alt="provider"
                width={35}
                height={15}
                unoptimized
                className="w-[35px] h-auto  align-middle"
              />
            </div>
          )}

          <div className="absolute top-2 right-2 z-10 ">
            <div className="w-[18px] h-[18px] rounded-full bg-white/10 flex justify-center items-center ">
              <LiaHeartSolid className="w-[15px] h-[15px] text-white" />
            </div>
          </div>
        </div>
        <div className="play absolute top-0 left-0 rounded-2xl w-full h-[97%] bg-transparent flex justify-center items-center">
          <SecondaryButton
            disabled={isLoading}
            onClick={() => handleOpenGame(id)}
            className="button"
          >
            {isLoading ? "Loading" : "Play"}
          </SecondaryButton>
        </div>
      </div>

      <div className={`${imageLoaded ? "hidden" : "block"}`}>
        <Loader />
      </div>

      {showModal && iframe && (
        <div className="fixed z-[1000] inset-0 bg-black bg-opacity-60 flex items-center justify-center ">
          <div className="relative w-full h-screen bg-white rounded-lg shadow-lg">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded"
            >
              Close
            </button>
            <iframe
              src={iframe}
              className="w-full h-full border-0 rounded-b-lg"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  );
};

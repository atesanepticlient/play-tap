/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { NetEnt } from "@/types/gamelist";
import Image from "next/image";
import { LiaHeartSolid } from "react-icons/lia";
interface GameCardWithProviderProps {
  game: NetEnt;
}
export const GameCardWithProvider = ({ game }: GameCardWithProviderProps) => {
  const { img, name, title } = game;
  return (
    <div className="relative overflow-y-hidden rounded-2xl">
      <div className="shiny-card w-full">
        <img alt={name} src={img} className="w-full h-auto  align-middle " />
      </div>

      {/* <div className="absolute z-10 left-0 bottom-0  flex justify-center items-center game-card-provider-overllay rounded-2xl">
        <Image
          src={providerImage}
          alt="provider"
          width={35}
          height={15}
          unoptimized
          className="w-[35px] h-auto  align-middle"
        />
      </div> */}

      <div className="absolute top-2 right-2 z-10 ">
        <div className="w-[18px] h-[18px] rounded-full bg-white/10 flex justify-center items-center ">
          <LiaHeartSolid className="w-[15px] h-[15px] text-white" />
        </div>
      </div>
    </div>
  );
};

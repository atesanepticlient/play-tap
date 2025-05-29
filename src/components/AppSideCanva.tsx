"use client";
import Link from "next/link";
import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import hotGame from "@/../public/icons/nav-hotgames.svg";
import slot from "@/../public/icons/nav-slot.svg";
import live from "@/../public/icons/nav-live.svg";
import fav from "@/../public/icons/nav-fav.svg";
import promotion from "@/../public/icons/nav-promotion.svg";
import reward from "@/../public/icons/reward.svg";
import invite from "@/../public/icons/invite.svg";
import support from "@/../public/icons/support.svg";
import Image from "next/image";

interface AppSideCanvaProps {
  trigger: React.ReactNode;
}

const menuData = [
  {
    title: "Hot Games",
    icon: hotGame,
    redirect: "/slots",
  },
  {
    title: "Promotion",
    icon: promotion,
    redirect: "/promotion",
  },
  {
    title: "Slots",
    icon: slot,
    redirect: "/slots",
  },
  {
    title: "Reward",
    icon: reward,
    redirect: "/rewardCenter",
  },
  {
    title: "Live",
    icon: live,
    redirect: "/live-casino",
  },
  {
    title: "Invite",
    icon: invite,
    redirect: "/invite-friends",
  },
  {
    title: "Favorites",
    icon: fav,
    redirect: "/favorites",
  },

  {
    title: "Support",
    icon: support,
    redirect: "/support",
  },
];

const AppSideCanva = ({ trigger }: AppSideCanvaProps) => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <>
      <button onClick={toggleDrawer(true)}>{trigger}</button>
      <Drawer
        open={open}
        onClose={toggleDrawer(false)}
        className="z-[1001] h-screen "
      >
        <div className="!bg-[#044243] h-full">
          <div className=" grid grid-cols-2 px-4 py-8  items-start gap-3  w-[280px]  ">
            {menuData.map((menu, i) => (
              <Link
                key={i}
                href={menu.redirect}
                className="flex overflow-hidden relative flex-col justify-center items-center px-3 py-2.5 w-full text-base font-bold text-center text-emerald-50 rounded-xl border-emerald-50 bg-[#003840] decoration-emerald-50 h-[93px] outline-emerald-50 shadow-[rgb(0,31,35)_0px_1.328px_0px_0px,rgb(0,97,101)_0px_1.328px_0px_0px_inset]"
                aria-label="Favorites"
              >
                <figure className="overflow-hidden mb-1.5 w-10 h-10 text-base font-bold text-center text-emerald-50 bg-cover border-emerald-50 decoration-emerald-50 fill-[url('#icon_gradient2')] outline-emerald-50">
                  <Image
                    src={menu.icon}
                    alt={menu.title}
                    className="w-[40px]"
                  />
                </figure>
                <span className="text-base font-bold text-center text-emerald-50 border-emerald-50 decoration-emerald-50 outline-emerald-50">
                  {menu.title}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default AppSideCanva;

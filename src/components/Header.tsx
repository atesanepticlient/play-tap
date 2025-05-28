import React from "react";
import { RiMenuFoldLine } from "react-icons/ri";

import logo from "@/../public/logo.png";
import Image from "next/image";
import Link from "next/link";
import { findCurrentUser } from "@/data/user";
import HeaderBalance from "./HeaderBalance";
import AppSideCanva from "./AppSideCanva";
import PrimaryButton from "./buttons/PrimaryButton";
import SecondaryButton from "./buttons/SecondaryButton";

import { MdOutlineSupportAgent } from "react-icons/md";

const Header = async () => {
  const user = await findCurrentUser();
  return (
    <header
      className="flex items-center justify-between px-3 py-2 w-full md:w-[600px] mx-auto"
      style={{
        width: "100%",
        height: 70,

        zIndex: 1000,
        position: "sticky",
        top: 0,
        background: "var(--color-cyan-21, #155155)",
      }}
    >
      <div className="flex items-center  gap-2">
        <div
          data-variant="21"
          style={{
            width: 26,
            height: 26,
          }}
        >
          <div
            style={{
              width: 26,
              height: 26,

              overflow: "hidden",
            }}
          >
            <AppSideCanva
              trigger={
                <RiMenuFoldLine className="w-6 h-5 cursor-pointer text-white " />
              }
            />
          </div>
        </div>
        <Image
          style={{
            width: 120,
          }}
          src={logo}
          alt="logo"
        />
      </div>

      {user && <HeaderBalance balance={+user!.wallet!.balance} />}
      {!user && (
        <div className="flex items-center  gap-2">
          <Link href="/support">
            <PrimaryButton>
              <MdOutlineSupportAgent className="text-white w-5 h-5" />
            </PrimaryButton>
          </Link>
          <Link href="/#">
            <SecondaryButton>Download</SecondaryButton>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;

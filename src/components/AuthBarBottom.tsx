/* eslint-disable @next/next/no-img-element */
import React from "react";
import PrimaryButton from "./buttons/PrimaryButton";
import SecondaryButton from "./buttons/SecondaryButton";
import { findCurrentUser } from "@/data/user";
import Link from "next/link";

const AuthBarBottom = async () => {
  const user = await findCurrentUser();
  console.log("user ", user);
  if (user) return null;
  return (
    <div className="fixed w-full bottom-0 left-0  bg-[#003A3A] z-[999]">
      <div className="flex  justify-between   items-center  ">
        <button
          className="flex  justify-center items-center px-3 text-center "
          aria-label="Select currency and language"
        >
          <img
            src={
              "https://img.b112j.com/bj/h5/assets/images/flag/BD.png?v=1747291372812&source=drccdnsrc"
            }
            alt={"BD"}
            className="mr-1.5 text-center overflow-x-clip overflow-y-clip rounded-[100%] w-[29px]"
            loading="lazy"
          />
          <p className="text-sm text-white font-bold leading-4 text-left border-zinc-800 decoration-zinc-800 outline-zinc-800 ">
            <span>BDT</span>
            <br className="box-content inline text-sm font-bold leading-4 text-left border-zinc-800 decoration-zinc-800 outline-zinc-800 text-white" />
            <span>English</span>
          </p>
        </button>

        <div className="flex ">
          <Link href="/login">
            <PrimaryButton className="!rounded-none !py-4">Login</PrimaryButton>
          </Link>

          <Link href={"/register"}>
            <SecondaryButton className="!rounded-none !py-4">
              Register
            </SecondaryButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AuthBarBottom;

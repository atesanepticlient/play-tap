import React from "react";
import PrimaryButton from "./buttons/PrimaryButton";
import SecondaryButton from "./buttons/SecondaryButton";
import { findCurrentUser } from "@/data/user";
import Link from "next/link";

const AuthBarBottom = async () => {
  const user = await findCurrentUser();
  console.log("user ", user)
  if (user) return null;
  return (
    <div className="fixed w-full bottom-0 left-0 h-[50px] bg-[#003A3A] z-[999]">
      <div className="flex   gap-2 justify-end items-center h-[50px]">
        <Link href="/login">
          <PrimaryButton className="px-6 ">Login</PrimaryButton>
        </Link>

        <Link href={"/register"}>
          <SecondaryButton className="px-6 ">Register</SecondaryButton>
        </Link>
      </div>
    </div>
  );
};

export default AuthBarBottom;

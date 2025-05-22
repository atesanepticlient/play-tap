"use client";
import React from "react";
import { providers } from "../../data/api-providers";
import Link from "next/link";
import Image from "next/image";


const GamesProivderMenu = () => {
  return (
    <div className="max-w-full  ">
      <div className="bg-wwwwwwck-44-4comdaintree rounded-[10.4px] overflow-hidden border border-solid border-[#006165] shadow-[0px_2.08px_0px_#002631] gap-3 p-5 flex items-center flex-nowrap overflow-x-auto">
        {providers.map((provider, i) => (
          <Link
            href={`/slots?provider=${provider.name}`}
            key={i}
            className="h-[45px] px-4 py-3"
            style={{
              background:
                "linear-gradient(180deg, var(--color-yellow-50, #FFE600) 0%, var(--color-orange-50, #FFB800) 100%)",
              borderRadius: 11.01,
              boxShadow:
                "0px 1.3760000467300415px 0px 2.375999927520752px #FFF2A6 inset",
              outline:
                "1px var(--color-yellow-83-50%, rgba(255, 242, 166, 0.50)) solid",
              outlineOffset: "-1px",
              justifyContent: "center",
              alignItems: "center",
              display: "inline-flex",
            }}
          >
            <Image
              src={provider.imageBlack}
              alt={provider.name}
              className="max-w-[85px]"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default GamesProivderMenu;

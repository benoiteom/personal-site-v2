import Image from "next/image";
import React from "react";
import { aboutMe } from "./helpers/config";
import Swirl from "./svg/swirl";

export default function About() {
  return (
    <div className="flex justify-center" style={{ gap: '32px' }}>
      <div className="animate duration-500 max-w-24 flex-grow border-y-2 border-zinc-400 dark:border-zinc-600" />
      <div className="relative max-w-[600px] flex-grow">
        <div className="relative max-h-[400px] max-w-[400px] mr-24">
          <div className="absolute top-[40%] -right-24">
            <p className="animate duration-500 text-sm text-zinc-950 dark:text-zinc-100">fun fact:</p>
            <p className="animate duration-500 text-sm text-zinc-950 dark:text-zinc-100">I like plants!</p>
            <Swirl height={32} width={54} className="animate duration-500 text-zinc-950 dark:text-zinc-100 -rotate-[20deg] mt-3 -ml-10" />
          </div>
          <Image
            id="profile-img"
            src="/about.png"
            height={400}
            width={400}
            alt="Profile"
          />
        </div>
        {aboutMe.map((text, i) => (
          <p key={i} className="animate duration-500 mt-8 text-zinc-950 dark:text-zinc-100">
            {text}
          </p>
        ))}
      </div>
    </div>
  );
}

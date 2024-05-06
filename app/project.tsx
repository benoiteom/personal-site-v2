import React from "react";
import Image from "next/image";

export default function Project({
  colors,
  title,
  type,
  desc,
  dates,
  tech,
  link,
  flippy,
  images,
  isMobile,
}: {
  colors: string[];
  title: string;
  type: string;
  desc: string;
  dates: string;
  tech: string[];
  link?: string;
  flippy?: boolean;
  images: string[];
  isMobile: boolean;
}) {
  const handleHoverRight = () => {
    const leftImg = document.getElementById(`img-0-${images[0]}`);
    const rightImg = document.getElementById(`img-1-${images[1]}`);

    if (leftImg && rightImg) {
      rightImg.style.transform = "scale(1)";
      rightImg.style.zIndex = "20";
      leftImg.style.zIndex = "10";
      leftImg.style.transform = "scale(.75)";
    }
  };

  const handleHoverLeft = () => {
    const leftImg = document.getElementById(`img-0-${images[0]}`);
    const rightImg = document.getElementById(`img-1-${images[1]}`);

    if (leftImg && rightImg) {
      rightImg.style.transform = "scale(.75)";
      rightImg.style.zIndex = "10";
      leftImg.style.zIndex = "20";
      leftImg.style.transform = "scale(1)";
    }
  };

  return (
    <div
      className={`relative min-h-[300px] mx-auto`}
      style={{ marginBottom: "340px", maxWidth: isMobile ? '420px' : '700px' }}
    >
      {/* RIGHT */}
      <div className="absolute w-full right-0 top-16 hidden md:flex flex-col items-end">
        <Image
          id={`img-1-${images[1]}`}
          src={images[1]}
          height={1}
          width={420}
          alt="Legacy app image"
          className="transition-all duration-500 scale-[.75] origin-top-right relative z-10 border-8 border-zinc-100 dark:border-zinc-950 rounded-md"
          onMouseEnter={handleHoverRight}
        />
      </div>

      {/* LEFT */}
      <div className="absolute w-full left-0 top-0">
        <p
          // className="transition-all duration-500 text-7xl uppercase font-bold mb-1 ml-1 bg-[length:200%] bg-clip-text bg-gradient-to-r from-zinc-950 via-zinc-950 via-50% to-zinc-300 to-50% text-transparent no-underline bg-right-top hover:bg-left-top"
          className="transition-all duration-500 text-5xl md:text-7xl uppercase font-bold mb-1 ml-1 text-zinc-950 dark:text-zinc-100"
          // style={{ WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
        >
          {title}
        </p>
        <p className="text-sm uppercase font-semibold mb-2 ml-2 transition-all duration-500 text-zinc-700 dark:text-zinc-300">
          {type}
        </p>
        <Image
          id={`img-0-${images[0]}`}
          src={images[0]}
          height={1}
          width={420}
          alt="Legacy app image"
          className="transition-transform duration-500 origin-top-left relative z-20 border-8 border-zinc-100 dark:border-zinc-950 rounded-md"
          onMouseEnter={handleHoverLeft}
        />
      </div>
    </div>
  );
}

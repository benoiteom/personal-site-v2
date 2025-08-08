import React from "react";
import { Major_Mono_Display, Inter } from "next/font/google";
import Image from "next/image";
import { photos } from "./helpers/config";

const majorMono = Major_Mono_Display({ subsets: ["latin"], weight: "400" });
const inter = Inter({ subsets: ["latin"], weight: "400" });

export default function Photography() {
  return (
    <div className="flex justify-center" style={{ gap: "32px" }}>
      <div className="animate duration-500 max-w-24 flex-grow" />
      <div className="relative max-w-[600px] flex-grow">
        <p
          className={`${majorMono.className} animate duration-500 mt-8 text-5xl text-zinc-950 dark:text-zinc-100`}
        >
          photos
          <span className={`${inter.className} font-light text-sm`}>&nbsp;&nbsp;&nbsp;( just for fun )</span>
        </p>
        <div className="mx-8 mt-16">
          {photos.map((p, i) => (
            <>
              <div className="flex gap-8 items-end">
                <p className="text-3xl font-semibold mb-6 text-zinc-950 dark:text-zinc-100">
                  {p.location}
                </p>
                <p className="text-lg font-semibold mb-6 text-zinc-600 dark:text-zinc-400">
                  {p.date}
                </p>
              </div>
              <div className="flex flex-wrap gap-8 mb-28">
                {/* TODO: if even show top two, if odd put top two at the bottom */}
                <Image
                  id={`photo-img-${i}-0`}
                  src={p.images[0]}
                  height={195}
                  width={214}
                  style={{ objectFit: "cover" }}
                  alt={`${p.location} - ${p.date} Image 0`}
                  className="rounded-xl"
                />
                <Image
                  id={`photo-img-${i}-1`}
                  src={p.images[1]}
                  height={195}
                  width={281}
                  style={{ objectFit: "cover" }}
                  alt={`${p.location} - ${p.date} Image 1`}
                  className="rounded-xl"
                />
                <Image
                  id={`photo-img-${i}-2`}
                  src={p.images[2]}
                  height={195}
                  width={313}
                  style={{ objectFit: "cover" }}
                  alt={`${p.location} - ${p.date} Image 2`}
                  className="rounded-xl"
                />
                <Image
                  id={`photo-img-${i}-3`}
                  src={p.images[3]}
                  height={195}
                  width={183}
                  style={{ objectFit: "cover" }}
                  alt={`${p.location} - ${p.date} Image 3`}
                  className="rounded-xl"
                />
              </div>
            </>
          ))}
          <p className="mb-28 text-zinc-950 dark:text-zinc-100">
            ... and more to come!
          </p>
        </div>
      </div>
    </div>
  );
}

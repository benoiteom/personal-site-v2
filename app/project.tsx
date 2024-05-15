import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useModalContext } from "./context/modalContext";
import Close from "./svg/close";
import { useThemeContext } from "./context/themeContext";

export default function Project({
  colors,
  title,
  type,
  desc,
  status,
  dates,
  tech,
  link,
  flippy,
  images,
  isMobile,
}: {
  colors: string[];
  title: string[];
  type: string;
  desc: string;
  status: string;
  dates: string;
  tech: string[];
  link?: string;
  flippy?: boolean;
  images: string[];
  isMobile: boolean;
}) {
  const { modalRef, setModalRef, transform, width, height, clearRef } =
    useModalContext();
  const { isDarkMode } = useThemeContext();

  const [isHovered, setIsHovered] = useState(false);
  const [lateTransform, setLateTransform] = useState(false);

  const ref = useRef(null);
  const isInModal = ref === modalRef && transform.center;

  const handleHoverRight = () => {
    const leftImg = document.getElementById(`img-0-${images[0]}`);
    const rightImg = document.getElementById(`img-1-${images[1]}`);

    if (leftImg && rightImg && !isInModal) {
      rightImg.style.transform = "translateY(-32px) scale(1)";
      rightImg.style.zIndex = "20";
      leftImg.style.zIndex = "10";
      leftImg.style.transform = "scale(.75)";
    }
  };

  const handleHoverLeft = () => {
    const leftImg = document.getElementById(`img-0-${images[0]}`);
    const rightImg = document.getElementById(`img-1-${images[1]}`);

    if (leftImg && rightImg && !isInModal) {
      rightImg.style.transform = "translateY(-32px) scale(.75)";
      rightImg.style.zIndex = "10";
      leftImg.style.zIndex = "20";
      leftImg.style.transform = "scale(1)";
    }
  };

  useEffect(() => {
    const leftImg = document.getElementById(`img-0-${images[0]}`);
    const rightImg = document.getElementById(`img-1-${images[1]}`);

    if (isInModal && leftImg && rightImg) {
      const scale = (width - 208 - 64) / 420;
      leftImg.style.transform = `scale(${scale})`;
      rightImg.style.transform = "translateY(-32px) scale(1)";
      rightImg.style.opacity = "0";
      setLateTransform(true);
    } else if (leftImg && rightImg) {
      leftImg.style.transform = "scale(1)";
      rightImg.style.transform = "translateY(-32px) scale(.75)";
      leftImg.style.zIndex = "20";
      rightImg.style.zIndex = "10";
      rightImg.style.opacity = "1";
      setTimeout(() => {
        setLateTransform(false);
      }, 300);
    }
  }, [transform.center]);

  const close = (e: any) => {
    if (isInModal) {
      e.stopPropagation();
      clearRef();
    }
  };

  return (
    <motion.div
      ref={ref}
      className="transition-transform duration-300 relative mx-auto p-8"
      style={{
        marginBottom: "200px",
        height: isInModal ? height : "",
        maxWidth: isMobile ? "420px" : "700px",
        transform: isInModal ? transform.elementCenter : "",
        zIndex: lateTransform ? 40 : 0,
        cursor: isInModal ? "" : "pointer",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setModalRef(ref)}
    >
      {isMobile && (
        <p
          className="absolute transition-all duration-500 p-2 text-zinc-950 dark:text-zinc-100 cursor-pointer"
          style={{
            top: -62,
            right: 60,
            opacity: isInModal ? 1 : 0,
          }}
          onClick={close}
        >
          close
        </p>
      )}
      <Close
        className="absolute transition-all duration-500 cursor-pointer"
        width={52}
        color={!isDarkMode ? "#09090B" : "#F4F4F5"}
        style={{
          top: isMobile ? -72 : 24,
          right: isMobile ? 0 : 24,
          opacity: isInModal ? 1 : 0,
        }}
        onClick={close}
      />

      <motion.div
        className="absolute transition-all duration-500 bg-zinc-400 dark:bg-zinc-400"
        style={{
          top: 0,
          left: 0,
          width: "100%",
          height: "2px",
          originX: "left",
          scaleX: isHovered || ref === modalRef ? 1 : 0,
        }}
      />
      <motion.div
        className="absolute transition-all duration-500 bg-zinc-400 dark:bg-zinc-400"
        style={{
          bottom: 0,
          right: 0,
          height: "100%",
          width: "2px",
          originY: "bottom",
          scaleY: isHovered || ref === modalRef ? 1 : 0,
        }}
      />
      <motion.div
        className="absolute transition-all duration-500 bg-zinc-400 dark:bg-zinc-400"
        style={{
          bottom: 0,
          right: 0,
          width: "100%",
          height: "2px",
          originX: "right",
          scaleX: isHovered || ref === modalRef ? 1 : 0,
        }}
      />
      <motion.div
        className="absolute transition-all duration-500 bg-zinc-400 dark:bg-zinc-400"
        style={{
          top: 0,
          left: 0,
          width: "2px",
          height: "100%",
          originY: "top",
          scaleY: isHovered || ref === modalRef ? 1 : 0,
        }}
      />

      <p className="transition-all duration-500 text-5xl md:text-7xl uppercase font-bold mb-1 ml-1 text-zinc-950 dark:text-zinc-100">
        {title[0]}
        {title.length > 1 && (
          <span style={{ verticalAlign: "top", fontSize: "24px" }}>
            {title[1]}
          </span>
        )}
      </p>
      <p className="text-sm uppercase font-semibold mb-2 ml-2 transition-all duration-500 text-zinc-700 dark:text-zinc-300">
        {type}
      </p>
      <div className="relative transition-opacity duration-300">
        <Image
          id={`img-0-${images[0]}`}
          src={images[0]}
          height={1}
          width={420}
          alt="Legacy app image"
          style={{}}
          className="transition-transform duration-500 origin-top-left relative z-20 border-8 border-zinc-100 dark:border-zinc-950 rounded-md"
          onMouseEnter={handleHoverLeft}
        />

        <Image
          id={`img-1-${images[1]}`}
          src={images[1]}
          height={1}
          width={420}
          alt="Legacy app image"
          style={{ transform: "translateY(-32px) scale(.75)" }}
          className="transition-all duration-500 absolute top-0 right-0 origin-top-right z-10 border-8 border-zinc-100 dark:border-zinc-950 rounded-md"
          onMouseEnter={handleHoverRight}
        />
        <div
          className="transition-opacity duration-300 absolute bottom-0 -right-4 w-52 flex flex-col justify-between"
          style={{ opacity: isInModal ? 1 : 0, top: "-29px" }}
        >
          <p
            className="transition-all duration-500 text-zinc-950 dark:text-zinc-100"
            style={{ fontSize: isMobile ? "14px" : "16px" }}
          >
            {desc}
          </p>
          <div className="flex items-center w-fit-content justify-between px-3 py-1 mb-4 rounded-full bg-zinc-950 dark:bg-zinc-100">
            <motion.div
              className="h-[6px] w-[6px] mr-2 rounded-full bg-zinc-100 dark:bg-zinc-950"
              initial={{ opacity: status === "In development" ? 0 : 1 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <p
              className="uppercase font-semibold transition-all duration-500 text-zinc-100 dark:text-zinc-950"
              style={{ marginBottom: "-1px", fontSize: isMobile ? "10px" : "12px" }}
            >
              {status}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

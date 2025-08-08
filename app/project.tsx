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
      const scale = isMobile ? 0 : (width - 208 - 64) / 420;
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
        className="absolute transition-all duration-500 bg-zinc-200 dark:bg-zinc-800"
        style={{
          top: 0,
          left: 0,
          width: "100%",
          height: "1px",
          originX: "left",
          scaleX: isHovered || ref === modalRef ? 1 : 0,
        }}
      />
      <motion.div
        className="absolute transition-all duration-500 bg-zinc-200 dark:bg-zinc-800"
        style={{
          bottom: 0,
          right: 0,
          height: "100%",
          width: "1px",
          originY: "bottom",
          scaleY: isHovered || ref === modalRef ? 1 : 0,
        }}
      />
      <motion.div
        className="absolute transition-all duration-500 bg-zinc-200 dark:bg-zinc-800"
        style={{
          bottom: 0,
          right: 0,
          width: "100%",
          height: "1px",
          originX: "right",
          scaleX: isHovered || ref === modalRef ? 1 : 0,
        }}
      />
      <motion.div
        className="absolute transition-all duration-500 bg-zinc-200 dark:bg-zinc-800"
        style={{
          top: 0,
          left: 0,
          width: "1px",
          height: "100%",
          originY: "top",
          scaleY: isHovered || ref === modalRef ? 1 : 0,
        }}
      />

      <p className="transition-all duration-500 text-5xl md:text-5xl font-bold mb-1 ml-1 text-zinc-950 dark:text-zinc-100 flex items-center">
        <span>
          {title[0]}
          {title.length > 1 && (
            <span style={{ verticalAlign: "top", fontSize: "24px" }}>
              {title[1]}
            </span>
          )}
        </span>
        {isInModal && link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open live project"
            onClick={(e) => e.stopPropagation()}
            className="ml-6 inline-flex items-center opacity-100 hover:opacity-80 transition-opacity"
            style={{
              // ensure the icon only shows when in modal
              opacity: isInModal ? 1 : 0,
            }}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <path d="M15 3h6v6" />
              <path d="M10 14L21 3" />
            </svg>
          </a>
        )}
      </p>
      <p
        className="text-sm uppercase font-semibold mb-2 ml-2 transition-all duration-500 text-zinc-700 dark:text-zinc-300"
        style={{ opacity: isInModal && isMobile ? 0 : 1 }}
      >
        {type}
      </p>
      <div className="relative transition-opacity duration-300">
        <Image
          id={`img-0-${images[0]}`}
          src={images[0]}
          height={1}
          width={420}
          alt={`${title[0]} preview 1`}
          style={{}}
          className="transition-transform duration-500 origin-top-left relative z-20 border-8 border-zinc-100 dark:border-zinc-950 rounded-md"
          onMouseEnter={handleHoverLeft}
        />

        <Image
          id={`img-1-${images[1]}`}
          src={images[1]}
          height={1}
          width={420}
          alt={`${title[0]} preview 2`}
          style={{
            transform: "translateY(-32px) scale(.75)",
            display: isMobile ? "none" : "",
          }}
          className="transition-all duration-500 absolute top-0 right-0 origin-top-right z-10 border-8 border-zinc-100 dark:border-zinc-950 rounded-md"
          onMouseEnter={handleHoverRight}
        />
        <div
          className="transition-opacity duration-300 absolute bottom-0 flex flex-col justify-between"
          style={{
            opacity: isInModal ? 1 : 0,
            top: "-29px",
            right: isMobile ? 0 : "-16px",
            maxWidth: isMobile ? "100%" : "208px",
          }}
        >
          <p
            className="transition-all duration-500 text-zinc-950 dark:text-zinc-100"
            style={{ fontSize: isMobile ? "14px" : "16px", marginTop: isMobile ? '4px' : '' }}
          >
            {desc}
          </p>
          <div
            className="flex items-center w-fit-content justify-between px-3 py-1 mt-1 rounded-full bg-zinc-950 dark:bg-zinc-100"
            style={{ marginBottom: isMobile ? 0 : "16px" }}
          >
            <motion.div
              className="h-[6px] w-[6px] mr-2 rounded-full bg-zinc-100 dark:bg-zinc-950"
              initial={{ opacity: status === "In development" ? 0 : 1 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <p
              className="text-[12px] uppercase font-semibold transition-all duration-500 text-zinc-100 dark:text-zinc-950"
              style={{
                marginBottom: "-1px",
              }}
            >
              {status}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

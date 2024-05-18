import { createContext, useContext, useEffect, useRef, useState } from "react";
import Lenis from "@studio-freight/lenis";

const ScrollContext = createContext({
  hasScrolled: false,
  setHasScrolled: (_: boolean) => {},
  initLenis: () => {},
  scrollToById: (_: string) => {},
  stopScroll: () => {},
  startScroll: () => {},
});

export function ScrollProvider({ children }: { children: React.ReactNode }) {
  const [hasScrolled, setHasScrolled] = useState<boolean>(false);
  const refLenis = useRef<Lenis>();

  const scrollToById = (anchor: string) => {
    const anchorElement = document.getElementById(anchor);
    if (!refLenis?.current || !anchorElement) return;
    refLenis.current.scrollTo(anchorElement, { offset: -100, duration: 2 });
  };

  const initLenis = () => {
    const wrapper = document.getElementById("scroll-wrapper");
    const content = document.getElementById("scroll-content");
    if (!wrapper || !content) return;

    refLenis.current = new Lenis({ wrapper, content });
    const raf = (time: number) => {
      if (!refLenis.current) return;
      refLenis.current.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  };

  useEffect(() => {
    initLenis();

    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };
  }, []);

  const stopScroll = () => {
    if (!refLenis.current) return;
    refLenis.current.stop();
  };

  const startScroll = () => {
    if (!refLenis.current) return;
    refLenis.current.start();
  };

  return (
    <ScrollContext.Provider
      value={{
        hasScrolled,
        setHasScrolled,
        initLenis,
        scrollToById,
        stopScroll,
        startScroll,
      }}
    >
      {children}
    </ScrollContext.Provider>
  );
}

export function useScrollContext() {
  return useContext(ScrollContext);
}

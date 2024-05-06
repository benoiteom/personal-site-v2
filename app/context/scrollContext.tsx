import { createContext, useContext, useEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";

const ScrollContext = createContext({ hasScrolled: false, setHasScrolled: (_: boolean) => {}, initLenis: () => {}, scrollToById: (_: string) => {} });

export function ScrollProvider({ children }: { children: React.ReactNode }) {
  const [hasScrolled, setHasScrolled] = useState<boolean>(false);
  const [lenis, setLenis] = useState<Lenis>({} as Lenis);

  const scrollToById = (anchor: string) => {
    const anchorElement = document.getElementById(anchor);
    if (!lenis || !anchorElement) return;
    lenis.scrollTo(anchorElement, { offset: -60, duration: 2 });
  }

  const initLenis = () => {
    const wrapper = document.getElementById("scroll-wrapper");
    const content = document.getElementById("scroll-content");
    if (!wrapper || !content) return;

    const lenis = new Lenis({ wrapper, content });
    setLenis(lenis);
    const raf = (time: any) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }

  useEffect(() => {
    initLenis();

    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };
  }, []);

  return (
    <ScrollContext.Provider value={{ hasScrolled, setHasScrolled, initLenis, scrollToById }}>
      {children}
    </ScrollContext.Provider>
  );
}

export function useScrollContext() {
  return useContext(ScrollContext);
}

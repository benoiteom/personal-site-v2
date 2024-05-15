import { createContext, useContext, useState, useEffect, useRef } from "react";
import { useScrollContext } from "./scrollContext";

const ModalContext = createContext();

export function ModalProvider({ children }) {
  const { stopScroll, startScroll } = useScrollContext();
  const [modalRef, setModalRef] = useState(null);

  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [transform, setTransform] = useState({
    element: "",
    center: "",
    elementCenter: "",
  });
  const [closeTransform, setCloseTransform] = useState("");

  useEffect(() => {
    if (!modalRef) return;

    stopScroll();
    const { top, left, width, height } =
      modalRef.current.getBoundingClientRect();
    setWidth(width);
    setHeight(height);
    setTransform({
      element: `translate(${left}px, ${top}px)`,
      center: `translate(${window.innerWidth / 2}px, ${
        window.innerHeight / 2
      }px) translate(-50%, -50%)`,
      elementCenter: `translate(${window.innerWidth / 2 - left}px, ${
        window.innerHeight / 2 - top
      }px) translate(-50%, -50%)`,
    });
    setCloseTransform(`translate(${window.innerWidth / 2 + width / 2 - 96}px, ${window.innerHeight / 2 - height / 2}px)`);
  }, [modalRef]);

  const clearRef = () => {
    startScroll();
    setModalRef(null);
    setWidth(0);
    setHeight(0);
    setTransform({ element: "", center: "", elementCenter: "" });
    setCloseTransform("");
  };

  return (
    <ModalContext.Provider
      value={{
        modalRef,
        setModalRef,
        clearRef,
        width,
        height,
        transform,
        closeTransform,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export function useModalContext() {
  return useContext(ModalContext);
}

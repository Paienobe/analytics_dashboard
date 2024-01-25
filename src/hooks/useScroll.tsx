import { useEffect } from "react";
import { useGlobalContext } from "../context/GlobalContext/GlobalContext";

export const useScroll = () => {
  const { setShowMenu } = useGlobalContext();
  useEffect(() => {
    document.addEventListener("scroll", () => {
      setShowMenu(false);
    });

    return () => {
      document.removeEventListener("scroll", () => {
        setShowMenu(false);
      });
    };
  }, []);
};

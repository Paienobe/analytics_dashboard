import { useEffect } from "react";
import { useGlobalContext } from "../context/GlobalContext/GlobalContext";

export const useOutsideClick = (
  ref: React.MutableRefObject<any>,
  exemptedClass: string
) => {
  const { setShowMenu } = useGlobalContext();
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target)) {
        if ((event.target as Element).classList.contains(exemptedClass)) return;
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [exemptedClass, ref]);
};

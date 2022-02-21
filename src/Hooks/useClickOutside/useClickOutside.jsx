import { useEffect,useRef } from "react";


export function useClickOutSide(closeMenuOptions) {
    const menuRef = useRef();
    useEffect(() => {
      function clickDetect(e) {
        if (menuRef.current && !menuRef.current.contains(e.target)) {
          closeMenuOptions();
        }
      }
      document.addEventListener("click", clickDetect, false);
      return () => {
        document.removeEventListener("click", clickDetect, false);
      };
    }, []);

    return menuRef;
  }
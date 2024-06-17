import { useEffect } from "react";
import { handleCloseComponents } from "~/utils/close-components";

export function useMatchQuery(mediaQuery: string) {
  useEffect(() => {
    const mediaQueryList = window.matchMedia(mediaQuery);
    const handleMatchChange = (e: MediaQueryListEvent) => {
      if (e.matches) handleCloseComponents();
    };
    mediaQueryList.addEventListener("change", handleMatchChange);
    return () => {
      mediaQueryList.addEventListener("change", handleMatchChange);
    };
  }, []);
}

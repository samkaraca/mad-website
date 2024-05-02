import { useEffect, useState } from "react";
import { useWindowWidth } from "./useWindowWidth";

export const useIsScreenNarrow = (): boolean => {
  const windowWidth = useWindowWidth();
  const [isScreenNarrow, setIsScreenNarrow] = useState(false);

  useEffect(() => {
    if (windowWidth <= 1280) {
      setIsScreenNarrow(true);
    } else {
      setIsScreenNarrow(false);
    }
  }, [windowWidth]);

  return isScreenNarrow;
};

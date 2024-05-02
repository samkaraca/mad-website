import { useEffect, useState } from "react";
import { useIsScreenNarrow } from "./useIsScreenNarrow";

/**
 * true: screen is narrow and navigation is open
 * false: screen is narrow and navigation is closed
 * undefined: navigation is not responsive, i.e. screen is not narrow
 */
export type HamburgerMenuStatus = "open" | "closed" | undefined;

export const useHamburgerMenu = (): [
  HamburgerMenuStatus,
  (value: HamburgerMenuStatus) => HamburgerMenuStatus
] => {
  const [menuStatus, setMenuStatus] = useState<HamburgerMenuStatus>(undefined);
  const isScreenNarrow = useIsScreenNarrow();

  const changeMenuStatus = (value: HamburgerMenuStatus) => {
    console.log("changeMenuStatus", value);
    if (isScreenNarrow && value !== undefined) {
      setMenuStatus(value);
      return value;
    }
    setMenuStatus(undefined);
    return undefined;
  };

  useEffect(() => {
    if (isScreenNarrow) {
      setMenuStatus("closed");
    } else {
      setMenuStatus(undefined);
    }
  }, [isScreenNarrow]);

  return [menuStatus, changeMenuStatus];
};

import styles from "./layout.module.scss";
import navigationStyles from "../navigation/navigation.module.scss";
import { ReactNode, useEffect, useState } from "react";
import { Footer } from "../footer";
import { Navigation } from "../navigation";
import { Header } from "../header";
import { lato } from "@/fonts";
import { usePathname } from "next/navigation";
import { Overlay } from "@/components/overlay";

export const Layout = ({ children }: { children: ReactNode }) => {
  const path = usePathname();
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    const appNavOpenClassName = styles["nav-open"];
    const navigationNavOpenClassName = navigationStyles["nav-open"];
    if (!isNavOpen) {
      document.getElementById("app")?.classList.remove(appNavOpenClassName);
      document
        .getElementById("nav")
        ?.classList.remove(navigationNavOpenClassName);
    } else {
      document.getElementById("app")?.classList.add(appNavOpenClassName);
      document.getElementById("nav")?.classList.add(navigationNavOpenClassName);
      document.getElementById("first-nav-menu-item")?.focus();
    }
  }, [isNavOpen]);

  return (
    <div id="app" className={`${lato.className} ${styles["app"]}`}>
      <Header isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      <Navigation path={path} isNavOpen={isNavOpen} />
      <div className={styles["main"]}>
        <Overlay isOpen={isNavOpen} onClick={() => setIsNavOpen(false)} />
        {children}
      </div>
      <Footer
        isOverlayOpen={isNavOpen}
        onOverlayClick={() => setIsNavOpen(false)}
      />
    </div>
  );
};

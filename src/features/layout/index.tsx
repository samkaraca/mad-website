import styles from "./layout.module.scss";
import { ReactNode } from "react";
import { Footer } from "../footer";
import { Navigation } from "../navigation";
import { Header } from "../header";
import { lato } from "@/fonts";
import { usePathname } from "next/navigation";
import { Overlay } from "@/components/overlay";
import { useHamburgerMenu } from "@/hooks/useHamburgerMenu";

export const Layout = ({ children }: { children: ReactNode }) => {
  const path = usePathname();
  const [menuStatus, changeMenuStatus] = useHamburgerMenu();

  return (
    <div
      id="app"
      className={`${lato.className} ${styles["app"]} ${
        menuStatus === "open" ? styles["nav-visible"] : ""
      }`}
    >
      <a href="#main-content" className={styles["skip"]}>
        Skip to Main Content
      </a>
      <Header
        hamburgerMenuStatus={menuStatus}
        setHamburgerMenuStatus={changeMenuStatus}
      />
      <Navigation path={path} hamburgerMenuStatus={menuStatus} />
      <div className={styles["main"]}>
        <Overlay
          isOpen={menuStatus === "open"}
          onClick={() => changeMenuStatus("closed")}
        />
        {children}
      </div>
      <Footer
        hamburgerMenuStatus={menuStatus}
        setHamburgerMenuStatus={changeMenuStatus}
      />
    </div>
  );
};

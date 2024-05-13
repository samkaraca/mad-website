import { crimsonPro, jost } from "@/fonts";
import styles from "./footer.module.scss";
import { Overlay } from "@/components/overlay";
import { HamburgerMenuStatus } from "@/hooks/useHamburgerMenu";
import { usePathname } from "next/navigation";

interface Props {
  hamburgerMenuStatus: HamburgerMenuStatus;
  setHamburgerMenuStatus: (value: HamburgerMenuStatus) => HamburgerMenuStatus;
}

export const Footer = ({
  hamburgerMenuStatus,
  setHamburgerMenuStatus,
}: Props) => {
  const pathName = usePathname();

  return (
    <footer id="footer" className={styles["footer"]}>
      <section
        className={styles["acknowledgement"]}
        style={{
          visibility: pathName === "/people" ? "visible" : "hidden",
          position: pathName === "/people" ? "initial" : "absolute",
          zIndex: 1,
        }}
      >
        Acknowledgement: This website was built by Ali Nehir Dündar and Hikmet
        Sami Karaca with 🧡
      </section>
      <Overlay
        isOpen={hamburgerMenuStatus === "open"}
        onClick={() => setHamburgerMenuStatus("closed")}
      />
      <section className={styles["footer-body"]}>
        <section className={styles["main-content"]}>
          <section className={`${styles["contact"]}`}>
            <h2 className={`${jost.className}`}>CONTACT INFO</h2>
            <div className={styles["divider"]} />
            <p className={`${crimsonPro.className}`}>
              Massey University East Precinct <br />
              Albany Expressway (SH17) <br />
              Albany <br />
              0632 <br />
              New Zealand <br /> <br />
              <a href="mailto:mad@massey.ac.nz">mad@massey.ac.nz</a>
            </p>
          </section>
          <img src="/kiwi-bird.svg" alt="Kiwi bird" />
        </section>
      </section>
      <section className={styles["copyright"]}>
        <p className={jost.className}>
          Copyright © 1998 – 2024 Massey University. All rights reserved.
        </p>
      </section>
    </footer>
  );
};

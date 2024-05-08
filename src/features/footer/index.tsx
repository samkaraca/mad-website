import { crimsonPro, jost } from "@/fonts";
import styles from "./footer.module.scss";
import { Overlay } from "@/components/overlay";
import { HamburgerMenuStatus } from "@/hooks/useHamburgerMenu";

interface Props {
  hamburgerMenuStatus: HamburgerMenuStatus;
  setHamburgerMenuStatus: (value: HamburgerMenuStatus) => HamburgerMenuStatus;
}

export const Footer = ({
  hamburgerMenuStatus,
  setHamburgerMenuStatus,
}: Props) => {
  return (
    <footer id="footer" className={styles["footer"]}>
      <Overlay
        isOpen={hamburgerMenuStatus === "open"}
        onClick={() => setHamburgerMenuStatus("closed")}
      />
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
        <section className={styles["copyright"]}>
          <div className={styles["divider"]} />
          <p className={jost.className}>
            Copyright © 1998 – 2024 Massey University. All rights reserved.
          </p>
        </section>
      </section>
      <section className={styles["acknowledgement"]}>
        This website was built by Hikmet Sami Karaca and Ali Nehir Dündar with
        🧡
      </section>
    </footer>
  );
};

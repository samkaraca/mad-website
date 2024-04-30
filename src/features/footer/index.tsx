import { crimsonPro, jost } from "@/fonts";
import styles from "./footer.module.scss";

export const Footer = () => {
  return (
    <footer id="footer" className={styles["footer"]}>
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
    </footer>
  );
};

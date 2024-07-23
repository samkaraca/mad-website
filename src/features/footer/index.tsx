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
        Sami Karaca with ❤️
      </section>
      <Overlay
        isOpen={hamburgerMenuStatus === "open"}
        onClick={() => setHamburgerMenuStatus("closed")}
      />
      <section className={styles["footer-body"]}>
        <section className={styles["main-content"]}>
          <section className={styles["contact-and-follow"]}>
            <section className={`${styles["footer-section"]}`}>
              <h2 className={`${jost.className}`}>CONTACT INFO</h2>
              <div className={styles["divider"]} />
              <section
                aria-label="Building address"
                className={styles["text-with-icon"]}
              >
                <img src="/icons/apartment.svg" alt="Mail icon." />
                <p className={`${crimsonPro.className}`}>
                  Massey University East Precinct <br />
                  Albany Expressway (SH17) <br />
                  Albany <br />
                  0632 <br />
                  New Zealand <br /> <br />
                </p>
              </section>
              <section
                aria-label="E-mail address"
                className={styles["text-with-icon"]}
              >
                <img src="/icons/mail.svg" alt="" />
                <a href="mailto:mad@massey.ac.nz">mad@massey.ac.nz</a>
              </section>
            </section>
            <section className={`${styles["footer-section"]}`}>
              <h2 className={`${jost.className}`}>FOLLOW US</h2>
              <div className={styles["divider"]} />
              <p className={`${crimsonPro.className}`}>
                <a
                  target="_blank"
                  className={styles["social-media-icon"]}
                  href="https://www.linkedin.com/in/management-analytics-decision-making-aa839013a/"
                >
                  <img src="/icons/white-linkedin.svg" alt="" />
                </a>
                <a
                  target="_blank"
                  className={`${styles["social-media-icon"]}`}
                  href="https://twitter.com/MADWorkgroup"
                >
                  <img
                    style={{ filter: "invert(1)" }}
                    src="/icons/x.svg"
                    alt="The logo of social media website X"
                  />
                </a>
              </p>
            </section>
          </section>
          <img src="/kiwi-bird.svg" alt="Kiwi bird" />
        </section>
        <section className={styles["copyright"]}>
          <img src="/mad-logo.svg" alt="" />
          <p className={jost.className}>
            Copyright © 1998 – 2024 Massey University. All rights reserved.
          </p>
        </section>
      </section>
    </footer>
  );
};
<div></div>;

import { Overlay } from "@/components/overlay";
import styles from "./header.module.scss";
import { HamburgerMenuStatus } from "@/hooks/useHamburgerMenu";

interface Props {
  hamburgerMenuStatus: HamburgerMenuStatus;
  setHamburgerMenuStatus: (value: HamburgerMenuStatus) => HamburgerMenuStatus;
}

export const Header = ({
  hamburgerMenuStatus,
  setHamburgerMenuStatus,
}: Props) => {
  return (
    <header id="header" className={styles["header"]}>
      <Overlay
        isOpen={hamburgerMenuStatus === "open"}
        onClick={() => setHamburgerMenuStatus("closed")}
      />
      <section className={styles["title-bar"]}>
        {hamburgerMenuStatus === "open" ? (
          <button
            onClick={() => setHamburgerMenuStatus("closed")}
            aria-label="Navigation menu"
            aria-expanded={true}
          >
            <img src="/icons/close.svg" alt="Close icon" />
          </button>
        ) : (
          hamburgerMenuStatus === "closed" && (
            <button
              onClick={() => setHamburgerMenuStatus("open")}
              aria-label="Navigation menu"
              aria-expanded={false}
            >
              <img src="/icons/menu.svg" alt="Menu icon" />
            </button>
          )
        )}
        <a href="https://www.massey.ac.nz/">
          <img
            className={styles["logo"]}
            src="/massey-logo.png"
            alt="Logo of Massey University"
          />
        </a>
      </section>
    </header>
  );
};

import { Overlay } from "@/components/overlay";
import styles from "./header.module.scss";

interface Props {
  isNavOpen: boolean;
  setIsNavOpen: (isNavOpen: boolean) => void;
}

export const Header = ({ isNavOpen, setIsNavOpen }: Props) => {
  return (
    <header id="header" className={styles["header"]}>
      <Overlay isOpen={isNavOpen} onClick={() => setIsNavOpen(false)} />
      <section className={styles["title-bar"]}>
        {isNavOpen ? (
          <button
            onClick={() => setIsNavOpen(!isNavOpen)}
            aria-label="Navigation menu"
            aria-expanded={isNavOpen}
          >
            <img src="/icons/close.svg" alt="Close icon" />
          </button>
        ) : (
          <button
            onClick={() => setIsNavOpen(!isNavOpen)}
            aria-label="Navigation menu"
            aria-expanded={isNavOpen}
          >
            <img src="/icons/menu.svg" alt="Menu icon" />
          </button>
        )}
        <a href="https://www.massey.ac.nz/">
          <img
            className={styles["logo"]}
            srcSet="/massey-logo.png"
            alt="Logo of Massey University"
          />
        </a>
      </section>
    </header>
  );
};

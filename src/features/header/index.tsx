import styles from "./header.module.scss";

interface Props {
  isNavOpen: boolean;
  setIsNavOpen: (isNavOpen: boolean) => void;
}

export const Header = ({ isNavOpen, setIsNavOpen }: Props) => {
  return (
    <header id="header" className={styles["header"]}>
      <section className={styles["title-bar"]}>
        {isNavOpen ? (
          <button
            onClick={() => setIsNavOpen(!isNavOpen)}
            aria-label="Close Menu Button"
          >
            <img src="/close.svg" alt="Close icon" />
          </button>
        ) : (
          <button
            onClick={() => setIsNavOpen(!isNavOpen)}
            aria-label="Menu Button"
          >
            <img srcSet="/hamburger.svg" alt="Menu icon" />
          </button>
        )}
        <img
          className={styles["logo"]}
          srcSet="/massey-logo.png"
          alt="Logo of Massey University"
        />
        {/* <h1>Management, Analytics, Decision Making</h1> */}
      </section>
    </header>
  );
};

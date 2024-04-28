import styles from "./header.module.scss";

export const Header = () => {
  return (
    <header className={styles["header"]}>
      <img
        className={styles["logo"]}
        src="/massey-logo.png"
        alt="Logo of Massey University"
      />
    </header>
  );
};

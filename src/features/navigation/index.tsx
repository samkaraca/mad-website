import { lato } from "@/fonts";
import styles from "./navigation.module.scss";
import { HamburgerMenuStatus } from "@/hooks/useHamburgerMenu";

export const Navigation = ({
  path,
  hamburgerMenuStatus,
}: {
  path: string;
  hamburgerMenuStatus: HamburgerMenuStatus;
}) => {
  const tabIndex = hamburgerMenuStatus === "closed" ? -1 : undefined;

  return (
    <header
      className={`${styles["header"]} ${
        hamburgerMenuStatus === "open" ? styles["hamburger-menu-visible"] : ""
      }`}
      aria-hidden={hamburgerMenuStatus === "closed"}
    >
      <h2 className={lato.className}>MENU</h2>
      <a
        tabIndex={tabIndex}
        className={styles["massey-logo-link"]}
        href="https://www.massey.ac.nz/"
      >
        <img src="/massey-colorful.png" alt="Logo of Massey University" />
      </a>
      <nav>
        <ul className={`${styles["links"]}`}>
          <Link
            tabIndex={tabIndex}
            isFirstLink={true}
            isActive={path === "/"}
            title="Home"
            link="/"
          />
          <Link
            tabIndex={tabIndex}
            isActive={path.startsWith("/news")}
            title="News"
            link="/news"
          />
          <Link
            tabIndex={tabIndex}
            isActive={path.startsWith("/outputs")}
            title="Outputs"
            link="/outputs/years"
          />
          <Link
            tabIndex={tabIndex}
            isActive={path.startsWith("/projects")}
            title="Projects"
            link="/projects"
          />
          <Link
            tabIndex={tabIndex}
            isActive={path.startsWith("/grants")}
            title="Grants"
            link="/grants"
          />
          <Link
            tabIndex={tabIndex}
            isActive={path.startsWith("/teaching")}
            title="Teaching"
            link="/teaching"
          />
          <Link
            tabIndex={tabIndex}
            isActive={path.startsWith("/people")}
            title="People"
            link="/people"
          />
        </ul>
      </nav>
    </header>
  );
};

const Link = ({
  title,
  link,
  isActive,
  isFirstLink,
  tabIndex,
}: {
  title: string;
  link: string;
  isActive?: boolean;
  isFirstLink?: boolean;
  tabIndex?: number;
}) => {
  return (
    <li
      id={isFirstLink ? "first-nav-menu-item" : ""}
      className={styles["link"]}
    >
      <a
        tabIndex={tabIndex}
        href={link}
        className={`${lato.className} ${isActive ? styles["active-link"] : ""}`}
      >
        <div
          style={{ visibility: isActive ? "visible" : "hidden" }}
          className={styles["color-indicator"]}
        />
        {title}
      </a>
    </li>
  );
};

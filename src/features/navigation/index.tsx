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
  return (
    <nav
      id="nav"
      className={`${styles["nav"]} ${
        hamburgerMenuStatus === "open" ? styles["hamburger-menu-visible"] : ""
      }`}
      aria-hidden={hamburgerMenuStatus !== "open"}
    >
      <h2 className={lato.className}>MENU</h2>
      <a
        className={styles["massey-logo-link"]}
        href="https://www.massey.ac.nz/"
      >
        <img src="/massey-colorful.png" alt="Logo of University of Massey" />
      </a>
      <ul className={`${styles["links"]}`}>
        <Link
          isFirstLink={true}
          isActive={path === "/"}
          title="Home"
          link="/"
        />
        <Link isActive={path === "/news"} title="News" link="/news" />
        <Link isActive={path === "/outputs"} title="Outputs" link="/outputs" />
        {/* <Link
          isActive={path === "/projects"}
          title="Projects"
          link="/projects"
        /> */}
        <Link
          isActive={path === "/about-us"}
          title="About Us"
          link="/about-us"
        />
      </ul>
    </nav>
  );
};

const Link = ({
  title,
  link,
  isActive,
  isFirstLink,
}: {
  title: string;
  link: string;
  isActive?: boolean;
  isFirstLink?: boolean;
}) => {
  return (
    <li
      id={isFirstLink ? "first-nav-menu-item" : ""}
      className={styles["link"]}
    >
      <a href={link}>
        <div
          style={{ visibility: isActive ? "visible" : "hidden" }}
          className={styles["color-indicator"]}
        />
        <h3
          className={`${lato.className} ${
            isActive ? styles["active-link"] : ""
          }`}
        >
          {title}
        </h3>
      </a>
    </li>
  );
};

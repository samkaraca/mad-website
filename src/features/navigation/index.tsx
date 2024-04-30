import styles from "./navigation.module.scss";

export const Navigation = ({ path }: { path: string }) => {
  return (
    <nav id="nav" className={styles["nav"]}>
      <h2>MENU</h2>
      <img src="/massey-colorful.png" alt="Logo of University of Massey" />
      <ul className={styles["links"]}>
        <Link isActive={path === "/"} title="Home" link="/" />
        <Link isActive={path === "/news"} title="News" link="/news" />
        <Link isActive={path === "/outputs"} title="Outputs" link="/outputs" />
        <Link
          isActive={path === "/projects"}
          title="Projects"
          link="/projects"
        />
        <Link
          isActive={path === "/about-us"}
          title="About us"
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
}: {
  title: string;
  link: string;
  isActive?: boolean;
}) => {
  return (
    <li className={styles["link"]}>
      <a href={link}>
        <div
          style={{ visibility: isActive ? "visible" : "hidden" }}
          className={styles["color-indicator"]}
        />
        <h3>{title}</h3>
      </a>
    </li>
  );
};

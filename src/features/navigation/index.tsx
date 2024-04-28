import styles from "./navigation.module.scss";

export const Navigation = () => {
  return (
    <nav className={styles["nav"]}>
      <h2>MAD</h2>
      <ul className={styles["links"]}>
        <Link isActive={true} title="Home" link="/" />
        <Link isActive={false} title="About us" link="/about-us" />
        <Link isActive={false} title="Projects" link="/projects" />
        <Link isActive={false} title="News" link="/new" />
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

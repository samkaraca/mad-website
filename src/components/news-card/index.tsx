import styles from "./news-card.module.scss";

export const NewsCard = ({
  img,
  title,
  text,
  date,
  link,
  className,
}: {
  img?: string;
  title: string;
  text: string;
  date?: string;
  link?: string;
  className?: string;
}) => {
  return (
    <li>
      <a
        href={link}
        className={`${styles["news-card"]} ${className} ${
          link ? styles["clickable"] : ""
        }`}
      >
        <img src={img ? img : "/placeholder.jpg"} alt="" />
        <div className={styles["content"]}>
          <h4>{title}</h4>
          {date && (
            <div className={styles["date"]}>
              <img src="/icons/calendar.svg" alt="calendar icon" />
              <p>{date}</p>
            </div>
          )}
          <p>{text}</p>
        </div>
      </a>
    </li>
  );
};

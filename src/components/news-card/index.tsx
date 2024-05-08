import { INewsCard } from "@/types/news-card";
import styles from "./news-card.module.scss";
import { UXAnchor } from "../ux-anchor/ux-anchor";

export const NewsCard = ({
  newsCard,
  className,
}: {
  newsCard: INewsCard;
  className?: string;
}) => {
  const { title, date, image, description, link } = newsCard;

  return (
    <li>
      <a
        href={link}
        className={`${styles["news-card"]} ${className} ${
          link ? styles["clickable"] : ""
        }`}
      >
        <img src={image ? image : "/placeholder.jpg"} alt="" />
        <div className={styles["content"]}>
          <h4>{title}</h4>
          {date && (
            <div className={styles["date"]}>
              <img src="/icons/calendar.svg" alt="calendar icon" />
              <p>{date}</p>
            </div>
          )}
          {description && <p>{description}</p>}
        </div>
      </a>
    </li>
  );
};

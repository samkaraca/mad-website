import { INewsCard } from "@/types/news-card";
import styles from "./news-card.module.scss";
import { UXAnchor } from "../ux-anchor/ux-anchor";
import { OpenInNewWindowIcon } from "../open-in-new-window-icon";
import { isHrefOuter } from "@/utils/is-href-outer";

export const NewsCard = ({
  newsCard,
  className,
}: {
  newsCard: INewsCard;
  className?: string;
}) => {
  const { title, date, image, description, link } = newsCard;
  const isHrefDefinedAndOuter = link && isHrefOuter(link);

  return (
    <li>
      <a
        href={link}
        className={`${styles["news-card"]} ${className} ${
          link ? styles["clickable"] : ""
        }`}
        {...(isHrefDefinedAndOuter && { target: "_blank" })}
      >
        <img src={image ? image : "/placeholder.jpg"} alt="" />
        <div className={styles["content"]}>
          <OpenInNewWindowIcon>
            {(icon) => {
              return (
                <h4>
                  {title} {isHrefDefinedAndOuter && icon}
                </h4>
              );
            }}
          </OpenInNewWindowIcon>

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

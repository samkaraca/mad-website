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
  const { title, date, image, description, link, imageAlt } = newsCard;
  const isHrefDefinedAndOuter = link && isHrefOuter(link);

  return (
    <li>
      <article className={className}>
        <a
          href={link}
          className={`${styles["news-card"]} ${
            link ? styles["clickable"] : ""
          }`}
          {...(isHrefDefinedAndOuter && { target: "_blank" })}
        >
          <img
            src={image ? image : "/placeholder.jpg"}
            alt={image && imageAlt && imageAlt}
          />
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
              <time
                dateTime={date && date.split("/").reverse().join("-")}
                className={styles["date"]}
              >
                <img src="/icons/calendar.svg" alt="Calendar icon" />
                <p>{date}</p>
              </time>
            )}
            {description && <p>{description}</p>}
          </div>
        </a>
      </article>
    </li>
  );
};

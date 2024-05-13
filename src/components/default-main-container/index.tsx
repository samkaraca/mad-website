import { crimsonPro } from "@/fonts";
import styles from "./default-main-container.module.scss";
import { ReactNode } from "react";

export const DefaultMainContainer = ({
  image,
  imageAlt,
  title,
  embeddedTitle,
  embeddedTitleBackgroundColor,
  size,
  children,
}: {
  image: string;
  imageAlt: string;
  embeddedTitle?: string;
  embeddedTitleBackgroundColor?: string;
  size?: "medium" | "large";
  title: string;
  children: ReactNode;
}) => {
  return (
    <main
      id="main-content"
      className={`${styles["main"]} ${size ? styles[size] : styles["large"]}`}
    >
      <div className={styles["background-banner"]} />
      <div className={styles["content"]}>
        <h1 className={crimsonPro.className}>{title}</h1>
        <img src={image} alt={imageAlt} />
        {embeddedTitle && (
          <h2
            style={{
              backgroundColor: embeddedTitleBackgroundColor || "chocolate",
            }}
            className={styles["embedded-title"]}
          >
            {embeddedTitle}
          </h2>
        )}
        <div className={styles["white-background"]}>{children}</div>
      </div>
    </main>
  );
};

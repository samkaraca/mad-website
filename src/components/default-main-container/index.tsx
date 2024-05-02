import { crimsonPro } from "@/fonts";
import styles from "./default-main-container.module.scss";
import { ReactNode } from "react";

export const DefaultMainContainer = ({
  image,
  imageAlt,
  title,
  children,
}: {
  image: string;
  imageAlt: string;
  title: string;
  children: ReactNode;
}) => {
  return (
    <main id="main" className={styles["main"]}>
      <div className={styles["background-banner"]} />
      <div className={styles["content"]}>
        <h1 className={crimsonPro.className}>{title}</h1>
        <img src={image} alt={imageAlt} />
        <div className={styles["white-background"]}>{children}</div>
      </div>
    </main>
  );
};

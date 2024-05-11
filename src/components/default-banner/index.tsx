import styles from "./default-banner.module.scss";
import { crimsonPro } from "@/fonts";

export const DefaultBanner = ({
  title,
  className,
  imgSrc,
  size,
}: {
  title: string;
  className?: string;
  imgSrc?: string;
  size?: "medium" | "large";
}) => {
  return (
    <section
      className={`${styles["banner"]} ${className} ${
        size ? styles[size] : styles["large"]
      }`}
    >
      <img
        src={imgSrc || "/default-bg-2.svg"}
        alt="Banner background pattern"
      />
      <h1 className={crimsonPro.className}>{title}</h1>
    </section>
  );
};

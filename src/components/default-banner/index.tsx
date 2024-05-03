import styles from "./default-banner.module.scss";
import { crimsonPro } from "@/fonts";

export const DefaultBanner = ({
  title,
  className,
}: {
  title: string;
  className?: string;
}) => {
  return (
    <section className={`${styles["banner"]} ${className ? className : ""}`}>
      <h1 className={crimsonPro.className}>{title}</h1>
      <img src="/default-bg-2.svg" alt="Banner background pattern" />
    </section>
  );
};

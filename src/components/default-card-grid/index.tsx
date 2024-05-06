import { ReactNode } from "react";
import styles from "./default-card-grid.module.scss";

export const DefaultCardGrid = ({ children }: { children: ReactNode }) => {
  return (
    <div className={styles["list-container"]}>
      <ul className={styles["list"]}>{children}</ul>
    </div>
  );
};

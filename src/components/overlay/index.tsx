import styles from "./overlay.module.scss";

export const Overlay = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick?: VoidFunction;
}) => {
  return (
    <div
      onClick={onClick}
      className={`${styles["overlay"]} ${
        isOpen ? styles["overlay-visible"] : ""
      }`}
    />
  );
};

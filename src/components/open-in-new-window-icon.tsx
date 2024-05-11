import { ReactNode } from "react";

export const OpenInNewWindowIcon = ({
  children,
}: {
  children: (icon: ReactNode) => ReactNode;
}) => {
  return children(
    <img
      style={{
        display: "inline-block",
        paddingTop: "1px",
        paddingLeft: "0.1em",
        height: "0.8em",
        marginTop: "auto",
      }}
      src="open-in-new.svg"
    />
  );
};

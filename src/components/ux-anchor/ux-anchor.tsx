import { isHrefOuter } from "@/utils/is-href-outer";
import { ReactNode } from "react";

export const UXAnchor = ({
  text,
  href,
  className,
}: {
  href?: string;
  className?: string;
  text: string;
}) => {
  const isHrefDefinedAndOuter = href && isHrefOuter(href);

  return (
    <a
      href={href}
      className={className}
      {...(isHrefDefinedAndOuter && { target: "_blank" })}
    >
      {text}
      {isHrefDefinedAndOuter && (
        <img
          style={{
            display: "inline-block",
            paddingTop: "1px",
            paddingLeft: "0.3em",
            height: "0.8em",
            marginTop: "auto",
          }}
          src="open-in-new.svg"
        />
      )}
    </a>
  );
};

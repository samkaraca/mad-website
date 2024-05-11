import { isHrefOuter } from "@/utils/is-href-outer";
import { ReactNode } from "react";
import { OpenInNewWindowIcon } from "../open-in-new-window-icon";

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
      <OpenInNewWindowIcon>
        {(icon) => {
          return (
            <>
              {text} {isHrefDefinedAndOuter && icon}
            </>
          );
        }}
      </OpenInNewWindowIcon>
    </a>
  );
};

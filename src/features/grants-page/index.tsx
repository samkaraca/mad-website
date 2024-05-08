import { DefaultMainContainer } from "@/components/default-main-container";
import { IGrant } from "@/types/grant";
import styles from "./grants-page.module.scss";
import { UXAnchor } from "@/components/ux-anchor/ux-anchor";

export const GrantsPage = ({ grants }: { grants: IGrant[] }) => {
  return (
    <DefaultMainContainer
      image="/painting.jpg"
      imageAlt="An art studio with wooden easels holding abstract paintings, and an artist partially visible, standing at one of the easels."
      title="Grants"
    >
      <ul className={styles["grants-list"]}>
        {grants.map((grant) => {
          return (
            <li className={styles["grant"]} key={grant.title}>
              <UXAnchor text={grant.title} href={grant.link} />
            </li>
          );
        })}
      </ul>
    </DefaultMainContainer>
  );
};

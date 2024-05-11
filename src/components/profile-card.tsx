import Link from "next/link";
import styles from "./profile-card.module.scss";
import { jost } from "@/fonts";
import { IPersonCard } from "@/types/person-card";

export default function ProfileCard(props: IPersonCard) {
  return (
    <Link className={styles["profile-card"]} href={props.link || 'people'}>
      <div className={styles["profile-frame"]}>
        <img src={props.image ? props.image : "/person-placeholder.jpg"}></img>
      </div>

      <h3>{props.name}</h3>
      <p className={`${jost.className} ${styles["title"]}`}>{props.title}</p>
      <div className={styles["subset"]}>
        {props.phone && (
          <div>
            <hr />
            <div className={styles["attribute"]}>
              <img src="/icons/phone.svg"></img>
              <p>{props.phone}</p>
            </div>
          </div>
        )}
        {props.email && (
          <div>
            <hr />
            <div className={styles["attribute"]}>
              <img src="/icons/mail.svg"></img>
              <p>{props.email}</p>
            </div>
          </div>
        )}
        {props.building && (
          <div>
            <hr />
            <div className={styles["attribute"]}>
              <img src="/icons/apartment.svg"></img>
              <p>{props.building}</p>
            </div>
          </div>
        )}
        <hr />
      </div>
    </Link>
  );
}

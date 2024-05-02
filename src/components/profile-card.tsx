import styles from "./profile-card.module.scss";
import { jost } from "@/fonts";

interface Data {
    name: string;
    title: string;
    imgsrc?: string;
    phone?: string;
    email?: string;
    building?: string;
}

export default function ProfileCard(props: Data) {
    return (
        <div className={styles["profile-card"]}>

            <div className={styles["profile-frame"]}>
                <img src={props.imgsrc}></img>
            </div>

            <h3>{props.name}</h3>
            <p className={`${jost.className} ${styles["title"]}`}>{props.title}</p>
            <div className={styles["subset"]}>
                {props.phone &&
                    <div>
                        <hr />
                        <div className={styles["attribute"]}>
                        <img src="/icons/phone.svg"></img>
                        <p>{props.phone}</p>
                        </div>
                    </div>}
                {props.email &&
                    <div>
                        <hr />
                        <div className={styles["attribute"]}>
                        <img src="/icons/mail.svg"></img>
                        <p>{props.email}</p>
                        </div>
                    </div>}
                {props.building &&
                    <div>
                        <hr />
                        <div className={styles["attribute"]}>
                        <img src="/icons/apartment.svg"></img>
                        <p>{props.building}</p>
                        </div>
                    </div>}
                <hr />
            </div>
        </div>
    )
}
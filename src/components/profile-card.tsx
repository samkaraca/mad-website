import styles from "./profile-card.module.scss";
import { jost } from "@/fonts";

interface Data {
    name: string;
    title: string;
    imgsrc: string;
    phone: string;
    email: string;
    building: string;
}

export default function ProfileCard (props: Data) {
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
            <hr/>
            <p>{props.phone}</p>
            </div>}
            {props.email &&
            <div>
            <hr/>
            <p>{props.email}</p>
            </div>}
            {props.building &&
            <div>
            <hr/>
            <p>{props.building}</p>
            </div>}
            <hr/>
            </div>
        </div>
    )   
}
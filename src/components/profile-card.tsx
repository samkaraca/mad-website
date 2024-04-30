import styles from "./profile_card.module.scss";

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
                <div>
                    <img src={props.imgsrc}></img>
                </div>
            </div>
            
            <h3>{props.name}</h3>
            <p className={styles["title"]}>{props.title}</p>
            <div className={styles["subset"]}>
            <hr></hr>
            <p>{props.phone}</p>
            <hr></hr>
            <p>{props.email}</p>
            <hr></hr>
            <p>{props.building}</p>
            <hr></hr>
            </div>
        </div>
    )   
}
import styles from "./about-us.module.scss";
import ProfileCard from "@/components/profile-card";

export default function AboutUs() {
    const lecturers = [
        {
            name: "Dr. Jane Doe",
            title: "Associate Professor of Biology",
            imgsrc: "../../people/david.jpg",
            phone: "123-456-7890",
            email: "jane.doe@university.edu",
            building: ""
        },
        {
            name: "Dr. John Smith",
            title: "Professor of Chemistry",
            imgsrc: "../../people/david.jpg",
            phone: "234-567-8901",
            email: "john.smith@university.edu",
            building: "Chemistry Building"
        },
        {
            name: "Dr. Alice Johnson",
            title: "Assistant Professor of Mathematics",
            imgsrc: "../../people/david.jpg",
            phone: "345-678-9012",
            email: "alice.johnson@university.edu",
            building: "Mathematics Building"
        },
        {
            name: "Dr. Mark Lee",
            title: "Professor of Physics",
            imgsrc: "../../people/david.jpg",
            phone: "",
            email: "",
            building: "Physics Hall"
        }
    ];
    return (
    <div className={styles["layout"]}>
     <div className={styles["backgroundBanner"]} />
      <div className={styles["content"]}>
        <h1>
          About Us
        </h1>
        <img
          src="https://www.yale.edu/sites/default/files/styles/cover_image_1400x788/public/cross_campus3.jpg?itok=bPg-fzkm"
          alt="Campus photo"
        />
        <div className={styles["white-background"]}>
          <div className={styles["readable"]}>
          <section className={styles["welcome-text"]}>
              <h1 className={styles["bottom-line"]}>
                Meet Our Team
              </h1>
            </section>
            <div className={styles["profile-display"]}>
            {lecturers.map((lecturer, index) => (
                <ProfileCard key={index} {...lecturer} />
            ))}
          </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
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
          src="https://dwvt5wwshu97q.cloudfront.net/accounts/485/files/01HMATSS8X0RZVT0KY29FQG7FE/350522-preview.webp?v=63872738827"
          alt="People"
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
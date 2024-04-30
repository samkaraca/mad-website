import styles from "./aboutUs.module.scss";
import ProfileCard from "@/components/profile_card";

export default function AboutUs() {
    const lecturers = [
        {
            name: "Dr. Jane Doe",
            title: "Associate Professor of Biology",
            imgsrc: "../../people/david.jpg",
            phone: "123-456-7890",
            email: "jane.doe@university.edu",
            building: "Science Hall"
        },
        {
            name: "Dr. John Smith",
            title: "Professor of Chemistry",
            imgsrc: "path_to_image/john_smith.jpg",
            phone: "234-567-8901",
            email: "john.smith@university.edu",
            building: "Chemistry Building"
        },
        {
            name: "Dr. Alice Johnson",
            title: "Assistant Professor of Mathematics",
            imgsrc: "path_to_image/alice_johnson.jpg",
            phone: "345-678-9012",
            email: "alice.johnson@university.edu",
            building: "Mathematics Building"
        },
        {
            name: "Dr. Mark Lee",
            title: "Professor of Physics",
            imgsrc: "path_to_image/mark_lee.jpg",
            phone: "456-789-0123",
            email: "mark.lee@university.edu",
            building: "Physics Hall"
        }
    ];
    return (
      <>
        {lecturers.map((lecturer, index) => (
                <ProfileCard key={index} {...lecturer} />
            ))}
      </>
    );
  }
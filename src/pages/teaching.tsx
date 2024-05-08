import { TeachingPage } from "@/features/teaching-page";
import { ICourse } from "@/types/course";
import { readCourses } from "@/utils/read-file";

export async function getStaticProps() {
  return {
    props: {
      courses: await readCourses(),
    },
  };
}

export default function Teaching({ courses }: { courses: ICourse[] }) {
  return <TeachingPage courses={courses} />;
}

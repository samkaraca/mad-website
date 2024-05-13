import { TeachingPage } from "@/features/teaching-page";
import { ICourse } from "@/types/course";
import { readCourses } from "@/utils/read-file";
import Head from "next/head";

export async function getStaticProps() {
  return {
    props: {
      courses: await readCourses(),
    },
  };
}

export default function Teaching({ courses }: { courses: ICourse[] }) {
  return (
    <>
      <Head>
        <meta
          property="og:title"
          content="Educational Courses and Programs - MAD Research Group"
        />
        <meta
          property="og:description"
          content="Dive into the educational offerings by the MAD research group at Massey University, featuring courses that emphasize data-driven decision making and analytics. Explore our syllabus to see how we equip students with critical skills for the digital age."
        />
        <meta property="og:image" content="/teaching.jpg" />
        <meta
          property="og:image:alt"
          content="A modern classroom setting with large windows and diverse students studying and working on their laptops and notebooks."
        />
        <title>Teaching | MAD Research Group</title>
      </Head>
      <TeachingPage courses={courses} />
    </>
  );
}

import { IProjectsSection } from "@/types/projects-page";
import { readProjects } from "@/utils/read-file";

export async function getStaticProps() {
  return {
    props: {
      projectsSection: await readProjects(),
    },
  };
}

export default function Projects({
  projectsSection,
}: {
  projectsSection: IProjectsSection[];
}) {
  return <div></div>;
}

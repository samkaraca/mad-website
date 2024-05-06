import React from 'react';
import { IProjectsSection } from '@/types/projects-page';
import ProjectCard from '@/components/project-card';
import { readProjects } from '@/utils/read-file';
import styles from "./projects.module.scss";

export async function getStaticProps() {
  return {
    props: {
      projectsSection: await readProjects(),
    },
  };
}

export default function Projects({ projectsSection }: { projectsSection: IProjectsSection[] }) {
  return (
    <div>
      {projectsSection.map((section, index) => (
        <div key={index}>
          <h2 className={styles["title"]}>{section.title}</h2>
          <div className={styles.projectsContainer}>
          {section.projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
          </div>
        </div>
      ))}
    </div>
  );
};

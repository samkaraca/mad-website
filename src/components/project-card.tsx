import React from 'react';
import { IProject } from '@/types/projects-page';
import styles from "./project-card.module.scss";
import { jost } from "@/fonts";

interface ProjectCardProps {
  project: IProject;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className={styles["card"]}>
      {project.image && <img src={project.image} alt={project.title} />}
      <div className={styles["content"]}>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      {project.link && <a href={project.link} target="_blank" rel="noopener noreferrer">Learn More</a>}
      </div>
    </div>
  );
};

export default ProjectCard;

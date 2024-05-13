import React from "react";
import { IProject } from "@/types/projects-page";
import styles from "./project-card.module.scss";

interface ProjectCardProps {
  project: IProject;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <article className={styles["card"]}>
      {project.image && <img src={project.image} alt={project.imageAlt} />}
      <div className={styles["content"]}>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        {project.link && (
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            Learn More
          </a>
        )}
        <div className={styles["info"]}>
          {project.author && <p>{project.author}</p>}
          {project.degree && <p>{project.degree}</p>}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;

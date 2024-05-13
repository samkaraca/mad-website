import React from "react";
import { IProjectsSection } from "@/types/projects-page";
import ProjectCard from "@/components/project-card";
import { DefaultCardGrid } from "@/components/default-card-grid";
import { readProjects } from "@/utils/read-file";
import { jost } from "@/fonts";
import styles from "./projects.module.scss";
import { DefaultBanner } from "@/components/default-banner";
import Head from "next/head";

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
  return (
    <>
      <Head>
        <meta
          property="og:title"
          content="Research Projects - MAD Research Group"
        />
        <meta
          property="og:description"
          content="Discover the range of ongoing and proposed research projects at the MAD research group at Massey University. Explore topics from big data analytics to the integration of traditional wisdom in modern problem-solving across various disciplines."
        />
        <meta
          property="og:image"
          content="/open-graph/projects/projects191-100.jpg"
        />
        <meta
          property="og:image:alt"
          content="The image displays a dark blue background with abstract, fluid, white line patterns and a central, bold text that reads 'Projects' in white."
        />
        <title>Projects | MAD Research Group</title>
      </Head>
      <main id="main-content" className={styles["content"]}>
        <DefaultBanner title="Projects" imgSrc="/default-bg-1.svg" />
        {projectsSection.map((section, index) => (
          <section
            aria-label={section.title}
            key={index}
            className={styles["list"]}
          >
            <h2 className={`${jost.className} ${styles["title"]}`}>
              {section.title}
            </h2>
            <DefaultCardGrid>
              {section.projects.map((project, idx) => (
                <ProjectCard key={idx} project={project} />
              ))}
            </DefaultCardGrid>
          </section>
        ))}
      </main>
    </>
  );
}

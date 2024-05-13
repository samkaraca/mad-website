import { DefaultMainContainer } from "@/components/default-main-container";
import styles from "./outputs.module.scss";
import { IOutput } from "@/types/output";
import { readOutputs } from "@/utils/read-file";
import Head from "next/head";

export async function getStaticProps() {
  return {
    props: {
      outputs: await readOutputs(),
    },
  };
}

export default function Output({ outputs }: { outputs: IOutput[] }) {
  return (
    <>
      <Head>
        <meta
          property="og:title"
          content="Research Outputs and Publications - MAD Research Group"
        />
        <meta
          property="og:description"
          content="Explore a comprehensive collection of research outputs and academic publications by the MAD research group at Massey University, featuring groundbreaking work across diverse fields."
        />
        <meta property="og:image" content="/outputs-background.jpg" />
        <meta
          property="og:image:alt"
          content="Close-up of the keys of an old-fashioned typewriter, highlighting the round, metallic keys with worn letters."
        />
        <title>Outputs | MAD Research Group</title>
      </Head>
      <DefaultMainContainer
        size="medium"
        title="Outputs"
        image="/outputs-background.jpg"
        imageAlt="Close-up of the keys of an old-fashioned typewriter, highlighting the round, metallic keys with worn letters."
        embeddedTitle="All Publications By The MAD Research Group"
      >
        <div className={styles["content"]}>
          <div className={styles["output-list"]}>
            {outputs.map((output) => {
              return (
                <div key={output.year} className={styles["year-block"]}>
                  <h3>{output.year}</h3>
                  <ul>
                    {output.references.map((reference, index) => {
                      return <li key={index}>{reference}</li>;
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </DefaultMainContainer>
    </>
  );
}

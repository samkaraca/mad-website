import { DefaultMainContainer } from "@/components/default-main-container";
import styles from "./outputs.module.scss";
import { IOutput } from "@/types/output";
import { readOutputs } from "@/utils/read-file";
import Head from "next/head";
import Link from "next/link";

export async function getStaticPaths() {
  return {
    paths: [
      { params: { orderBy: "authors" } },
      { params: { orderBy: "years" } },
    ],
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: any }) {
  const { orderBy } = params;

  return {
    props: {
      outputs: await readOutputs(orderBy),
    },
  };
}

export default function Output({ outputs }: { outputs: any }) {
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
        <section className={styles["grouping-options"]}>
          <Link href="/outputs/years">By years</Link>|
          <Link href="/outputs/authors">By authors</Link>
        </section>
        <div className={styles["content"]}>
          <div className={styles["output-list"]}>
            {Object.keys(outputs)
              .sort((a: any, b: any) => b - a)
              .map((key: any) => {
                const obj: string[] = outputs[key];

                return (
                  <div key={key} className={styles["year-block"]}>
                    <h3>{key}</h3>
                    <ul>
                      {obj.map((reference, index) => {
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

import { DefaultMainContainer } from "@/components/default-main-container";
import styles from "./outputs.module.scss";
import { IOutput } from "@/types/output";
import { readOutputs } from "@/utils/read-file";

export async function getStaticProps() {
  return {
    props: {
      outputs: await readOutputs(),
    },
  };
}

export default function Output({ outputs }: { outputs: IOutput[] }) {
  return (
    <DefaultMainContainer
      title="Outputs"
      image="/output-bg.jpg"
      imageAlt="Campus view"
    >
      <div className={styles["content"]}>
        <h1>All Publications By The MAD Research Group</h1>
        <div className={styles["output-list"]}>
          {outputs.map((output, index) => {
            // Calculate class name index, cycles through 1, 2, 3
            const classNameIndex = (index % 3) + 1;
            const className = `${styles["year-block"]} ${
              styles["themed-container-" + classNameIndex]
            }`;
            return (
              <div key={output.year} className={styles["year-block"]}>
                <h2>{output.year}</h2>
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
  );
}

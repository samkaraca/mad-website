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
      size="medium"
      title="Outputs"
      image="/outputs-background.jpg"
      imageAlt="A close-up photo of handwritten notes on aged papers."
      embeddedTitle="All Publications By The MAD Research Group"
    >
      <div className={styles["content"]}>
        {/* <h1>All Publications By The MAD Research Group</h1> */}
        <div className={styles["output-list"]}>
          {outputs.map((output, index) => {
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

import { DefaultMainContainer } from "@/components/default-main-container";
import { IGrant } from "@/types/grant";
import { readGrants } from "@/utils/read-file";

export async function getStaticProps() {
  return {
    props: {
      grants: await readGrants(),
    },
  };
}

export default function Grants({ grants }: { grants: IGrant[] }) {
  return (
    <DefaultMainContainer
      image="/painting.jpg"
      imageAlt="An art studio with wooden easels holding abstract paintings, and an artist partially visible, standing at one of the easels."
      title="Grants"
    >
      {grants.map((grant) => {
        return (
          <section key={grant.title}>
            <h1>{grant.title}</h1>
          </section>
        );
      })}
    </DefaultMainContainer>
  );
}

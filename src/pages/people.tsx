import ProfileCard from "@/components/profile-card";
import { readPeople } from "@/utils/read-file";
import { IPersonCard } from "@/types/person-card";
import { DefaultBanner } from "@/components/default-banner";
import { DefaultCardGrid } from "@/components/default-card-grid";
import Head from "next/head";

export async function getStaticProps() {
  return {
    props: {
      people: await readPeople(),
    },
  };
}

export default function People({ people }: { people: IPersonCard[] }) {
  return (
    <>
      <Head>
        <meta property="og:title" content="Our Team - MAD Research Group" />
        <meta
          property="og:description"
          content="Meet the diverse team of professors, researchers, and PhD students at the MAD research group at Massey University. Learn about their expertise, research interests, and how their work contributes to groundbreaking studies across various disciplines."
        />
        <meta
          property="og:image"
          content="/open-graph/people/people191-100.jpg"
        />
        <meta
          property="og:image:alt"
          content="Word 'People' in white serif font on a dark blue background."
        />
        <title>People | MAD Research Group</title>
      </Head>
      <main id="main-content">
        <DefaultBanner imgSrc="/people-bg.svg" title="People" />
        <div style={{ paddingTop: "2.5rem", paddingBottom: "8rem" }}>
          <DefaultCardGrid>
            {people.map((lecturer, index) => (
              <ProfileCard key={index} {...lecturer} />
            ))}
          </DefaultCardGrid>
        </div>
      </main>
    </>
  );
}

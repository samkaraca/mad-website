import { GrantsPage } from "@/features/grants-page";
import { IGrant } from "@/types/grant";
import { readGrants } from "@/utils/read-file";
import Head from "next/head";

export async function getStaticProps() {
  return {
    props: {
      grants: await readGrants(),
    },
  };
}

export default function Grants({ grants }: { grants: IGrant[] }) {
  return (
    <>
      <Head>
        <meta
          property="og:title"
          content="Grants and Funding - MAD Research Group"
        />
        <meta
          property="og:description"
          content="Explore the variety of grants awarded to the MAD research group at Massey University, supporting innovative studies across multiple disciplines. Learn about our latest funding achievements and how they propel our research forward."
        />
        <meta property="og:image" content="/painting.jpg" />
        <meta
          property="og:image:alt"
          content="An art studio with wooden easels holding abstract paintings, and an artist partially visible, standing at one of the easels."
        />
        <title>Grants | MAD Research Group</title>
      </Head>
      <GrantsPage grants={grants} />
    </>
  );
}

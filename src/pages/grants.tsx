import { GrantsPage } from "@/features/grants-page";
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
  return <GrantsPage grants={grants} />;
}

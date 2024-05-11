import ProfileCard from "@/components/profile-card";
import { readPeople } from "@/utils/read-file";
import { IPersonCard } from "@/types/person-card";
import { DefaultBanner } from "@/components/default-banner";
import { DefaultCardGrid } from "@/components/default-card-grid";

export async function getStaticProps() {
  return {
    props: {
      people: await readPeople(),
    },
  };
}

export default function AboutUs({ people }: { people: IPersonCard[] }) {
  return (
    <main>
      <DefaultBanner title="People" />
      <div style={{ paddingTop: "2.5rem", paddingBottom: "10rem" }}>
        <DefaultCardGrid>
          {people.map((lecturer, index) => (
            <ProfileCard key={index} {...lecturer} />
          ))}
        </DefaultCardGrid>
      </div>
    </main>
  );
}

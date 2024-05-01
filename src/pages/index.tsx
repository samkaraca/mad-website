import Head from "next/head";
import { Inter } from "next/font/google";
import { HomePage } from "@/features/home-page";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <meta
          property="og:title"
          content="Massey Unviersity - Management, Analytics, and Decision Making"
        />
        <meta
          property="og:description"
          content="Meet the MAD research group from Massey University, exploring the human impact of business computing."
        />
        <meta
          property="og:image"
          content="/open-graph/home-page/massey191-100.jpg"
        />
        <meta property="og:image:alt" content="The logo of Massey University" />
        <title>MAD - Management Analytics Decision Making</title>
      </Head>
      <HomePage />
    </>
  );
}

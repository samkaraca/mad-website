import Head from "next/head";
import { Inter } from "next/font/google";
import { HomePage } from "@/features/home-page";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>MAD - Management Analytics Decision Making</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <HomePage />
    </>
  );
}

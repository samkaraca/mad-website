import Head from "next/head";
import { Inter } from "next/font/google";
import { HomePage } from "@/features/home-page";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>MAD - Management Analytics Decision Making</title>
      </Head>
      <HomePage />
    </>
  );
}

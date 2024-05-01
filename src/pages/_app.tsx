import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { Layout } from "@/features/layout";
import { crimsonPro } from "@/fonts";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            font-family: ${crimsonPro.style.fontFamily};
          }
        `}
      </style>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

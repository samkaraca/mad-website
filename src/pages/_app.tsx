import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { Header } from "@/features/header";
import { Footer } from "@/features/footer";
import { Navigation } from "@/features/navigation";
import { Crimson_Pro, Jost, Lato } from "next/font/google";
import styles from "./_app.module.scss";

export const jost = Jost({ subsets: ["latin"] });
export const lato = Lato({ subsets: ["latin"], weight: ["300", "700"] });
export const crimsonPro = Crimson_Pro({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${lato.className} ${styles["app"]}`}>
      <header className={styles["header"]}>
        <Header />
      </header>
      <nav className={styles["nav"]}>
        <Navigation />
      </nav>
      <main className={styles["main"]}>
        <Component {...pageProps} />
      </main>
      <footer className={styles["footer"]}>
        <Footer />
      </footer>
    </main>
  );
}

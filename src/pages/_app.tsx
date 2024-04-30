import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { Header } from "@/features/header";
import { Footer } from "@/features/footer";
import { Navigation } from "@/features/navigation";
import { Crimson_Pro, Jost, Lato } from "next/font/google";
import { useEffect, useState } from "react";
import styles from "./_app.module.scss";
import navigationStyles from "../features/navigation/navigation.module.scss";
import { usePathname } from "next/navigation";

export const jost = Jost({ subsets: ["latin"] });
export const lato = Lato({ subsets: ["latin"], weight: ["300", "700"] });
export const crimsonPro = Crimson_Pro({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  const path = usePathname();
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    const appNavOpenClassName = styles["nav-open"];
    const navigationNavOpenClassName = navigationStyles["nav-open"];
    const className = document.getElementById("app")?.className;
    if (className?.includes(appNavOpenClassName)) {
      document.getElementById("app")?.classList.remove(appNavOpenClassName);
      document.getElementById("overlay")?.classList.remove(appNavOpenClassName);
      document
        .getElementById("nav")
        ?.classList.remove(navigationNavOpenClassName);
    } else {
      document.getElementById("app")?.classList.add(appNavOpenClassName);
      document.getElementById("overlay")?.classList.add(appNavOpenClassName);
      document.getElementById("nav")?.classList.add(navigationNavOpenClassName);
    }
  }, [isNavOpen]);

  return (
    <main id="app" className={`${lato.className} ${styles["app"]}`}>
      <Header isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      <Navigation path={path} />
      <main className={styles["main"]}>
        <div
          id="overlay"
          className={styles["overlay"]}
          onClick={() => setIsNavOpen(false)}
        />
        <Component {...pageProps} />
      </main>
      <Footer />
    </main>
  );
}

import Head from "next/head";

export default function Page404() {
  return (
    <>
      <Head>
        <title>404 Page Not Found</title>
      </Head>
      <main
        id="main-content"
        style={{
          backgroundColor: "#eee",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "2rem",
          gap: "1rem",
          color: "#333",
        }}
      >
        <h1>404</h1>
        <p>Page Not Found :(</p>
      </main>
    </>
  );
}

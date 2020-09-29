import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <meta name="msapplication-TileColor" content="#000000" />
        <meta
          name="msapplication-config"
          content="/static/favicon/browserconfig.xml"
        />
        <meta name="theme-color" content="#000" />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
        <meta name="viewport" content="width=device-width" />
        <meta charSet="utf-8" />
        <title>Land for smile</title>
        <meta name="twitter:site" content="@vercel" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:title" content="Land for smile" />
        <meta property="og:url" content="https://nextjs.org" />
        <meta name="description" content="Land for smile description." />
        <meta
          property="og:description"
          content="Land for smile og:description."
        />
        <meta
          property="og:image"
          content="https://nextjs.org/static/twitter-cards/home.jpg"
        />
      </Head>

      <main className={styles.main}>
        <h1>Home Home Home</h1>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}

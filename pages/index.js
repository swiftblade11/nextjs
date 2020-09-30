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
        <title>Home | Land for smile</title>
        <meta property="og:title" content="Home | Land for smile title" />
        <meta
          property="og:description"
          content="ทุกทำเลที่ใช่สำหรับคุณ พวกเราคือตัวแทนขายทรัพย์ที่มีประสบการณ์มากกว่า 10 ปี"
        />
        <meta property="og:image" content="/opengraph.png" />
      </Head>

      <main className={styles.main}>
        <h1>Home | Land for smile 10 years</h1>
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

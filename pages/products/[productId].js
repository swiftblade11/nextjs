import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import styles from "../../styles/Home.module.css";

const Product = () => {
  const route = useRouter();
  const productId = route.query.productId;
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
        <title>Product {productId}</title>
        <meta property="og:title" content={`Product | ${productId}`} />
        <meta
          property="og:description"
          content="ให้เช่าด่วน ทาวน์โฮม อินดี้ บางนา อยู่ใกล้ เมกะบางนา บ้านสวยน่าอยู่มากๆ ซอยนี้มีแต่บ้านหรูๆ อยู่ซอยบางแก้ว อยู่ติดเมกะบางนาเลย ทำเลดีจริงๆ ขึ้นทางด่วนได้เลย"
        />
        <meta property="og:image" content="/opengraph.png" />
      </Head>
      <h1>Product | {productId}</h1>
    </div>
  );
};

export default Product;

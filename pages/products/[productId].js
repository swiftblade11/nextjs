import React from "react";
import Head from "next/head";
import styles from "../../styles/Home.module.css";

const Product = (props) => {
  const { product } = props;
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
        <title>Product {product.id}</title>
        <meta property="og:title" content={`Product | ${product.id}`} />
        <meta
          property="og:description"
          content={`${product.id} ให้เช่าด่วน ทาวน์โฮม อินดี้ บางนา อยู่ใกล้ เมกะบางนา บ้านสวยน่าอยู่มากๆ ซอยนี้มีแต่บ้านหรูๆ อยู่ซอยบางแก้ว อยู่ติดเมกะบางนาเลย ทำเลดีจริงๆ ขึ้นทางด่วนได้เลย`}
        />
        <meta property="og:image" content="/opengraph.png" />
      </Head>
      <h1>Product | {product.id}</h1>
    </div>
  );
};

export async function getServerSideProps(context) {
  const { productId } = context.query;
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  // const res = await fetch('https://.../posts')
  // const posts = await res.json()

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      product: {
        id: productId,
      },
    },
  };
}
export default Product;

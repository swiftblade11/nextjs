import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import styles from "../../styles/Home.module.css";
import { NextSeo } from "next-seo";

const Product = (props) => {
  const route = useRouter();
  const productId = route.query.productId;
  console.log("props", props);
  const { product } = props;
  return (
    <div className={styles.container}>
      {/* <Head>
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
      </Head> */}
      <NextSeo
        title="Using More of Config"
        description={`This example uses more of the available config options. ${product.name}`}
        canonical="https://www.canonical.ie/"
        openGraph={{
          url: "https://www.url.ie/a",
          title: `Open Graph Title ${product.name}`,
          description: `Open Graph Description ${product.name}`,
          images: [
            {
              url: "/opengraph.png",
              width: 800,
              height: 600,
              alt: "Og Image Alt",
            },
            {
              url: "/opengraph.png",
              width: 900,
              height: 800,
              alt: "Og Image Alt Second",
            },
            { url: "/opengraph.png" },
            { url: "/opengraph.png" },
          ],
          site_name: "SiteName",
        }}
        twitter={{
          handle: "@handle",
          site: "@site",
          cardType: "summary_large_image",
        }}
      />
      <h1>Product | {product.name}</h1>
    </div>
  );
};

export async function getServerSideProps(context) {
  const { query } = context;
  console.log("context", context, query);
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  // const res = await fetch('https://.../posts')
  // const posts = await res.json()

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      product: {
        name: "abv",
      },
    },
  };
}
export default Product;

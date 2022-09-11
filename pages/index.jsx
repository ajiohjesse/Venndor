import Head from "next/head";
import Hero from "../components/Hero";
import Featured from "../components/Featured";
import RecentProducts from "../components/RecentProducts";

export default function Home() {
  return (
    <>
      <Head>
        <title>Venndor - The Online Marketplace</title>
        <link rel="shortcut icon" href="favicon.png" type="image/x-icon" />
      </Head>
      <Hero />
      <Featured />
      <RecentProducts />
    </>
  );
}

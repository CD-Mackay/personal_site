import Head from "next/head";
import Header from "../Components/Header/Header";
import Footer from '../Components/Footer/Footer';
import Hero from "../Components/Hero/Hero";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Connor Mackay</title>
        <meta name="description" content="Connor Mackay's personal site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Hero />
      <Footer />
    </div>
  );
}

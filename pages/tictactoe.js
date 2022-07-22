import Header from "../Components/Header/Header";
import Head from "next/head";
import Game from "../Components/Game/Game";

export default function Resume() {
  return (
    <div>
      <Head>
        <title>Connor Mackay Resume</title>
        <meta name="description" content="Connor Mackay's Resume" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Game />
    </div>
  );
}
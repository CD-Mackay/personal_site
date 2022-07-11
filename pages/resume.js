import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import ResumeDoc from "../Components/ResumeDoc/ResumeDoc";
import Head from "next/head";

export default function Resume() {
  return (
    <div>
      <Head>
        <title>Connor Mackay Resume</title>
        <meta name="description" content="Connor Mackay's Resume" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <ResumeDoc />
    </div>
  );
}

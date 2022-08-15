// Framework Imports
import Head from "next/head";

// Component Imports
import Header from "../Components/Header/Header";
import ResumeDoc from "../Components/ResumeDoc/ResumeDoc";

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

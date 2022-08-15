// Framework Imports
import Head from "next/head";

// Component Imports
import Header from "../Components/Header/Header";
import Game from "../Components/Game/Game";
import Footer from "../Components/Footer/Footer";
import { GameContextProvider } from "../Components/Context/GameContext";

export default function GamePage() {
  return (
    <GameContextProvider>
      <div>
        <Head>
          <title>Tic Tac Toe</title>
          <meta
            name="description"
            content="Connor Mackay's portfolio, sample of game portfolio"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <Game />
        <Footer />
      </div>
    </GameContextProvider>
  );
}

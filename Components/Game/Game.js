import React, { useEffect, useState, useContext } from "react";
import GameSquare from "./GameSquare/GameSquare";
import Button from "../Button/Button";
import GameContext from "../Context/GameContext";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";

import styles from "./Game.module.css";

const Game = () => {
  const {
    gamePhase,
    playerTurn,
    squareSelected,
    setSquareSelected,
    game,
    victory,
    computerPlayer,
    opponentName,
    startGame,
    startComputerGame,
    updateBoard,
    handleTurn,
    resetGame,
    quitGame,
  } = useContext(GameContext);

  const gameBoard = () => {
    return game.map((element, index) => {
      return (
        <GameSquare
          index={index}
          key={index}
          value={element.element}
          playerTurn={playerTurn}
          setSquareSelected={setSquareSelected}
          victory={victory}
        />
      );
    });
  };
  useEffect(() => {
    updateBoard(squareSelected);
    if (victory === 0 && playerTurn !== 0) {
      handleTurn();
    }
  }, [squareSelected, gamePhase, victory]);

  return (
    <section className={styles.gameWrapper}>
      <div id={styles.gameHeader}>
        <h4 className={styles.ticHeader}>Welcome to Tic-Tac-Toe</h4>
        <p>Life is stressful, hiring is stressful. Why not play a game?</p>
      </div>
      {gamePhase === "setup" && (
        <div id={styles.setupBox}>
          <h4 className={styles.ticHeader}>Select Opponent:</h4>
          <div id={styles.buttonWrapper}>
            <Button onClick={startGame} text="Human" />
            <Button onClick={startComputerGame} text="Robot" />
          </div>
        </div>
      )}
        <p id={styles.subText}>
            *More games available in the Mini-Arcade app.
            <Link href="/">
              <BsGithub fontSize="16px" />
            </Link>
          </p>
      {gamePhase === "play" && (
        <div>
          {victory === 0 && !computerPlayer && (
            <p>Its currently Player {playerTurn}s turn</p>
          )}
          {(victory == 1 || victory == 2) && (
            <p>Player {victory} is victorious! </p>
          )}
          {computerPlayer && <p>Playing against {opponentName}</p>}
          {victory == 3 && <p>Draw</p>}
          <div className={styles.gameGrid}>{gameBoard()}</div>
          <div className={styles.gameOptions}>
            <Button onClick={resetGame} text="Reset Game" />
            <Button onClick={quitGame} text="Quit Game" />
          </div>
        </div>
      )}
    </section>
  );
};

export default Game;

// Library Imports
import { createContext, useState } from "react";

const GameContext = createContext({});

export function GameContextProvider(props) {
  const [gamePhase, setGamePhase] = useState("setup");
  const [playerTurn, setPlayerTurn] = useState(0);
  const [squareSelected, setSquareSelected] = useState(null);
  const [game, setGame] = useState([]);
  const [victory, setVictory] = useState(0);
  const [computerPlayer, setComputerPlayer] = useState(false);
  const [opponentName, setOpponentName] = useState("");
  const squares = ["", "", "", "", "", "", "", "", ""];

  const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const startGame = () => {
    setGamePhase("play");
    setGame(
      squares.map((element, index) => {
        return { element, score: 0, index };
      })
    );
    setPlayerTurn(1);
  };

  const startComputerGame = () => {
    setComputerPlayer(true);
    setOpponentName("Bender");
    startGame();
  };

  const clearSquareValues = () => {
    let activeBoard = [...game];
    setGame(
      activeBoard.map((element) => {
        return { element: element.element, index: element.index, score: 0 };
      })
    );
  };

  const updateSquareValues = (number, squareScore) => {
    let values = [...game];
    for (let entry of values) {
      if (entry.index === number) {
        entry.score += squareScore;
      }
    }
    setGame(values);
  };

  const selectComputerOffense = () => {
    for (let i = 0; i <= 7; i++) {
      const winCondition = winConditions[i];
      const a = game[winCondition[0]].element;
      const firstNum = winCondition[0];
      const b = game[winCondition[1]].element;
      const secondNum = winCondition[1];
      const c = game[winCondition[2]].element;
      const thirdNum = winCondition[2];
      let array = [
        { letter: a, number: firstNum, score: 0 },
        { letter: b, number: secondNum, score: 0 },
        { letter: c, number: thirdNum, score: 0 },
      ]; // letter value = selected status of game square, number = index of square
      if ((a === 2 || b === 2 || c === 2) && a !== 1 && b !== 1 && c !== 1) {
        // Check if computer has already progressed on winCondition, check for block
        for (let entry of array) {
          if (entry.letter === "") {
            // grab first available square from winCondition
            updateSquareValues(entry.number, 1);
          }
        }
      } else if (a === "" && b === "" && c === "") {
        // check for empty winCondition
        updateSquareValues(firstNum, 1);
        updateSquareValues(secondNum, 1);
        updateSquareValues(thirdNum, 1);
      }
    }
  };

  const selectComputerDefense = () => {
    for (let i = 0; i <= 7; i++) {
      const winCondition = winConditions[i];
      const a = game[winCondition[0]].element;
      const firstNum = winCondition[0];
      const b = game[winCondition[1]].element;
      const secondNum = winCondition[1];
      const c = game[winCondition[2]].element;
      const thirdNum = winCondition[2];
      let array = [
        { letter: a, number: firstNum, score: 0 },
        { letter: b, number: secondNum, score: 0 },
        { letter: c, number: thirdNum, score: 0 },
      ]; // letter value = selected status of game square, number = index of square
      let incrementer = 0;
      for (let entry of array) {
        if (entry.letter === 1) {
          incrementer++;
        }
        if (incrementer === 2) {
          for (let entry of array) {
            if (entry.letter === "") {
              updateSquareValues(entry.number, 20);
            }
          }
        }
      }
      if ((a === 1 || b === 1 || c === 1) && a !== 2 && b !== 2 && c !== 2) {
        // Check if human has already progressed on winCondition, check for block
      }
    }
  };

  const handleComputerTurn = (turn) => {
    if (turn === 2) {
      console.log("inside if block", turn);
      clearSquareValues();
      selectComputerDefense();
      selectComputerOffense();
      let finalScores = [...game];
      finalScores = finalScores.sort((a, b) => {
        return b.score - a.score;
      });
      for (let i = 0; i <= finalScores.length; i++) {
        if (finalScores[i].element === "") {
          setSquareSelected(finalScores[i].index);
          return;
        }
      }
    }
  };

  const checkForWin = (game, playerTurn) => {
    if (game.length > 0) {
      for (let i = 0; i <= 7; i++) {
        const winCondition = winConditions[i];
        const a = game[winCondition[0]];
        const b = game[winCondition[1]];
        const c = game[winCondition[2]];
        if (a.element === "" || b.element === "" || c.element === "") {
          continue;
        }
        if (a.element === b.element && b.element === c.element) {
          if (playerTurn !== 0 && gamePhase === "play") {
            setVictory(playerTurn);
          }
          break;
        }
        let array = [];
        for (let entry of game) {
          array.push(entry.element);
        }
        if (!array.includes("")) {
          setVictory(3);
        }
      }
    }
  };

  const updateBoard = (index) => {
    let board = [...game];
    for (let entry of board) {
      if (entry.index === index) {
        entry.element = playerTurn;
      }
    }
    setGame(board);
    checkForWin(board, playerTurn);
  };

  const handleTurn = () => {
    if (computerPlayer && playerTurn === 1) {
      setPlayerTurn(2);
      setTimeout(() => {
        handleComputerTurn(2);
      }, 300);
    } else if (computerPlayer && playerTurn === 2) {
      setPlayerTurn(1);
    } else if (!computerPlayer) {
      playerTurn == 1 ? setPlayerTurn(2) : setPlayerTurn(1);
    }
  };

  const resetGame = () => {
    setGamePhase("setup");
    setGame(
      squares.map((element, index) => {
        return { element, index, score: 0 };
      })
    );
    setVictory(0);
    setGamePhase("play");
    setSquareSelected(null);
    setPlayerTurn(1);
  };

  const quitGame = () => {
    setGamePhase("setup");
    setGame(squares);
    setVictory(0);
    setComputerPlayer(false);
    setSquareSelected(null);
  };

  const context = {
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
  };

  /**
   * Context Component for running Tic-Tac-Toe Logic.
   */
  return (
    <GameContext.Provider value={context}>
      {props.children}
    </GameContext.Provider>
  );
}

export default GameContext;

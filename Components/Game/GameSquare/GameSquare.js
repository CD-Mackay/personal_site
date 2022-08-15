// Library Imports
import React, { useEffect, useState } from 'react';

// CSS Imports
import styles from './GameSquare.module.css';

const GameSquare = ({index, setSquareSelected, value, victory}) => {


  const [opacity, setOpacity] = useState(0);

 const handleSquareSelect = () => {
   if (value === "" && victory === 0) {
    setSquareSelected(index);
   }
  };

  useEffect(() => {
    if (value !== "") {
      setOpacity(1);
    }
  }, [value]);
  
  /**
   * Component for rendering individual squares on Tic-Tac-Toe board. 
   */
  return (
    <div className={styles.squareWrapper} id={`styles.game-square-${index}`} onClick={handleSquareSelect}>
      {value && <p className={styles.squareText}>{value === 1 ? "x" : "o"}</p>}
      </div>
  )
};

export default GameSquare;
import React, { useEffect, useState } from 'react';

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
  
  return (
    <div className={styles.squareWrapper} id={`styles.game-square-${index}`} onClick={handleSquareSelect}>
      {value && <p className={styles.squareText}>{value === 1 ? "x" : "o"}</p>}
      </div>
  )
};

export default GameSquare;
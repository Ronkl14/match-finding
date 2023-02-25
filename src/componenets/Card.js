import React from "react";
import BottomMenu from "./BottomMenu";
import TopMenu from "./TopMenu";
import fakeData from "../fakeData";
import { useState } from "react";

const Card = () => {
  const [index, setIndex] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [correct, setCorrect] = useState(0);
  const [incorrect, setIncorrect] = useState(0);

  function incrementIndex() {
    setIndex(index + 1);
    if (index === 9) {
      setGameOver(true);
    }
  }

  function clickTrue() {
    incrementIndex();
    if (fakeData[index].isMatch) {
      setCorrect(correct + 1);
    } else {
      setIncorrect(incorrect + 1);
    }
  }

  function clickFalse() {
    incrementIndex();
    if (!fakeData[index].isMatch) {
      setCorrect(correct + 1);
    } else {
      setIncorrect(incorrect + 1);
    }
  }

  return (
    <div className="app">
      <TopMenu correct={correct} incorrect={incorrect} />
      {gameOver ? (
        <h2>Game Over</h2>
      ) : (
        <div className="card">
          <div className="img-wrap">
            <img src={fakeData[index].imageUrl} alt="animal" />
          </div>
          <h2>{fakeData[index].description}</h2>
        </div>
      )}
      <BottomMenu clickTrue={clickTrue} clickFalse={clickFalse} />
    </div>
  );
};

export default Card;

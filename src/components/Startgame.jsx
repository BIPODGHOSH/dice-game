import React, { useState } from "react";
import { styled } from "styled-components";
import RoleDice from "./RoleDice";
import TotalScore from "./TotalScore";

const StartGame = () => {
  const [selectNumber, setSelectNumber] = useState();
  const [score, setScore] = useState(0);
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("");

  const random = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const roleDice = () => {
    if (!selectNumber) {
      setError("You have not selected anny number");
      return;
    }
    setError("");
    const currentNumber = random(1, 7);
    setCurrentDice(currentNumber);
    if (currentNumber === selectNumber) {
      setScore((prev) => prev + 6);
    } else {
      setScore((prev) => prev - 1);
    }
    setSelectNumber(undefined);
  };

  const handleReset = () => {
    setScore(0);
    setError("");
    setSelectNumber(undefined);
  };

  // console.log(score);

  return (
    <Container>
      <TotalScore
        selectNumber={selectNumber}
        setSelectNumber={setSelectNumber}
        score={score}
        error={error}
      />
      <RoleDice
        roleDice={roleDice}
        currentDice={currentDice}
        handleReset={handleReset}
      />
    </Container>
  );
};

export default StartGame;

const Container = styled.div`
  height: 80%;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  /* margin: 0 100px 0 100px; */
  padding: 0 0 100px 0;
`;

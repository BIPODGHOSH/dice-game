import React, { useState } from "react";
import { DiceContainer, ImageContainer, Reset, Rules } from "./RoleDice";

export const RoleDice = () => {
  const [currentDice, setCurrentDice] = useState();

  const random = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };
  return (
    <DiceContainer>
      <ImageContainer>
        <img src="/" alt="dice 1" />
      </ImageContainer>
      <p>Click on dice to rool</p>
      <Reset>Reset Score</Reset>
      <Rules>Show Rules</Rules>
    </DiceContainer>
  );
};

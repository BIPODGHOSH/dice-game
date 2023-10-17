import React, { useState } from "react";
import styled from "styled-components";
import ShowRule from "./ShowRule";

const RoleDice = ({ roleDice, currentDice, handleReset }) => {
  const [showRules, setShowRules] = useState(false);

  const handelShowRules = () => {
    setShowRules(!showRules);
  };

  return (
    <DiceContainer>
      <ImageContainer onClick={roleDice}>
        <img
          src={`/images/dice_${currentDice}.png`}
          alt={`dice ${currentDice}`}
        />
      </ImageContainer>

      <p>Click on dice to roll</p>
      <Reset onClick={handleReset}>Reset Score</Reset>
      <Rules onClick={handelShowRules}>Show Rules</Rules>
      {showRules && (
        <ShowRule setShowRules={setShowRules} showRules={showRules} />
      )}
    </DiceContainer>
  );
};

export default RoleDice;

const DiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

const ImageContainer = styled.div`
  height: 250px;
  width: 250px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  img {
    position: absolute;
    top: 0;
    left: 0;
    max-width: 100%;
    max-height: 100%;
  }
`;

const Reset = styled.button`
  border: 1px solid black;
  color: black;
`;

const Rules = styled.button`
  border: 1px solid black;
  background-color: black;
  color: #fff;
  margin-top: 10px;
`;

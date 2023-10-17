import React, { useState } from "react";
import styled from "styled-components";

const TotalScore = ({ selectNumber, setSelectNumber, score, error }) => {
  const numArray = [1, 2, 3, 4, 5, 6];
  return (
    <Top>
      <Total>
        <h1>{score}</h1>
        <p>Total Score</p>
      </Total>
      <div>
        {selectNumber ? <Error></Error> : <Error>{error}</Error>}
        <Numbers>
          {numArray.map((num, i) => (
            <NumberContainer
              key={i}
              selected={num === selectNumber}
              onClick={() => setSelectNumber(num)}
            >
              {num}
            </NumberContainer>
          ))}
        </Numbers>
      </div>
    </Top>
  );
};

export default TotalScore;

const Top = styled.div`
  height: 150px;
  width: 100%;
  /* margin-top: 30px; */
  display: flex;
  justify-content: space-between;
  /* flex-direction: column;   */
`;

const Total = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    line-height: 50px;
    margin: 0;
  }
`;

const Numbers = styled.div`
  display: flex;
  justify-content: space-between;
`;

const NumberContainer = styled.div`
  display: flex;
  width: 52px;
  height: 12px;
  padding: 18px 0px;
  justify-content: center;
  align-items: center;
  border: 1px solid #000;
  background: ${(props) => (props.selected ? "#000" : "#fff")};
  color: ${(props) => (props.selected ? "#fff" : "#000")};
  margin: 0 10px 0 10px;
  cursor: pointer;
  margin-bottom: 50px;

  &:hover {
    background-color: gray;
    color: #fff;
  }
`;

const Error = styled.p`
  margin-left: 22%;
  height: 20px;
  color: red;
`;

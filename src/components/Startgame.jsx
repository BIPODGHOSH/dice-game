import React, { useState } from "react";
import { styled } from "styled-components";

const StartGame = () => {
  const numArray = [1, 2, 3, 4, 5, 6];
  const [selectNumber, setSelectNumber] = useState();
  return (
    <Container>
      <Top>
        <Total>
          <h1>0</h1>
          <p>Total Score</p>
        </Total>
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
      </Top>
      <Bottom></Bottom>
    </Container>
  );
};

export default StartGame;

const Container = styled.div`
  height: 100%;
  width: 80%;
  display: flex;
  justify-content: center;
  /* margin: 0 100px 0 100px; */
`;

const Top = styled.div`
  height: 150px;
  width: 100%;
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  /* flex-direction: column;   */
`;

const Bottom = styled.div`
  display: flex;
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

  &:hover {
    background-color: gray;
    color: #fff;
  }
`;

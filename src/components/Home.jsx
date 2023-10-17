import React from "react";
import dices from "../assets/images/dices.png";
import styled from "styled-components";

const Home = ({ toggleGame }) => {
  return (
    <>
      <Container>
        <Left>
          <img src={dices} alt="diceLogo" />
        </Left>

        <Right>
          <Text>
            <h1>DICE GAME</h1>
            <Button onClick={toggleGame}>Play Now</Button>
          </Text>
        </Right>
      </Container>
    </>
  );
};

export default Home;

const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* overflow: hidden; */

  @media (max-width: 767px) {
    flex-direction: column;
    width: 90%;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  /* overflow: hidden; */
  img {
    max-width: 100%;
    max-height: 100%;

    @media (max-width: 767px) {
      width: 70%;
    }
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  h1 {
    font-size: 96px;
    white-space: nowrap;

    @media (max-width: 767px) {
      font-size: 30px;
    }
  }
`;

const Button = styled.button`
  min-width: 220px;
  padding: 10px 18px;
  border-radius: 5px;
  color: #fff;
  background: #000;

  @media (max-width: 767px) {
    min-width: 70px;
    padding: 5px 5px;
    font-size: small;
    margin: 0 auto;
  }
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

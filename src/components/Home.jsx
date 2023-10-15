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
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  image {
    max-width: 50vw;
    max-height: 100%;
  }
`;

const Right = styled.div`
  flex: 1; /* Make Right take up available space equally */
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  h1 {
    font-size: 96px;
    white-space: nowrap;
  }
`;

const Button = styled.button`
  min-width: 220px;
  padding: 10px 18px;
  border-radius: 5px;
  color: #fff;
  background: #000;
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

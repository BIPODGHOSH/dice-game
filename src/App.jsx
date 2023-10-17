import "./App.css";
import Home from "./components/Home";
import styled from "styled-components";
import { useState } from "react";
import Startgame from "./components/Startgame";

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGame = () => {
    setIsGameStarted(!isGameStarted);
  };
  // console.log(isGameStarted);
  return (
    <>
      <FullPage>
        <Container>
          {isGameStarted ? <Startgame /> : <Home toggleGame={toggleGame} />}
        </Container>
      </FullPage>
    </>
  );
}

export default App;

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  user-select: none;
  margin: 0 auto;
`;
const FullPage = styled.div`
  height: 100vh;
  padding: 0px;
  margin: 0px;
  width: 100vw;
  max-height: 100vh;

  @media (max-width: 767px) {
    overflow: hidden;
    justify-content: flex-start;
  }
`;

import styled from "styled-components";
import Stage from "./Stage";
import bgImage from '../img/bg.png';

export default function Tetris() {
  return (
    <StageContainer>
      <Stage />
    </StageContainer>
  )
}

const StageContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  background: url(${bgImage}) #000;
  background-size: cover;
  overflow: hidden;
`
import { useEffect } from "react";
import styled from "styled-components"
import Cell from "./Cell"

export default function Stage() {
  const STAGE_WIDTH = 12;
  const STAGE_HEIGHT = 20;

  const stageCells = Array.from(Array(STAGE_HEIGHT), () =>
    new Array(STAGE_WIDTH).fill([0, 1])
  )

  stageCells[0][0].color = "blue";
  console.log(stageCells);

  return (
    <StageGrid>
      {stageCells.map(cells => cells.map((cell, key) =>
        <Cell key={key} color={cell.color} />
      ))}
    </StageGrid>
  )
}

const StageGrid = styled.div`
  margin-top: 20vh;
  display: grid;
  grid-template-rows: repeat(20, 30px);
  grid-template-columns: repeat(12, 30px);
  grid-gap: 1px;
  border: 2px;
`
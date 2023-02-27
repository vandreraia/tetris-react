import styled from "styled-components"

export default function Cell({color}) {
  return (
    <StyledCell color={color}/>
  )
}

const StyledCell = styled.div`
  background: ${props => props.color};
`
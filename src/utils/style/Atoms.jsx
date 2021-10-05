import { Link } from "react-router-dom"
import colors from "./colors"
import styled, { keyframes } from "styled-components"

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const Loader = styled.div`
    padding: 30px;
    border: 6px solid ${colors.fontColorDark};
    border-bottom-color: transparent;
    border-radius: 100px;
    animation: ${rotate} 1s infinite linear;
    height: 0;
    width: 0;
`

export const StyledLink = styled(Link)`
    padding: 10px 15px;
    color: ${colors.fontColorLight};
    text-decoration: none;
    font-size: 24px;
    font-weight:500;
    text-align: center;
`

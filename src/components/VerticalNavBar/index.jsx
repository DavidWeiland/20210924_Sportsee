import { Link } from "react-router-dom"
import styled from 'styled-components'
import Yoga from '../../assets/Icons/yoga-icon.svg'
import Swim from '../../assets/Icons/swim-icon.svg'
import Bike from '../../assets/Icons/bike-icon.svg'
import Force from '../../assets/Icons/force-icon.svg'
import colors from "../../utils/style/colors.js"

const Icon = styled.img`
  width:100%;
`

const NavContainer = styled.nav`
  width: 8%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${colors.navBackground};
  position:relative;
`

const StyledLinkIcon = styled.div`
  width:60%;
  height:35vh;
  background-color:transparent;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
`

const CopyRight = styled.span`
width:8.5rem;
background-color:transparent;
font-weight: 500;
font-size: 0.6rem;
line-height: 2vh;
color: ${colors.fontColorLight};
transform: rotate(-90deg);
position:absolute;
bottom:10vh;
`

function VerticalNavBar() {
  return (
    <NavContainer>
      <StyledLinkIcon>
        <Link to="/">
          <Icon src={Yoga} alt="yoga-icon"/>
        </Link>
        <Link to="/">
          <Icon src={Swim} alt="swim-icon"/>
        </Link>
        <Link to="/">
          <Icon src={Bike} alt="bike-icon"/>
        </Link>
        <Link to="/">
          <Icon src={Force} alt="force-icon"/>
        </Link>
      </StyledLinkIcon>
      <CopyRight>
        Copyright, SportSee 2020
      </CopyRight>
    </NavContainer>
  )
}

export default VerticalNavBar
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
  height: 933px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${colors.navBackground};
  position:relative;
`

const StyledLinkIcon = styled.div`
  width:64px;
  height:316px;
  background-color:transparent;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
`

const CopyRight = styled.span`
width:150px;
background-color:transparent;
font-weight: 500;
font-size: 12px;
line-height: 24px;
color: ${colors.fontColorLight};
transform: rotate(-90deg);
position:absolute;
bottom:109px;
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
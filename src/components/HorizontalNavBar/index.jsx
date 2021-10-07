import { Link } from "react-router-dom"
import styled from 'styled-components'
import { StyledLink } from "../../utils/style/Atoms.jsx"
import Logo from '../../assets/images/logo.png'
import colors from "../../utils/style/colors.js"

const HomeLogo = styled.img`
  height:8vh;
`

const NavContainer = styled.nav`
  width : 100%;
  height:10vh;
  padding: 2%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.navBackground};
`

function HorizontalNavBar() {
  return (
    <NavContainer>
      <Link to="/">
        <HomeLogo src={Logo} alt="logo SportSee"/>
      </Link>
      <StyledLink to="/">
        Accueil
      </StyledLink>
      <StyledLink to="/">
        Profil
      </StyledLink>
      <StyledLink to="/">
        Réglage
      </StyledLink>
      <StyledLink to="/">
        Communauté
      </StyledLink>
    </NavContainer>
  )
}

export default HorizontalNavBar
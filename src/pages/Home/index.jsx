import styled from 'styled-components'
import colors from '../../utils/style/colors'
import UserIcon from '../../assets/Icons/user-circle.svg'
import { StyledLink } from '../../utils/style/Atoms'

const Container = styled.div`
  width: 90%;
  height: 90vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
const LinkWrapper = styled.div`
  margin:auto;
  width:80%;
  display:flex;
  flex-direction: column;
  align-items:center;
  padding:20px;
`
const Icon = styled.img`
  width:80%;
`
const Title = styled.h1`
  font-weight: 700;
  font-size: 3rem;
  line-height: 2vh;
  color: ${colors.fontColorDark};
  opacity:0.7;
`

function Home() {
  return (
    <Container>
        <StyledLink to="/dashboard/12">
          <LinkWrapper>
            <Icon src={UserIcon} alt="force-icon" />
            <Title>
              {`Karl Dovineau`}
            </Title>
          </LinkWrapper>
        </StyledLink>
        <StyledLink to="/dashboard/18">
          <LinkWrapper>
            <Icon src={UserIcon} alt="force-icon" />
            <Title>
              {`Cécilia Ratorez`}
            </Title>
          </LinkWrapper>
        </StyledLink>
    </Container>
  )
}
export default Home

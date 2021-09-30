import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { useFetch } from '../../utils/hooks'

const HomeStyle = styled.div`
background-color:blue;
width:100%;
height:933px;
padding:68px;
padding-left:109px;
position:relative;
`

const Title = styled.h1`
font-size:48px;
line-height: 24px;
`

const TitleFirstname = styled.span`
font-size:48px;
color: ${colors.fontColorRed};
line-height: 24px;
`

const SubTitle = styled.h2`
font-size:18px;
line-height: 24px;
`
const Components = styled.div`
background-color:yellow;
width:85%;
height:611px;
display:flex;
justify-content: space-between;
position:absolute;
bottom:68px;
`

const ComponentsLeft = styled.div`
width:835px;
height:611px;
background-color:#FBFBFB;
display:flex;
flex-direction:column;
justify-content:space-between;
`
const ComponentsTop = styled.div`
width:100%;
height:320px;
background-color:#FBFBFB;
`
const ComponentsBottom = styled.div`
width:100%;
height:263px;
display:flex;
justify-content:space-between;
background-color:#FBFBFB;
`

const ComponentsRight = styled.div`
width:258px;
height:611px;
display:flex;
flex-direction:column;
justify-content:space-between;
background-color:#FBFBFB;
`
const RechartBar = styled.div`
width:100%;
height:100%;
radius:5px;
background-color:red;
`
const Recharts = styled.div`
width:258px;
height:263px;
radius:5px;
background-color:red;
`
const Card = styled.div`
width:258px;
height:124px;
radius:5px;
background-color:green;
`

function Home() {
  const { info, error } = useFetch(`http://localhost:5000/user/12`)
  //const firstName = info.data.userInfos.firstName
  const firstName = "Moi"

  if (error) {
    return (
    <HomeStyle>
      <Title>
        Erreur
      </Title>
    </HomeStyle>
  )
  }

  return (
    <HomeStyle>
      <Title>
        Bonjour <TitleFirstname>{firstName}</TitleFirstname>
      </Title>
      <SubTitle>
        Félicitation ! Vous avez explosé vos objectifs hier
      </SubTitle>
      <Components>
        <ComponentsLeft>
          <ComponentsTop>
            <RechartBar></RechartBar>
          </ComponentsTop>
          <ComponentsBottom>
          <Recharts></Recharts>
          <Recharts></Recharts>
          <Recharts></Recharts>
          </ComponentsBottom>
        </ComponentsLeft>
        <ComponentsRight>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </ComponentsRight>
      </Components>
    </HomeStyle>
  )
}
export default Home

//after subtitle : <Component1 with four components row/> and <Component2 with four components column/>
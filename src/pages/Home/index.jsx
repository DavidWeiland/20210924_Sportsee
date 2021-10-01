import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { useFetch } from '../../utils/hooks'
import Card from '../../components/Card'
//import {MAINDATA} from '../../data/MainDataMock.js'
//import {ACTIVITY} from '../../data/ActivityMock.js'
//import {AVERAGESESSIONS} from '../../data/AverageSessionsMock.js'
//import {PERFORMANCE} from '../../data/PerformanceMock.js'

const HomeStyle = styled.div`
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
`
const ComponentsBottom = styled.div`
width:100%;
height:263px;
display:flex;
justify-content:space-between;
`

const ComponentsRight = styled.div`
width:258px;
height:611px;
display:flex;
flex-direction:column;
justify-content:space-between;
`
const RechartBar = styled.div`
width:100%;
height:100%;
radius:5px;
background-color:#F6F6F6;
`
const Recharts = styled.div`
width:258px;
height:263px;
radius:5px;
background-color:#F6F6F6;
`


function Home() {
  const { data, error } = useFetch(`http://localhost:5000/user/18`)
  
  const userInfos = data.data.userInfos
  const keyData = data.data.keyData
  
  let cle = []
  for (let key in keyData) {
    cle.push(key)
    cle.push(keyData[key])
  }

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
        Bonjour <TitleFirstname>{userInfos.firstName}</TitleFirstname>
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
      <Card index={cle[0]}
        value={cle[1]} />
      <Card index={cle[2]}
        value={cle[3]} />
      <Card index={cle[4]}
        value={cle[5]} />
      <Card index={cle[6]}
        value={cle[7]}/>
        </ComponentsRight>
      </Components>
    </HomeStyle>
  )
}
export default Home

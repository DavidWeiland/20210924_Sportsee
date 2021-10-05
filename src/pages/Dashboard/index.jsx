import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { Loader } from '../../utils/style/Atoms'
import { useFetch } from '../../utils/hooks'
import Card from '../../components/Card'
import Error from '../../components/Error'
import LineChartComponent from '../../components/LineChartComponent'
import RadarChartComponent from '../../components/RadarChartComponent'
import RadialBarChartComponent from '../../components/RadialBarChartComponent'
import { useParams } from 'react-router'

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

const TitleFirstName = styled.span`
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
const BarChart = styled.div`
width:100%;
height:100%;
radius:5px;
background-color:${colors.cardBackground};
display:flex;
justify-content:center;
align-items:center;
`
// start temp =====
const LineChart = styled.div`
width:258px;
height:263px;
radius:5px;
background-color:red;
display:flex;
justify-content:center;
align-items:center;
`

const RadarChart = styled.div`
width:258px;
height:263px;
radius:5px;
background-color:${colors.cardBackground};
display:flex;
justify-content:center;
align-items:center;
`
const RadialBarChart = styled.div`
width:258px;
height:263px;
radius:5px;
background-color:${colors.cardBackground};
display:flex;
justify-content:center;
align-items:center;
`
// ===== end temp

function Dashboard() {
  const { userId } = useParams()
  const { data, error, isLoading } = useFetch(`http://localhost:5000/user/${userId}`)

  const userInfos = data.userInfos
  const keyData = data.keyData

  let cle = []
  for (let key in keyData) {
    cle.push(key)
    cle.push(keyData[key])
  }

  if (error) {
    return (
      <Error/>
    )
  }

  if (isLoading) {
    return (
      <HomeStyle>
        <Loader />
      </HomeStyle>
    )
  }

return (
  <HomeStyle>
      <Title>
        Bonjour <TitleFirstName>{userInfos.firstName}</TitleFirstName>
      </Title>
      <SubTitle>
      {(data.todayScore >= 0.2) ? "Félicitation ! Vous avez explosé vos objectifs hier 👏" : ""}
      </SubTitle>
      <Components>
        <ComponentsLeft>
          <ComponentsTop>
            <BarChart>BarChart ici</BarChart>
          </ComponentsTop>
          <ComponentsBottom>
            <LineChart><LineChartComponent userId={userId}/></LineChart>
            <RadarChart><RadarChartComponent userId={userId}/></RadarChart>
            <RadialBarChart><RadialBarChartComponent userId={userId}/></RadialBarChart>
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
export default Dashboard

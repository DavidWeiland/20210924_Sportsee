import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { Loader } from '../../utils/style/Atoms'
import { useFetch } from '../../utils/hooks'
import Card from '../../components/Card'
import Error from '../Error'
import BarChartComponent from '../../components/BarChart'
import LineChartComponent from '../../components/LineChartComponent'
import RadarChartComponent from '../../components/RadarChartComponent'
import RadialBarChartComponent from '../../components/RadialBarChartComponent'
import { useParams } from 'react-router'

const HomeStyle = styled.div`
  width:90%;
  height:90vh;
  padding-top:1%;
  padding-left:2%;
  position:relative;
`

const Title = styled.h1`
  font-size:2rem;
  line-height: 2vh;
  color:${colors.fontColorDark}
`

const TitleFirstName = styled.span`
  font-size:2rem;
  color: ${colors.fontColorRed};
  line-height: 2vh;
`

const SubTitle = styled.h2`
  font-size:1rem;
  line-height: 2vh;
  color:${colors.fontColorDark}
`

const Components = styled.div`
  width:95%;
  height:65vh;
  display:flex;
  justify-content: space-between;
  position:absolute;
  bottom:7vh;
`

const ComponentsLeft = styled.div`
  width:77%;
  height:100%;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
`
const ComponentsRight = styled.div`
  width:22%;
  height:100%;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
`

const ComponentsTop = styled.div`
  width:100%;
  height:32vh;
`

const ComponentsBottom = styled.div`
  width:100%;
  height:32vh;
  display:flex;
  justify-content:space-between;
`


const BarChart = styled.div`
  width:100%;
  height:100%;
  radius:0.2rem;
  background-color:${colors.cardBackground};
  display:flex;
  justify-content:center;
  align-items:center;
`

const LineChart = styled.div`
  margin:0;
  width:32.5%;
  height:100%;
  radius:0.2rem;
  background-color:${colors.fontColorRed};
  display:flex;
  justify-content:center;
  align-items:center;
`

const RadarChart = styled.div`
  margin:0;
  width:32.5%;
  height:100%;
  radius:0.2rem;
  background-color:${colors.fontColorDark};
  display:flex;
  justify-content:center;
  align-items:center;
`

const RadialBarChart = styled.div`
  margin:0;
  width:32.5%;
  height:100%;
  radius:0.2rem;
  background-color:${colors.cardBackground};
  display:flex;
  justify-content:center;
  align-items:center;
`

/**
 * Represents a Dashboard in Page. Using function.
 * @return { ReactElement }
 */
function Dashboard() {
  
  /**
   * Fetch data
   * @param { Integer } userId recovered from the path
   * @param { string } url
   * @return {( Object(data), Boolean(error), Boolean(isLoading) )}
   */
  const { userId } = useParams()
  const { data, error, isLoading } = useFetch(`http://localhost:5000/user/${userId}`)

  const userInfos = data.userInfos
  const keyData = data.keyData

  let cle = []
  for (let key in keyData) {
    cle.push(key)
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
        {`Bonjour `}<TitleFirstName>{userInfos.firstName}</TitleFirstName>
      </Title>
      <SubTitle>
      {(data.todayScore >= 0.2) ? `Félicitation ! Vous avez explosé vos objectifs hier 👏` : null }
      </SubTitle>
    
      <Components>
        <ComponentsLeft>
        
          <ComponentsTop>
          <BarChart>
            <BarChartComponent
              userId={userId}
            />
          </BarChart>
          </ComponentsTop>
          
          <ComponentsBottom>
          <LineChart>
            <LineChartComponent
              userId={userId}
            />
          </LineChart>
          <RadarChart>
            <RadarChartComponent
              userId={userId}
            />
          </RadarChart>
          <RadialBarChart>
            <RadialBarChartComponent
              score={data.todayScore}
            />
          </RadialBarChart>
          </ComponentsBottom>
        </ComponentsLeft>
      
        <ComponentsRight>
          <Card
            index={cle[0]}
            value={keyData[cle[0]]}
          />
          <Card
            index={cle[1]}
            value={keyData[cle[1]]}
          />
          <Card
            index={cle[2]}
            value={keyData[cle[2]]}
          />
          <Card
            index={cle[3]}
            value={keyData[cle[3]]}
          />
        </ComponentsRight>
      </Components>
    </HomeStyle>
  )
}
export default Dashboard

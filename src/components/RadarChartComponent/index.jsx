import { RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { useFetch } from '../../utils/hooks';
import { Loader } from '../../utils/style/Atoms';
import colors from '../../utils/style/colors';



function RadarChartComponent({userId}) {
  const { data, error, isLoading } = useFetch(`http://localhost:5000/user/${userId}/performance`)
  const RadarData = data.data
  
  const CustomizedAxisTick = ({ x, y, payload }) => {
    let text, textAnchor, textX, textY= ''
    switch (payload.value) {
      case 1:
        text = data.kind[1]
        textAnchor = 'middle'
        textX = x
        textY = y-6
        break
      case 2:
        text = data.kind[2]
        textAnchor = 'start'
        textX = x - 12
        textY = y -15
        break
      case 3:
        text = data.kind[3]
        textAnchor = 'middle'
        textX = x +3
        textY = y+5
        break
      case 4:
        text = data.kind[4]
        textAnchor = 'middle'
        textX = x
        textY = y-5
        break
      case 5:
        text = data.kind[5]
        textAnchor = 'end'
        textX = x + 11
        textY = y+5
        break
      case 6:
        text = data.kind[6]
        textAnchor = 'end'
        textX = x + 12
        textY = y -15
        break
      default:
        text = ''
    }
    return (
        <text orientation="bottom" width={140} height={20} type="category" x={textX} y={textY} stroke="none" fill={`${colors.fontColorLight}`} className="recharts-text recharts-cartesian-axis-tick-value" textAnchor={textAnchor}>
          <tspan x={textX} dy="0.71em" fontSize={12}>{text}</tspan>
        </text>
    )
  }
  
  if (error) {
    return (
      <Loader/>
    )
  }

  if (isLoading) {
    return (
      <Loader/>
    )
  }

  return (
    <ResponsiveContainer width="90%" height="100%" padding={10}>
      <RadarChart width="100%" height="100%" data={RadarData} padding={0}>
        <PolarGrid />
        <PolarAngleAxis dataKey="kind" tick={CustomizedAxisTick} tickLine={ false}/>
        <PolarRadiusAxis tick={false} axisLine={false} domain={[0,'auto']}/>
              <Radar dataKey="value" stroke={`${colors.fontColorRed}`} fill={`${colors.fontColorRed}`} fillOpacity={0.6} />
          </RadarChart>
      </ResponsiveContainer>
  );
}

export default RadarChartComponent
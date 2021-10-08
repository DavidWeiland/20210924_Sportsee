import PropTypes from 'prop-types'
import { RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { useFetch } from '../../utils/hooks';
import { Loader } from '../../utils/style/Atoms';
import colors from '../../utils/style/colors';

/** 
 * Represents a RadarChart in ReactComponent. Using function.
 * @param { Integer } userId
 * @return { ReactElement }
 */
function RadarChartComponent({ userId }) {
  
  /**
   * Fetch data
   * @param { String } userId recovered from props
   * @param { String } url with userId
   * @param { Function(url) } useFetch
   * @return {( Object(data), Boolean(error), Boolean(isLoading) )}
   */
  const { data, error, isLoading } = useFetch(`http://localhost:5000/user/${userId}/performance`)
  const RadarData = data.data
  
  if (error) {
    return (
      <div width="100%" height="100%" style={{ textAlign:"center", color: `${colors.fontColorLight}` }}>
        <h1 style={{fontSize: "3rem" }}>{`404`}</h1>
        <span style={{ fontSize: "1rem" }}>{`La ressource demandée n'existe pas`}</span>
      </div>
    )
  }

  if (isLoading) {
    return (
      <Loader/>
    )
  }

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
      <text orientation="bottom" type="category" x={textX} y={textY} stroke="none" fill={`${colors.fontColorLight}`} textAnchor={textAnchor}>
        <tspan x={textX} dy="0.71em" fontSize="0.7rem">
          {text}
        </tspan>
      </text>
    )
  }
  
  return (
    <ResponsiveContainer
      width="100%"
      height="100%"
      padding={10}
    >
      <RadarChart
        width="100%"
        height="100%"
        data={RadarData}
        padding={0}
      >
        <PolarGrid />
        <PolarAngleAxis
          dataKey="kind"
          tick={CustomizedAxisTick}
          tickLine={false}
        />
        <PolarRadiusAxis
          tick={false}
          axisLine={false}
          domain={[0, 'auto']}
        />
        <Radar
          dataKey="value"
          stroke={`${colors.fontColorRed}`}
          fill={`${colors.fontColorRed}`}
          fillOpacity={0.6}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
}

RadarChartComponent.propTypes = {
  userId: PropTypes.string.isRequired
}

RadarChartComponent.defaultProps = {
  userId: ''
}

export default RadarChartComponent
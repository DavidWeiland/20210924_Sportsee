import PropTypes from'prop-types'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useFetch } from '../../utils/hooks';
import { Loader } from '../../utils/style/Atoms';
import colors from '../../utils/style/colors';

/**
 * Represents a LineChart in ReactComponent. Using function.
 * @param { Integer } userId
 * @return { ReactElement }
 */
function LineChartComponent({ userId }) {
  
  /**
   * Fetch data
   * @param { Integer } userId recovered from props
   * @param { String } url with userId
   * @param { Function(url) } useFetch
   * @return {( Object(data), Boolean(error), Boolean(isLoading) )}
   */
  const { data, error, isLoading } = useFetch(`http://localhost:5000/user/${userId}/average-sessions`)
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
      <Loader />
    )
  }

  /**
   * add a first key/value pair to start the graph outside the box
   * add a last key/value pair to finish the graph outside the box
   */
  data.sessions.splice(0, 0, { day: 0, sessionLength: data.sessions[0].sessionLength })
  data.sessions.push({ day: 0, sessionLength: data.sessions[data.sessions.length-1].sessionLength })
  
  const CustomizedAxisTick = ({ x, y, payload }) => {
    let text = ''
    switch (payload.value) {
      case 1:
        text = 'L'
        break
      case 2 :
      case 3:
        text = 'M'
        break
      case 4:
        text = 'J'
        break
      case 5:
        text = 'V'
        break
      case 6:
        text = 'S'
        break
      case 7:
        text = 'D'
        break
      default:
        text = ''
    }
    return (
      <text orientation="bottom" width={240} height={30} type="category" x={x} y={y} stroke="none" fill={`${colors.fontColorLight}`} opacity={0.6} textAnchor="middle">
        <tspan x={x} dy="0.71em">
          {text}
        </tspan>
      </text>
    )
  }

  const CustomizedToolTip = ({ active, payload }) => {
    if (active) {
      return (
        <div>
          <span>
            {`${payload[0].value} ${payload[0].unit}`}
          </span>
        </div>
      )
    }
    return null
  }

  const CustomizedLegend = () => {
    return (
      <div>
        <span>
          {`Durée moyenne des sessions`}
        </span>
      </div>
    )
  }
  
  return (
    <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width="100%"
          height="100%"
          data={data.sessions}
        >
        <defs>
          <linearGradient
            id="colorLine"
            x1="0" y1="0"
            x2="1" y2="0"
          >
            <stop
              offset="5%"
              stopColor={`${colors.fontColorLight}`}
              stopOpacity={0.4}
            />
            <stop
              offset="95%"
              stopColor={`${colors.fontColorLight}`}
              stopOpacity={1}
            />
          </linearGradient>
        </defs>
        <CartesianGrid
          horizontal={false}
          vertical={false} />
        <XAxis
          dataKey="day"
          tick={CustomizedAxisTick}
          padding={{ left: -45, right: -45 }}
          axisLine={false}
          tickLine={false}
          name='Durée moyenne des sessions' />
        <YAxis
          hide="true"
        />
        <Tooltip
          wrapperStyle={{ backgroundColor: `${colors.background}`, padding: 8, fontSize: 8 }}
          content={CustomizedToolTip}
          cursor={{ stroke: "rgba(0, 0, 0, 0.1)", strokeWidth: 50, strokeHeight: "200%" }}
        />
        <Legend
          align='left'
          verticalAlign='top'
          iconSize={0}
          wrapperStyle={{ marginTop: "1em", marginLeft: "1.2em", width: '60%', opacity: 0.6, color: `${colors.fontColorLight}`, fontSize: 15 }}
          content={CustomizedLegend}
        />
        <Line
          type="monotone"
          dot={false}
          activeDot={{ stroke: `${colors.fontColorLight}`, strokeWidth: 10, strokeOpacity: 0.2, fill: `${colors.fontColorLight}`, r: 4 }}
          dataKey="sessionLength"
          stroke="url(#colorLine)"
          strokeWidth={2} unit="min"
        />
        </LineChart>
      </ResponsiveContainer>
    );
}

LineChartComponent.propTypes = {
  userId: PropTypes.string.isRequired
}

LineChartComponent.defaultProps = {
  userId: ''
}

export default LineChartComponent
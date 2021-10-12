import PropTypes from 'prop-types'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useFetch } from '../../utils/hooks';
import { Loader } from '../../utils/style/Atoms';
import colors from '../../utils/style/colors';


/** 
 * Represents a BarChart in ReactComponent. Using function.
 * @param { String } userId recovered from props
 * @param { Function(url) } useFetch import from hook
 * 
 * @returns { ReactElement }
 */
function BarChartComponent({ userId }) {
  
  const url = `${userId}/activity`
  /**
   * Fetch data
   * @function useFetch
   * @param { String } url
   * 
   * @returns { Object } data
   * @returns { Boolean } error
   * @returns { Boolean } isLoading
   */
  const { data, error, isLoading } = useFetch(url)
  
  if (error) {
    return (
      <div width="100%" height="100%" style={{ textAlign:"center", color: `${colors.fontColorDark}` }}>
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
   * New render of Ticks
   * @param { Number } x horizontal position of tick
   * @param { Number } y vertical position of tick
   * @param { Object } payload informations of tick
   * 
   * @returns {ReactElement}
   */
  const CustomizedAxisTick = ({ x, y, payload }) => {
    return (
      <text orientation="bottom" type="category" x={x} y={y+10} stroke="none" fill={`${colors.fontColorDark}`} opacity={0.7} textAnchor="middle">
        <tspan x={x} dy="0.71em" fontSize="1em">
          {payload.index + 1}
        </tspan>
      </text>
    )
  }
  
  /**
   * New render of Tooltip
   * @param { Boolean } active if tooltip is displayed
   * @param { Object } payload informations of tooltip
   * 
   * @returns {ReactElement}
   */
  const CustomizedToolTip = ({ active, payload }) => {
    if (active) {
      return (
        <div style={{ width: "2rem", height: "2.5rem", display: 'flex', flexDirection:'column', justifyContent:"space-around", alignItems:'center', color:`${colors.fontColorLight}`}}>
          <span>
            {`${payload[0].value} ${payload[0].unit}`}
          </span> <br />
          <span>
            {`${payload[1].value} ${payload[1].unit}`}
          </span>
        </div>
      )
    }
    return null
  }
  
  /**
   * New render of Legend
   * @param { Object } payload informations of Legend
   * 
   * @returns {ReactElement}
   */
  const CustomizedLegend = ({ payload }) => {
    return (
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <span style={{ marginLeft: 10, fontWeight: 700 }}>
          {`Activité quotidienne`}
        </span>
        <span>
          <svg viewBox="0 0 512 512" width="0.5rem">
            <path fill="black" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
          </svg>
          <span style={{ opacity: 0.6, marginLeft: 10, marginRight: 20 }}>
            {`${payload[0].value}`}
          </span>
          <svg viewBox="0 0 512 512" width="0.5rem">
            <path fill="red" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
          </svg>
          <span style={{ opacity: 0.6, marginLeft: 10, marginRight: 20 }}>
            {`${payload[1].value}`}
          </span>
        </span>
      </div>
    )
  }

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width="100%"
        height="100%"
        data={data.sessions}
        margin={{ top: 35, left: 15, bottom: 15, right: 15 }}
      >
        <CartesianGrid
          horizontal={true}
          vertical={false}
          strokeDasharray='3 3'
        />
        <XAxis
          dataKey="day"
          tick={CustomizedAxisTick}
          axisLine={true}
          tickLine={false}
        />
        <YAxis
          yAxisId="barYAxisKg"
          dataKey="kilogram"
          hide={false}
          orientation='right'
          tickCount={3}
          domain={['dataMin-5', 'dataMax+2']}
          axisLine={false}
          tickLine={false}
          tickSize={20}
          fill={`${colors.fontColorDark}`}
        />
        <YAxis
          yAxisId="barYAxisCal"
          dataKey="calories"
          tickCount={3}
          domain={[0, 'dataMax']}
          hide={true}
        />
        <Tooltip
          wrapperStyle={{ backgroundColor: `${colors.fontColorRed}`, padding: 8, fontSize: "0.5rem" }}
          content={CustomizedToolTip}
          cursor={{ stroke: "rgba(0, 0, 0, 0.1)", strokeHeight: "200%" }}
        />
        <Legend
          align='center'
          verticalAlign='top'
          iconSize={0}
          content={CustomizedLegend}
          wrapperStyle={{ marginTop: -15, width: '95%', opacity: 1, color: `${colors.fontColorDark}`, fontSize: "O.7rem" }}
        />
        <Bar
          dataKey="kilogram"
          yAxisId="barYAxisKg"
          fill={`${colors.fontColorDark}`}
          barSize={7}
          unit="kg"
          legendType='circle'
          name="Poids (kg)"
          radius={[10, 10, 0, 0]}
        />
        <Bar
          dataKey="calories"
          yAxisId="barYAxisCal"
          fill={`${colors.fontColorRed}`}
          barSize={7}
          unit="kCal"
          legendType='circle'
          name="Calories brûlées (kCal)"
          radius={[10, 10, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}

BarChartComponent.propTypes = {
  userId: PropTypes.string.isRequired
}

BarChartComponent.defaultProps = {
  userId: ''
}

export default BarChartComponent
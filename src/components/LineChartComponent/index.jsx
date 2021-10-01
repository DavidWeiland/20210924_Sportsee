
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useFetch } from '../../utils/hooks';
import Error from '../Error'
import { Loader } from '../../utils/style/Atoms';

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
      <text orientation="bottom" width="240" height="30" type="category" x={x} y={y} stroke="none" fill="#FFFFFF" class="recharts-text recharts-cartesian-axis-tick-value" textAnchor="middle">
        <tspan x={x} dy="0.71em">{text}</tspan>
      </text>
  )
}

const CustomizedToolTip = ({ active, payload, label }) => {
  //console.log(active, payload, label)
  if (active) {
    return (
      <div
        padding = "0.8rem"
        backgroundColor = "white"
        borderRadius = {8}
        boxShadow="3px 3px 3px rgba(0, 0, 0, 0.3)">
          <span>{`${payload[0].value} min`}</span>
      </div>
    )
  }
  return null
}

function LineChartComponent() {

  const { data, error, isLoading } = useFetch(`http://localhost:5000/user/18/average-sessions`)
  
  if (error) {
    return (
      <Error/>
    )
  }

  if (isLoading) {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <Loader />
      </ResponsiveContainer>
    )
  }

  return (
    <ResponsiveContainer width="97%" height="97%" margin="1%" background="red">
        <LineChart
          width="100%"
          height="100%"
          data={data.sessions}
        
      >
        <CartesianGrid horizontal={false} vertical={false}/>
        <XAxis dataKey="day" tick={CustomizedAxisTick} />
        <YAxis hide="true"/>
        <Tooltip content={<CustomizedToolTip />} />
        <Legend align='left' verticalAlign='top' iconSize={0} />
        <Line type="monotone" dot={false} activeDot={{ filter: "blur(1px)",  stroke:"white", r:6}} dataKey="sessionLength" stroke="white" fill="transparent" strokeWidth={2} unit="min"/>
        </LineChart>
      </ResponsiveContainer>
    );
}

export default LineChartComponent
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';
import colors from '../../utils/style/colors';

function RadialBarChartComponent({ data }) {
  const datas = [
    {
      "todayScore": 1,
      "fill":"none"
    },
    {
      "todayScore": data.todayScore,
    }
  ]
  
  const CustomizedLegend = () => {
    return (
      <div>
        <div>
            <span>Score</span>
        </div>
        <div style={{ textAlign:"center", width:"30%", position:'absolute', top:65, left:55 }}>
          <span style={{fontSize:26, fontWeight:700 }}>{data.todayScore * 100}%</span><br/>
          <span style={{fontSize:16, fontWeight:500, opacity:0.5 }}>de votre objectif</span>
        </div>
      </div>
    )
  }

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadialBarChart width="100%" height="100%" innerRadius="45%" outerRadius="70%" data={datas} startAngle={225} endAngle={-134}>
        <RadialBar background={false} dataKey="todayScore" fill={`${colors.fontColorRed}`}/>
        <Legend align='left' verticalAlign='top' iconSize={0} wrapperStyle={{ marginTop: 24, marginLeft: 30, width: '100%', color: `${colors.fontColorDark}`, fontSize: 15, backgroundColor:"transparent" }} content={CustomizedLegend} />
      </RadialBarChart>
    </ResponsiveContainer>
  );
}

export default RadialBarChartComponent
import PropTypes from 'prop-types'
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';
import colors from '../../utils/style/colors';

/** 
 * Represents a RadialBarChart in ReactComponent. Using function.
 * @param { Number {0-1}} score
 * @return { ReactElement }
 */
function RadialBarChartComponent({ score }) {

  if (!score) {
    return (
      <div width="100%" height="100%" style={{ textAlign:"center", color: `${colors.fontColorDark}` }}>
        <h1 style={{fontSize: "3rem" }}>{`404`}</h1>
        <span style={{ fontSize: "1rem" }}>{`La ressource demandée n'existe pas`}</span>
      </div>
    )
  }
  
  /**
   * datas[0] represents base 1
   * without base, score is the only reference. ex : 0.3/0.3 (id18) 0.12/0.12(id12) or 100/100
   * with base on 1, score become a reference on 1. ex : 0.12/1 (id12) or 12/100
   */
  const datas = [
    {
      "todayScore": 1,
      "fill":"none"
    },
    {
      "todayScore": score,
    }
  ]
  
  const CustomizedLegend = () => {
    return (
      <div>
        <div>
          <span>
            {`Score`}
          </span>
        </div>
        <div style={{ textAlign: "center", width: "30%", position: 'absolute', top: "9vh", left: "20%" }}>
          <span style={{ fontSize: "1.2rem", fontWeight: 700 }}>
            {score * 100}%
          </span> <br />
          <span style={{ fontSize: "0.9rem", fontWeight: 500, opacity: 0.5 }}>
            {`de votre objectif`}
          </span>
        </div>
      </div>
    )
  }

  return (
    <ResponsiveContainer
      width="100%"
      height="100%"
    >
      <RadialBarChart
        width="100%"
        height="100%"
        innerRadius="45%"
        outerRadius="70%"
        data={datas}
        startAngle={225}
        endAngle={225 - 359}
      >
        <RadialBar
          background={false}
          dataKey="todayScore"
          fill={`${colors.fontColorRed}`}
          cornerRadius={10}
        />
        <Legend
          align='left'
          verticalAlign='top'
          iconSize={0}
          wrapperStyle={{ marginTop: 24, marginLeft: 30, width: '100%', color: `${colors.fontColorDark}`, fontSize: 15, backgroundColor: "transparent" }}
          content={CustomizedLegend}
        />
      </RadialBarChart>
    </ResponsiveContainer>
  );
}

RadialBarChartComponent.propTypes = {
  score: PropTypes.number.isRequired
}

RadialBarChartComponent.defaultProps = {
  score: ''
}

export default RadialBarChartComponent
import styled from 'styled-components'
import CaloriesIcon from '../../assets/Icons/calories-icon.svg'
import ProteinIcon from '../../assets/Icons/protein-icon.svg'
import CarbsIcon from '../../assets/Icons/carbs-icon.svg'
import FatIcon from '../../assets/Icons/fat-icon.svg'
import colors from '../../utils/style/colors'


const CardContainer = styled.div`
  width:100%;
  height:12vh;
  radius:5px;
  display:flex;
  justify-content:space-around;
  align-items:center;
  background-color:${colors.cardBackground};
`

const Icon = styled.img`
  width:3rem;
  height:3rem;
`

const Infos = styled.div`
  width:50%;
  height:auto;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:flex-start;

`
const Value = styled.h3`
  font-size:1rem;
  font-weight:700;
  color:${colors.fontColorDark};
  line-height:2.5vh;
  margin:0;
`
const SubTitle = styled.h4`
  font-size:0.7rem;
  font-weight:500;
  color:${colors.fontColorDark};
  opacity:0.5;
  line-height:2.5vh;
  margin:0;
`

/** 
 * Represents a Card in ReactComponent. Using function.
 * @param { String } index recovered from props
 * @param { Number } value recovered from props
 * @return { ReactElement }
 */
function Card({ index, value }) {
  let icon, valUnit, subTitle
  
  (index === "calorieCount") ? (valUnit = "kCal") : (valUnit = "g")
  
  switch (index) {
    case "calorieCount":
      icon = CaloriesIcon
      subTitle = "Calories"
      break
    case "proteinCount":
      icon = ProteinIcon
      subTitle = 'Protéines'
      break
    case "carbohydrateCount":
      icon = CarbsIcon
      subTitle = 'Glucides'
      break
    case "lipidCount":
      icon = FatIcon
      subTitle = 'Lipides'
      break
    default:
  }

  return (
    <CardContainer>
      <Icon src={icon} alt={`${icon}-icon`} />
      <Infos>
        <Value>
          {value}{valUnit}
        </Value>
        <SubTitle>
          {subTitle}
        </SubTitle>
      </Infos>
    </CardContainer>
  )  
}

export default Card
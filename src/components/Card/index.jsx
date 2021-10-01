import styled from 'styled-components'
import CaloriesIcon from '../../assets/Icons/calories-icon.svg'
import ProteinIcon from '../../assets/Icons/protein-icon.svg'
import CarbsIcon from '../../assets/Icons/carbs-icon.svg'
import FatIcon from '../../assets/Icons/fat-icon.svg'


const CardContainer = styled.div`
width:258px;
height:124px;
radius:5px;
display:flex;
justify-content:space-around;
align-items:center;
background-color:#F6F6F6;
`
const Icon = styled.img`
width:60px;
height:60px;
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
font-size:20px;
font-weight:700;
color:#282D30;
line-height:24px;
margin:0;
`
const SubTitle = styled.h4`
font-size:14px;
font-weight:500;
color:grey;
line-height:24px;
margin:0;
`

function Card({ index, value }) {
  let icon =""
  let valUnit=""
  let subTitle=""
  console.log(index)
  switch (index) {
    case "calorieCount":
      icon = CaloriesIcon
      valUnit="kCal"
      subTitle = "Calories"
      break
    case "proteinCount":
      icon=ProteinIcon
      valUnit='g'
      subTitle = 'Protéines'
      break
    case "carbohydrateCount":
      icon=CarbsIcon
      valUnit='g'
      subTitle = 'Glucides'
      break
    case "lipidCount":
      icon=FatIcon
      valUnit='g'
      subTitle = 'Lipides'
      break
    default:
      icon = ''
      valUnit=''
      subTitle = ''
  }
console.log({icon})
  return (
    <CardContainer>
      <Icon src={icon} alt={`${icon}-icon`}></Icon>
          <Infos>
        <Value>{value}{valUnit}</Value>
            <SubTitle>{subTitle}</SubTitle>
          </Infos>
    </CardContainer>
  )  
}

export default Card
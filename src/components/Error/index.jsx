import styled from 'styled-components'

const ErrorContainer = styled.div`
width:100%;
height:933px;
display:flex;
flex-direction:column;
align-items:center;
justify-content: center;
`

const Title = styled.h1`
margin:0;
font-size:300px;
`
const SubTitle = styled.h2`
margin:0;
font-size:40px;
`

function Error() {
  return (
    <ErrorContainer>
      <Title>404</Title>
      <SubTitle>Oups, la page demandée n'existe pas</SubTitle>
    </ErrorContainer>
  )
}

export default Error
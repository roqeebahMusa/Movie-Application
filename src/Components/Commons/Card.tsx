import Data from "../../Pages/MoviesData.json"
import styled from "@emotion/styled"


const CardHold = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
`

const MainCard = styled.div`
    min-width: 200px;
    margin: 10px;
    flex: 1;
`

const CardImage = styled.img`
    height: 300px;
    width: 100%;
`

const Title = styled.div``

const Card = () => {
  return (
    <CardHold>
        {
            Data?.map((props) => (
                <MainCard>
                    <CardImage src={props.poster_url} />
                    <Title>{props?.title}</Title>
                </MainCard>
            ))
        }
    </CardHold>
  )
}

export default Card
import styled from "@emotion/styled"
import pic from "../assets/sli1.jpg";
import { BsFillPlayFill } from "react-icons/bs";
import { IoMdNotifications } from "react-icons/io";

const Container = styled.div``

const MainHero = styled.div`
    min-height: 500px;
    width: 100%;
    background-color: blanchedalmond;
    background-image: url(${pic});
    background-position: center;
    background-size: cover;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
`

const TransParentBackground = styled.div`
    position: absolute;
    background: radical-gradient(
        circle,
        rgba(0,0,0,0.42060574229691) 4%,
        rgba(114, 49, 201, 1) 50%,
        rgba(0, 0, 0, 1) 100%
    );
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
`

const TypeHead = styled.div`
    font-size: 20px;
    margin-top: 100px;
    font-weight: 500;
`

const ContHold = styled.div`
    color: white;
    z-index: 10;
    text-align: center;
`

const Title = styled.div`
    font-size: 60px;
    margin-top: 10px;
    font-weight: bolder;
`

const Button = styled.button<{ bg: string; cl: string}>`
    padding: 10px 15px 10px 15px;
    background-color: ${(props) => props.bgg};
    color: ${(props) => props.cl};
    border: 0;
    outline: none;
    margin-right: 30px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 17px;
    font-weight: bold;
    transition: all 350ms;
    border: 1px solid silver;

    :hover {
        background-color: transparent;
    }
`

const Icon = styled.div`
    margin-right: 10px;
`

const Main = styled.div`
    display: flex;
`

 const PosterImage = styled.div`
    height: 300px;
    width: 350px;
    background-color: #477890;
 `

 const Hold = styled.div`
    display: flex;
    gap: 50px;
   
    justify-content: center;
    margin-top: 100px;
    padding-left: 50px;
    /* align-items: center; */
 `

const Second = styled.div`
    color: white;
`

const H1 = styled.div`
    font-size: 17px;
    font-weight: bold;
`

const Sub = styled.div`
    font-size: 13px;
    margin-bottom: 10px;
`

const P = styled.div`
    font-size: 20px;
    width: 500px;
`

const Detailed = () => {
  return (
    <Container>
        <MainHero>
            <TransParentBackground></TransParentBackground>
        <ContHold>
            <TypeHead>ROVIES</TypeHead>
            <Title>JAGUN JAGUN</Title>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita 
            quasi eveniet harum laudantium illo veniam deserunt mollitia voluptatibus! Laudantium, quia!</p>
            <Button cl="black" bgg="white">
                <Main>
                    <Icon>
                        <IoMdNotifications />
                    </Icon>
                    <span>Subscribe</span>
                </Main>
            </Button>

            <Button cl="black" bgg="white">
                <Main>
                    <Icon>
                        <BsFillPlayFill />
                    </Icon>
                    <span>Watch Trailer</span>
                </Main>
            </Button>
        </ContHold>
        </MainHero>

        <Hold>
            <PosterImage></PosterImage>
            <Second>
                <H1>Title</H1>
                <Sub>JAGUN JAGUN</Sub>
                <br />
                <H1>Plot</H1>
                <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas obcaecati nostrum placeat incidunt quae unde porro. Iusto modi optio dignissimos?</P>
            </Second>
        </Hold>
    </Container>
  )
}

export default Detailed
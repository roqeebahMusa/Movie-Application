import styled from "@emotion/styled"
import { Navigation } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from "swiper/modules";


import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



import bg1 from "../assets/sli1.jpg"
import bg2 from "../assets/sli2.png"
import bg3 from "../assets/sli3.png"
import bg4 from "../assets/sli4.jpg"

const Container = styled(Swiper)`
    min-height: 500px;
    color: white;
    width: 100%;
`

const SwippingSlide = styled(SwiperSlide)<{ bg: string}>`
    height: 640px;
    width: 100%;
    background-image: url(${(props) => props.bg});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
`
const TransParentBackground = styled.div`
    background: linear-gradient(
        90deg,
        rgba(0,0,0,0.964) 31%,
        rgba(26, 26, 25, 0.2049194677871149) 100%,
        rgba(255, 255, 255, 0) 100%
    );

    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    padding-top: 120px;
    padding-left: 50px;
`
const TypeHead = styled.div`
  font-size: 60px;
  margin-top: 40px;
  font-weight: BOLDER;
`
const Title = styled.div`
    font-size: 60px;
    /* margin-bottom: 16px; */
    font-weight: bold;
`
const P = styled.div`
    width: 600px;
    font-size: 17px;
    margin-top: 40px;
`
const Button = styled.button<{ bgg: string; cl: string}>`
    /* padding: 20px 50px 25px 35px; */
    width: 15%;
    height: 12%;
    background-color: ${(props) => props.bgg};
    color: ${(props) => props.cl};
    border: 0;
    outline: 0;
    margin-right: 15px;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 10px;
    font-size: 16px;
`


const Hero = () => {
  return (
    <>
       <Container
       spaceBetween={30}
       centeredSlides={true}
       autoplay={{
        delay: 2500,
        disableOnInteraction: false,
       }}
           navigation={true}
           modules={[Pagination, Navigation, Autoplay]}
           className="mySwiper">

        <SwippingSlide bg={bg1}>
            <TransParentBackground>
                <TypeHead>ROVIES</TypeHead>
                <Title>LATEST 2023 MOVIES</Title>
                <P>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus dolores alias ipsam commodi adipisci debitis nesciunt ab enim illo! Enim.</P>

                <Button bgg="#477890" cl='white'>Get Started</Button>
                <Button bgg="#e1dd8f" cl='white'>Movies</Button>

            </TransParentBackground>
        </SwippingSlide>

        <SwippingSlide bg={bg2}>
            <TransParentBackground>
                <TypeHead>ROVIES</TypeHead>
                <Title>LATEST 2023 MOVIES</Title>
                <P>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus dolores alias ipsam commodi adipisci debitis nesciunt ab enim illo! Enim.</P>

                <Button bgg="#477890" cl='white'>Get Started</Button>
                <Button bgg="#e1dd8f" cl='white'>Movies</Button>

            </TransParentBackground>
        </SwippingSlide>

        <SwippingSlide bg={bg3}>
            <TransParentBackground>
                <TypeHead>ROVIES</TypeHead>
                <Title>LATEST 2023 MOVIES</Title>
                <P>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus dolores alias ipsam commodi adipisci debitis nesciunt ab enim illo! Enim.</P>

                <Button bgg="#477890" cl='white'>Get Started</Button>
                <Button bgg="#e1dd8f" cl='white'>Movies</Button>

            </TransParentBackground>
        </SwippingSlide>

        <SwippingSlide bg={bg4}>
            <TransParentBackground>
                <TypeHead>ROVIES</TypeHead>
                <Title>LATEST 2023 MOVIES</Title>
                <P>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus dolores alias ipsam commodi adipisci debitis nesciunt ab enim illo! Enim.</P>

                <Button bgg="#477890" cl='white'>Get Started</Button>
                <Button bgg="#e1dd8f" cl='white'>Movies</Button>

            </TransParentBackground>
        </SwippingSlide>

    </Container>
    </>
 
  )
}

export default Hero
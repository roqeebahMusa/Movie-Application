import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { BsFillPlayFill } from "react-icons/bs";
import { IoMdNotifications } from "react-icons/io";
import { useParams } from "react-router-dom";
import movieData from "../Pages/MoviesData.json"
import { Rating } from "react-simple-star-rating";
import Modal from "../Components/Modal"

const MainHero = styled.div<{ bgIm: string | undefined }>`
	min-height: 500px;
	width: 100%;

	background-image: url(${(props) => props?.bgIm});
	background-position: center;
	background-size: cover;
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const TransParentBackground = styled.div`
	position: absolute;
	background: radial-gradient(
		circle,
		rgba(0, 0, 0, 0.4206057422969187) 4%,
		rgba(114, 49, 201, 1) 50%,
		rgba(0, 0, 0, 1) 100%
	);
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
`;

const TypeHead = styled.div`
	font-size: 20px;
	margin-top: 100px;
	font-weight: 500;
`;

const ContHold = styled.div`
	color: white;
	z-index: 10;
	text-align: center;
`;
const Title = styled.div`
	font-size: 60px;
	margin-top: 10px;
	font-weight: bolder;
`;

const Button = styled.button<{ bgg: string; cl: string }>`
	padding: 10px 15px 10px 15px;
	background-color: ${(props) => props.bgg};
	color: ${(props) => props.cl};
	border: none;
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
		color: white;
	}
`;
const Icon = styled.div`
	margin-right: 10px;
`;

const Main = styled.div`
	display: flex;
`;

const PosterImage = styled.img`
	height: 400px;
	width: 350px;
	background-color: white;
	object-fit: cover;
`;
const Hold = styled.div`
	display: flex;
	gap: 50px;
	justify-content: center;
	margin-top: 100px;
`;

const Second = styled.div`
	color: white;
`;

const H1 = styled.div`
	font-size: 17px;
	font-weight: bold;
`;

const Sub = styled.div`
	font-size: 13px;
	margin-bottom: 10px;
`;

const P = styled.div`
	font-size: 20px;
	width: 500px;
`;

const Container = styled.div`
	padding-bottom: 100px;
`;

const Detailed = () => {
	const { id } = useParams();

	const DetailedData = movieData.find((el) => el.id === Number(id));
	console.log(DetailedData);

	const [show, setShow] = useState(false);

	const toggleState = () => {
		setShow(!show);
	};

	useEffect(() => {
		if (show) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "unset";
		}
	}, [show]);

	return (
		<Container>
			<MainHero bgIm={DetailedData?.backgroundImg}>
				<TransParentBackground></TransParentBackground>
				<ContHold>
					<TypeHead>K10XMOVIES</TypeHead>
					<Title>
						{DetailedData?.title} {DetailedData?.year}
					</Title>
					<p>{DetailedData?.plot}</p>
					<Button cl='black' bgg='white'>
						<Main>
							<Icon>
								<IoMdNotifications />
							</Icon>
							<span> Subscribe</span>
						</Main>
					</Button>
					<Button cl='black' bgg='white'>
						<Main onClick={toggleState}>
							<Icon>
								<BsFillPlayFill />
							</Icon>
							<span> Watch Trailer</span>
						</Main>
					</Button>
				</ContHold>
			</MainHero>

			<Hold>
				<PosterImage src={DetailedData?.poster_url} />

				<Second>
					<H1>Title</H1>
					<Sub>{DetailedData?.title}</Sub>
					<H1>plot</H1>
					<P>{DetailedData?.plot}</P>
					<br />
					<H1>Actors</H1>

					<Sub>
						{DetailedData?.actors?.map((props) => (
							<>
								<span>{props}</span>
								<br />
							</>
						))}
					</Sub>
					<br />
					<H1>Writers</H1>
					<Sub>
						{DetailedData?.writers?.map((props) => (
							<>
								<span>{props}</span>
								<br />
							</>
						))}
					</Sub>
					<br />
					<H1>rating</H1>
					<Sub>{DetailedData?.rating}</Sub>
					<Rating
						size={12}
						style={{
							fontSize: "14px",
						}}
						initialValue={DetailedData!.rating % 5}
					/>
				</Second>
			</Hold>

			{show ? <Modal video={DetailedData?.trailer_url} toggleState = {toggleState} /> : null}
		</Container>
	);
};


export default Detailed













// import styled from "@emotion/styled"
// import pic from "../assets/sli1.jpg";
// import { BsFillPlayFill } from "react-icons/bs";
// import { IoMdNotifications } from "react-icons/io";
// import useParams from "react-router-dom"
// import movieData from "./MoviesData.json"

// const Container = styled.div``

// const MainHero = styled.div`
//     min-height: 500px;
//     width: 100%;
//     background-color: blanchedalmond;
//     background-image: url(${pic});
//     background-position: center;
//     background-size: cover;
//     position: relative;
//     display: flex;
//     justify-content: center;
//     align-items: center;
// `

// const TransParentBackground = styled.div`
//     position: absolute;
//     background: radical-gradient(
//         circle,
//         rgba(0,0,0,0.42060574229691) 4%,
//         rgba(114, 49, 201, 1) 50%,
//         rgba(0, 0, 0, 1) 100%
//     );
//     top: 0;
//     bottom: 0;
//     left: 0;
//     right: 0;
// `

// const TypeHead = styled.div`
//     font-size: 20px;
//     margin-top: 100px;
//     font-weight: 500;
// `

// const ContHold = styled.div`
//     color: white;
//     z-index: 10;
//     text-align: center;
// `

// const Title = styled.div`
//     font-size: 60px;
//     margin-top: 10px;
//     font-weight: bolder;
// `

// const Button = styled.button<{ bg: string; cl: string}>`
//     padding: 10px 15px 10px 15px;
//     background-color: ${(props) => props.bg};
//     color: ${(props) => props.cl};
//     border: 0;
//     outline: none;
//     margin-right: 30px;
//     border-radius: 5px;
//     cursor: pointer;
//     font-size: 17px;
//     font-weight: bold;
//     transition: all 350ms;
//     border: 1px solid silver;

//     :hover {
//         background-color: transparent;
//     }
// `

// const Icon = styled.div`
//     margin-right: 10px;
// `

// const Main = styled.div`
//     display: flex;
// `

//  const PosterImage = styled.div`
//     height: 300px;
//     width: 350px;
//     background-color: #477890;
//  `

//  const Hold = styled.div`
//     display: flex;
//     gap: 50px;
   
//     justify-content: center;
//     margin-top: 100px;
//     padding-left: 50px;
//     /* align-items: center; */
//  `

// const Second = styled.div`
//     color: white;
// `

// const H1 = styled.div`
//     font-size: 17px;
//     font-weight: bold;
// `

// const Sub = styled.div`
//     font-size: 13px;
//     margin-bottom: 10px;
// `

// const P = styled.div`
//     font-size: 20px;
//     width: 500px;
// `

// const Detailed = () => {



//   return (
//     <Container>
//         <MainHero>
//             <TransParentBackground></TransParentBackground>
//         <ContHold>
//             <TypeHead>ROVIES</TypeHead>
//             <Title>JAGUN JAGUN</Title>
//             <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita 
//             quasi eveniet harum laudantium illo veniam deserunt mollitia voluptatibus! Laudantium, quia!</p>
//             <Button cl="black" bg="white">
//                 <Main>
//                     <Icon>
//                         <IoMdNotifications />
//                     </Icon>
//                     <span>Subscribe</span>
//                 </Main>
//             </Button>

//             <Button cl="black" bg="white">
//                 <Main>
//                     <Icon>
//                         <BsFillPlayFill />
//                     </Icon>
//                     <span>Watch Trailer</span>
//                 </Main>
//             </Button>
//         </ContHold>
//         </MainHero>

//         <Hold>
//             <PosterImage></PosterImage>
//             <Second>
//                 <H1>Title</H1>
//                 <Sub>JAGUN JAGUN</Sub>
//                 <br />
//                 <H1>Plot</H1>
//                 <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas obcaecati nostrum placeat incidunt quae unde porro. Iusto modi optio dignissimos?</P>
//             </Second>
//         </Hold>
//     </Container>
//   )
// }

// export default Detailed
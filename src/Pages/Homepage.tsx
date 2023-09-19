import Card from '../Components/Commons/Card'
import Hero from '../Components/Hero'
// import { useState } from "react"
import styled from '@emotion/styled'
// import SearchedCard from '../Components/Commons/SearchedCard';

const Container = styled.div``

const MainHead = styled.div`
	width: 100%;
	height: 300px;
	 background-color: white;
	 display: flex;
	 justify-content: center;
	 align-items: center;
	 flex-direction: column;
`

const HeadTextForYou = styled.div`
	width: 80%;
	height: 50px;
	/* background-color: coral; */
	font-size: 30px;
	font-weight: bolder;
	color: white;
	display: flex;
	align-items: center;
	/* justify-content: center; */

`

const Homepage = () => {

//   const [keyword, setKeyword] = useState("")
	return (
		<Container>
			<div>
		<Hero />
		<MainHead>
			<HeadTextForYou>For You</HeadTextForYou>
		</MainHead>

          <Card />
		</div>
		</Container>
		// <div style={{ color: "white", minHeight: "100vh" }}>
		// 	<Hero />

		// 	<input onChange={(e)=>{
		// 		setKeyword(e.target.value)
		// 	}} />
		// 	<h2
		// 		style={{
		// 			display: "flex",
		// 			justifyContent: "center",
		// 			alignItems: "center",
		// 		}}>
		// 		Searched
		// 	</h2>

		// 	<SearchedCard keyword = {keyword} />
		// 	<h2
		// 		style={{
		// 			display: "flex",
		// 			justifyContent: "center",
		// 			alignItems: "center",
		// 		}}>
		// 		MOVIES
		// 	</h2>   
	// </div>

		
	);
};
export default Homepage
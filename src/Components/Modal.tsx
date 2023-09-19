import styled from "@emotion/styled";

const Container = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	background-color: rgba(0, 0, 0, 0.5);
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 10px;
	z-index: 10;
`;

const ModalCard = styled.iframe`
	height: 80vh;
	width: 70%;
`

const Button = styled.button`
	width: 2.5%;
	height: 3.5%;
	border: 0;
	border-radius: 5px;
	background-color: white;
	color: red;
	font-size: 20px;
	font-weight: bolder;
	position: absolute;
	left: 1310px;
	top: 75px;
	right: 50px;
	cursor: pointer;

	:hover {
		background-color: red;
		color: white;
		transition: all 350ms;
	}
`

interface Iprops {
	video: string | undefined;
	toggleState: () => void;
}

const Modal: React.FC<Iprops> = ({ video, toggleState }) => {
	console.log(video);
	return (
		<Container>
			<ModalCard onPlay={true} src={video} />
			<Button onClick={toggleState}>X</Button>
		</Container>
	);
};

export default Modal;
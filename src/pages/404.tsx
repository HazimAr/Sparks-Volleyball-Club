import Image from "next/image";
import styled from "styled-components";

const StyledDiv = styled.div`
	background-color: rgb(58, 211, 170);
	display: flex;
	justify-content: center;
	height: 65vh;
	flex-direction: column;
	align-items: center;
	color: white;
	padding-bottom: 35vh;
	overflow: hidden;
`;

const StledImg = styled(Image)`
	margin-bottom: -200px;
	position: relative;
	left: -10%;
	z-index: 10;
`;

const Styledh3 = styled.h3`
	z-index: 11;
`;

const Styledp = styled.p`
	font-size: 20px;
`;

const Styleda = styled.a`
	font-weight: bold;
	background-color: var(--color-accent);
	color: var(--font-color);
	font-size: 27px;
	margin: auto;
	width: fit-content;
	border-radius: 25px;
	padding: 10px 20px;
	transition: all ease-in-out 0.3s;
	border: none;
`;
// eslint-disable-next-line import/no-default-export
export default function PageNotFound(): JSX.Element {
	return (
		<StyledDiv>
			<StledImg src="/taco.gif" alt="rip taco" />
			<StledImg src="/404.png" alt="404" />
			<Styledh3>THE PAGE YOU WERE LOOKING FOR DOES NOT EXIST</Styledh3>
			<Styledp>
				(Unless you were looking for a page with an animation of a taco
				<br />
				tripping and literally spilling the beans. If that's the case,
				it
				<br />
				definitely exists, and you definitely found it.)
			</Styledp>
			<Styleda
				id="fof-button"
				href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
				target="_blank"
				rel="noreferrer"
			>
				Go Home
			</Styleda>
		</StyledDiv>
	);
}

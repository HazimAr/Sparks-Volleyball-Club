import Image from "next/image";
import styled from "styled-components";

const StyledDiv = styled.div`
	background-color: var(--color-primary);
	padding: 1px 0 100px 0;
	color: var(--font-color-o);
`;

const StyledDivForm = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
	align-items: center;
	overflow-x: hidden;
`;

const Styledp = styled.p`
	flex-basis: 100%;
	padding: 10px 0;
	font-size: 50px;
	font-weight: 400;
	font-family: "Indie Flower";
	margin-top: 0;
	padding-top: 0;
`;

const StyledIframe = styled.iframe`
	max-width: 560px;
	animation: slideFromLeft 1.5s;
	position: relative;
`;

const StyledImg = styled(Image)`
	max-width: 500px;
	-webkit-box-reflect: below 8px -webkit-gradient(linear, right top, right bottom, from(transparent), color-stop(85%, transparent), to(rgba(255, 255, 255, 0.1)));
	animation: slideFromRight 1.5s;
	position: relative;
`;

// eslint-disable-next-line import/no-default-export
export default function Temp(): JSX.Element {
	return (
		<StyledDiv className="regist-div">
			<Styledp className="section-title" id="register-title">
				Register
			</Styledp>
			<StyledDivForm className="register-form" id="register-form">
				<StyledIframe
					id="iframe-register"
					title=" "
					style={{ width: "100%" }}
					src="https://docs.google.com/forms/d/e/1FAIpQLSea_RocZ91i80gbLWzngi25YOXzX-m3MhWRlIDVIX2F0YEqww/viewform?embedded=true"
					width="650"
					height="650"
					frameBorder={0}
					marginHeight={0}
					marginWidth={0}
				>
					Loading…
				</StyledIframe>
				<StyledImg
					id="register-form-img"
					src="/Sparks/8-22-2_Tourney-24.jpg"
					alt=""
				/>
			</StyledDivForm>
		</StyledDiv>
	);
}

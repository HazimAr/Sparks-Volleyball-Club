import Image from "next/image";
import styled from "styled-components";

type staff = {
	img: string;
	name: string;
	role: string;
};

const staffData: staff[] = [
	{
		// eslint-disable-next-line sonarjs/no-duplicate-string
		img: "/Hazimos.png",
		name: "Hazim",
		role: "Web Designer",
	},
	{
		img: "/Hazimos.png",
		name: "Karim",
		role: "Head Coach",
	},
	{
		img: "/Hazimos.png",
		name: "Kenzy",
		role: "Co-Club Director2",
	},
	{
		img: "/Hazimos.png",
		name: "Shymaa",
		role: "Co-Club Director3",
	},
	{
		img: "/Hazimos.png",
		name: "Mom",
		role: "Co-Club Director5",
	},
	{
		img: "/Hazimos.png",
		name: "Mom",
		role: "Co-Club Director6",
	},
	{
		img: "/Hazimos.png",
		name: "Mom",
		role: "Co-Club Director8",
	},
	{
		img: "/Hazimos.png",
		name: "Mom",
		role: "Co-Club Director9",
	},
	{
		img: "/Hazimos.png",
		name: "Mom",
		role: "Co-Club Director",
	},
];

const StyledImage = styled(Image)``;

const StyledDiv = styled.div`
	width: 300px;
	height: 500px;
	display: flex;
	flex-direction: column;
	margin: 20px;
	box-shadow: 0 0 30px rgba(0, 0, 0, 0.301);
	transition: all 0.3s ease-in-out;
`;

const StyledDivDiv = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	padding: 100px 0;
	margin: auto;
	max-width: 1200px;
`;

function staffCard(data: staff) {
	return (
		<StyledDiv>
			<StyledImage className="staff-img" src={data.img} alt={data.name} />
			<div>
				<h2>{data.name}</h2>
				<h4>{data.role}</h4>
			</div>
		</StyledDiv>
	);
}

// eslint-disable-next-line import/no-default-export
export default function Staff(): JSX.Element {
	return (
		<div>
			<h1> SVBC Staff </h1>
			<StyledDivDiv>
				{staffData.map((data) => staffCard(data))}
			</StyledDivDiv>
		</div>
	);
}

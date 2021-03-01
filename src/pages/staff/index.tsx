/* eslint-disable import/no-default-export */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

type staff = {
	img: string;
	name: string;
	role: string;
	link: string;
};

const staffData: staff[] = [
	{
		img: "/Images/Staff/Hazim.png",
		name: "Moustafa Hannourah",
		role: "Executive Director",
		link: "/staff/Moustafa",
	},
	{
		img: "/Images/Staff/Hazim.png",
		name: "Shymaa Shedid",
		role: "Club Director",
		link: "/staff/Shymaa",
	},
	{
		img: "/Images/Staff/Hazim.png",
		name: "Karim Arafa",
		role: "Director of operations",
		link: "/staff/Karim",
	},
	{
		img: "/Images/Staff/Hazim.png",
		name: "Lindsey Smith",
		role: "Director of Development",
		link: "/staff/Lindsey",
	},
	{
		img: "/Images/Staff/Hazim.png",
		name: "Keven Smith",
		role: "Director of Development",
		link: "/staff/Kevin",
	},
];

const StyledButton = styled.button`
	font-weight: bold;
	background-color: var(--color-primary);
	color: var(--font-color-o);
	width:fit-content;
	font-size: 27px;
	border-radius: 25px;
	padding: 10px 20px;
	margin: 15px;
	transition: all ease-in-out 0.3s;
	border: none;
	&:hover {
		background-color: var(--color-primary-hover);
		cursor: pointer;
	}
`;

const StaffSection = styled.section`
	width:300px;
	display: flex;
	flex-direction: column;
	margin: 15px;
	box-shadow: 0 0 30px rgba(0, 0, 0, 0.301);
	transition: all 0.3s ease-in-out;
	div {
		display: flex;
		flex-direction: column;
		justify-content:space-between;
		align-items:center;
		
	}
	h2,
	h4 {
		font-weight: 400;
		margin-bottom: 0;
	}
	&:hover {
		box-shadow: 0 0 40px rgba(0, 0, 0, 0.5);
		cursor: pointer;
		transform: scale(1.075);
		transition: ease-in-out 0.15s;
	}
`;
const StaffSectionDiv = styled.section`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	padding-bottom: 100px;
	margin: auto;
	max-width: 1200px;
`;
function staffCard(data: staff) {
	return (
		<Link href={data.link}>
			<StaffSection>
				<Image
					src={data.img}
					width={300}
					height={300}
					alt={data.name}
				/>
				<div>
					<h2>{data.name}</h2>
					<h4>{data.role}</h4>
					<StyledButton>Learn More</StyledButton>
				</div>
			</StaffSection>
		</Link>
	);
}

export default function Staff() {
	return (
		<div>
			<h1> SVBC Staff </h1>
			<StaffSectionDiv>
				{staffData.map((data) => staffCard(data))}
			</StaffSectionDiv>
		</div>
	);
}

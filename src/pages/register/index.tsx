/* eslint-disable import/no-default-export */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

type register = {
	img: string;
	name: string;
	link: string;
};

const registerData: register[] = [
	{
		img: "boys.jpg",
		name: "Boys Short Season",
		link: "/register/boys",
	},
	{
		img: "girls.jpg",
		name: "Girls Close Date",
		link: "/register/girls",
	},
	{
		img: "girls2.jpg",
		name: "Girls Far Data",

		link: "/register/girls2",
	},
	{
		img: "summer.jpg",
		name: "Summer Camp",

		link: "/register/summer",
	},
	{
		img: "gym.jpg",
		name: "Open Gym",

		link: "/#faq",
	},
	{
		img: "youth.jpg",
		name: "Open Gym",

		link:
			"https://www.eventbrite.com/e/2021-las-vegas-recruiting-combine-registration-156595861437",
	},
];

const StyledButton = styled.button`
	font-weight: bold;
	background-color: var(--color-primary);
	color: var(--font-color-o);
	width: fit-content;
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
	width: 300px;
	display: flex;
	flex-direction: column;
	margin: 15px;
	box-shadow: 0 0 30px rgba(0, 0, 0, 0.301);
	transition: all 0.3s ease-in-out;
	div {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
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

function staffCard(data: register) {
	return (
		<Link href={data.link}>
			<div>
				<StaffSection>
					<Image
						src={`/Images/register/${data.img}`}
						width={300}
						height={400}
						alt={data.name}
					/>
				</StaffSection>
				<StyledButton>Learn More</StyledButton>
			</div>
		</Link>
	);
}

export default function Staff() {
	return (
		<div>
			<h1> Register Now </h1>
			<StaffSectionDiv>
				{registerData.map((data: any) => staffCard(data))}
			</StaffSectionDiv>
		</div>
	);
}

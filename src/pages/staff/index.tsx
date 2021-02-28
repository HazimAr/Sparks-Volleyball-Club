import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

interface staff {
	img: any;
	name: string;
	role: string;
	link: string;
}

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
		role: "Director of player development/Coach",
		link: "/staff/Lindsey",
	},
	{
		img: "/Images/Staff/Hazim.png",
		name: "Kevin Smith",
		role: "Director of player development/Coach",
		link: "/staff/Kevin",
	},
];

const StyledButton = styled.button`
	font-weight: bold;
	background-color: var(--color-primary);
	color: var(--font-color-o);
	font-size: 27px;
	margin: auto;
	width: fit-content;
	border-radius: 25px;
	padding: 10px 20px;
	margin-top:15px;
	transition: all ease-in-out 0.3s;
	border: none;
	&:hover {
		background-color: var(--color-primary-hover);
		cursor: pointer;
	}
`;
function StaffCard(data: staff) {
	return (
		<Link href={data.link}>
			<section className="staff-div">
				<Image
					className="staff-img"
					src={data.img}
					width={300}
					height={300}
					alt={data.name}
				/>
				<div>
					<h2>{data.name}</h2>
					<h4>{data.role}</h4>
					<StyledButton>Read More</StyledButton>
				</div>
			</section>
		</Link>
	);
}

export default function Staff() {
	return (
		<div>
			<h1> SVBC Staff </h1>
			<div className="staff-div-div">
				{staffData.map((data) => StaffCard(data))}
			</div>
		</div>
	);
}

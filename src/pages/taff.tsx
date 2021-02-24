import React from "react";
import Image from "next/image";

interface staff {
	img: any;
	name: string;
	role: string;
}

const staffData: staff[] = [
	{
		img: "/Images/Hazimos.png",
		name: "Hazim",
		role: "Web Designer",
	},
	{
		img: "/Images/Hazimos.png",
		name: "Karim",
		role: "Head Coach",
	},
	{
		img: "/Images/Hazimos.png",
		name: "Kenzy",
		role: "Co-Club Director",
	},
	{
		img: "/Images/Hazimos.png",
		name: "Shymaa",
		role: "Co-Club Director",
	},
	{
		img: "/Images/Hazimos.png",
		name: "Mom",
		role: "Co-Club Director",
	},
	{
		img: "/Images/Hazimos.png",
		name: "Mom",
		role: "Co-Club Director",
	},
	{
		img: "/Images/Hazimos.png",
		name: "Mom",
		role: "Co-Club Director",
	},
	{
		img: "/Images/Hazimos.png",
		name: "Mom",
		role: "Co-Club Director",
	},
	{
		img: "/Images/Hazimos.png",
		name: "Mom",
		role: "Co-Club Director",
	},
];

function StaffCard(data: staff) {
	return (
		<div className="staff-div">
			<Image
				className="staff-img"
				src="/Images/Hazimos.png"
				width={300}
				height={300}
				alt={data.name}
			/>
			<div>
				<h2>{data.name}</h2>
				<h4>{data.role}</h4>
			</div>
		</div>
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

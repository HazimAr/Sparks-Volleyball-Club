import React from "react";
import logo from "../../Images/Sparks/Logos/Transparent-White.png";
import { scrollToAboutUs } from "../Header";
import mobile from "../../Images/mobile.svg";
import desktop from "../../Images/desktop.svg";
import GirlTip from "../../Images/Sparks/8-22-2_Tourney-55c.jpg";
import GirlSet from "../../Images/Sparks/8-22-2_Tourney-43.jpg";

/* eslint-disable import/no-default-export */
export default function Intro() {
	return (
		<div className="intro-div" id="home">
			<div className="intro-inside-div">
				<div className="intro-text-div">
					<h1>
						We are Sparks
						<br />
						Volleyball Club
					</h1>
					<p onClick={scrollToAboutUs} className="intro-button">
						Learn More
					</p>
				</div>
				<div className="intro-img-div">
					<img src={logo} alt="" className="intro-img" />
				</div>
			</div>
		</div>
	);
}



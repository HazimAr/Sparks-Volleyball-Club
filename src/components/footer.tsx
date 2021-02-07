import React from "react";
import facebook from "../Images/Sparks/facebook.svg";
import insta from "../Images/Sparks/instagram.svg";
import youtube from "../Images/Sparks/youtube.svg";



export default function Footer(): JSX.Element {
	return (
		<footer id="footer">
			<p className="section-title">Contact Us</p>
			<p className="footer-text">
				SparksVolleyBallClub@gmail.com
				<br />
				(702) 502-9462
				<br />
				3778 W. Cheyenne Ave STE 120 <br />
				N. Las Vegas, NV 89032
				<br />
			</p>
			<div className="footer-socials-div">
				<a
					href="https://www.facebook.com/SparksVBCLV"
					target="_blank"
					rel="noreferrer noopener"
					className="footer-img-link"
				>
					<img src={facebook} alt="" className="footer-socials" />
				</a>
				<a
					href="https://www.instagram.com/sparks_vbc_lv/"
					target="_blank"
					rel="noreferrer noopener"
					className="footer-img-link"
				>
					<img src={insta} alt="" className="footer-socials" />
				</a>
				<a
					href="https://www.youtube.com/channel/UCrUowRgcYRZif4HXd9RgO4A"
					target="_blank"
					rel="noreferrer noopener"
					className="footer-img-link"
				>
					<img src={youtube} alt="" className="footer-socials" />
				</a>
			</div>
			<p className="footer-copyright-text">
				© 2021{" "}
				<span className="footer-copyright-name">
					Sparks Volleyball Club
				</span>
			</p>
			<a href="https://webdefyer.com" target="_blank" rel="noreferrer">
				Designed by:{" "}
				<span style={{ color: "var(--color-primary)" }}>Webdefyer</span>
			</a>
		</footer>
	);
}

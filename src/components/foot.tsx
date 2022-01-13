import Image from "next/image";

export default function Footer() {
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
					<Image
						width={44}
						height={44}
						src="/Images/Sparks/facebook.svg"
						alt=""
						className="footer-socials"
					/>
				</a>
				<a
					href="https://www.instagram.com/sparks_vbc_lv/"
					target="_blank"
					rel="noreferrer noopener"
					className="footer-img-link"
				>
					<Image
						width={44}
						height={44}
						src="/Images/Sparks/instagram.svg"
						alt=""
						className="footer-socials"
					/>
				</a>
				<a
					href="https://www.youtube.com/channel/UCrUowRgcYRZif4HXd9RgO4A"
					target="_blank"
					rel="noreferrer noopener"
					className="footer-img-link"
				>
					<Image
						width={44}
						height={44}
						src="/Images/Sparks/youtube.svg"
						alt=""
						className="footer-socials"
					/>
				</a>
			</div>
			<p className="footer-copyright-text">
				© 2021{" "}
				<span className="footer-copyright-name">
					Sparks Volleyball Club
				</span>
			</p>
			<a href="https://hazim.tech" target="_blank" rel="noreferrer">
				Made with ❤️ by:{" "}
				<span style={{ color: "var(--color-primary)" }}>Hazim Arafa</span>
			</a>
		</footer>
	);
}

import Link from "next/link";
import Image from "next/image";

export default function Register() {
	return (
		<div className="register-outside-div">
			<div className="register-inside-div" id="register">
				<div className="register-text-div" id="register-text">
					<p
						className="section-title"
						style={{ padding: "0", marginBottom: "0" }}
					>
						Join our team
						<br />
						Spark your revolution.
					</p>
					<br />
					<br />
					<Link href="/register">
						<a>
							<button
								id="register-button"
								className="intro-button"
							>
								Register Now
							</button>
						</a>
					</Link>
				</div>
				<Image
					width={700}
					height={400.666666}
					id="register-img"
					className="register-img"
					src="/Images/Sparks/TourneyImage.jpg"
					alt=""
				/>
			</div>
		</div>
	);
}

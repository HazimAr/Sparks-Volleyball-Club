import React from "react";
import Image from "next/image";
export default function Register() {
	return (
		<div className="regist-div">
			<p className="section-title" id="register-title">
				Register
			</p>
			<div className="register-form" id="register-form">
				<iframe
					id="iframe-register"
					title=""
					style={{ width: "100%" }}
					src="https://docs.google.com/forms/d/e/1FAIpQLSdLrAnJJA-GqknwmDfDuCYuKsyU5ULcVJrNdeJLO7TwvmQvAA/viewform?embedded=true"
					width="650"
					height="650"
					frameBorder={0}
					marginHeight={0}
					marginWidth={0}
				>
					Loading…
				</iframe>
				<Image
					width={500}
					height={750}
					id="register-form-img"
					src="/Images/Sparks/8-22-2_Tourney-24.jpg"
				/>
			</div>
		</div>
	);
}

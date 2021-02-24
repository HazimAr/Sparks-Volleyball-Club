import axios from "axios";
import { useState } from "react";

// eslint-disable-next-line import/no-default-export
export default function Contact(): JSX.Element {
	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");
	const [email, setEmail] = useState("");
	const [subject, setSubject] = useState("");
	const [message, setMessage] = useState("");

	function handleSubmit() {
		// eslint-disable-next-line no-void
		void axios.post("/api/email", {
			name,
			phone,
			email,
			subject,
			message,
		});
	}
	return (
		<div className="contact-outside-div" id="contact">
			<form className="contact-form" onSubmit={handleSubmit}>
				<h2 className="section-title">Have more questions?</h2>
				<div className="contact-form-div">
					<input
						value={name}
						onChange={function (e) {
							setName(e.target.value);
						}}
						type="text"
						placeholder="Name *"
						className="contact-input"
					/>
					<input
						value={phone}
						onChange={function (e) {
							setPhone(e.target.value);
						}}
						type="text"
						placeholder="Phone *"
						className="contact-input"
					/>
				</div>
				<div className="contact-form-div">
					<input
						value={email}
						onChange={function (e) {
							setEmail(e.target.value);
						}}
						type="text"
						placeholder="Email *"
						className="contact-input"
					/>
					<input
						value={subject}
						onChange={function (e) {
							setSubject(e.target.value);
						}}
						type="text"
						placeholder="Subject *"
						className="contact-input"
					/>
				</div>
				<div className="contact-form-div">
					<textarea
						value={message}
						onChange={function (e) {
							setMessage(e.target.value);
						}}
						className="contact-input"
						placeholder="Message *"
					/>
				</div>
				<input type="submit" id="button" className="intro-button" />
			</form>
		</div>
	);
}

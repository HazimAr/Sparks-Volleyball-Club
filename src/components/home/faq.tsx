import Image from "next/image";

export default function Faq() {
	function FaqSection(props: any) {
		return (
			<div className="faq-section" key={props.id} id={props.id}>
				<Image
					width={60}
					height={60}
					className="faq-img"
					alt=""
					src={props.image}
				/>
				<h3 className="faq-title">{props.title}</h3>
				<p>{props.text}</p>
			</div>
		);
	}
	return (
		<div className="faq-div" id="faq">
			<h2 className="section-title">Frequently Asked Questions</h2>
			<FaqSection
				id="faq-left"
				image="/Images/down.svg"
				title="What sets Sparks apart from other teams?"
				text="Sparks Volley Ball Club was founded on the core belief of teaching life lessons through the sport of volleyball. We have some of the most experienced and sought after coaches in the region. Our state of the art 17,000 square foot facility is equipped with the latest volleyball training equipment"
			/>
			<FaqSection
				id="faq-middle"
				image="/Images/barGraph.svg"
				title="When and Where are practices?"
				text="We practice at the Nevada Volleyball Center - 3778 W. Cheyenne Ave #120 N. Las Vegas, NV 89032. Days and times will vary."
			/>
			<FaqSection
				id="faq-right"
				image="/Images/trendingUp.svg"
				title="What do club fees cover?"
				text="Club fees cover everything you will need to be successful, including but not limited to education, certifications, uniforms, practices, tournaments, specialty training, administrative costs, travel transportation, and lodging."
			/>
		</div>
	);
}

import { Intro, About, Register, Faq, Contact } from "@components/home/index";

// eslint-disable-next-line import/no-default-export
export default function Home(): JSX.Element {
	return (
		<>
			<Intro />
			<About />
			<Register/>
			<Faq />
			<Contact />
		</>
	);
}

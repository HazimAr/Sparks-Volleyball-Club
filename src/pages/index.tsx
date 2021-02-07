import { Intro, Faq, Contact, } from "@components/home/Index";

// eslint-disable-next-line import/no-default-export
export default function Home(): JSX.Element {
	return (
		<>
			<Intro />
			<Faq />
			<Contact />
		</>
	);
}

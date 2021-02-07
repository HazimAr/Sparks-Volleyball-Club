import "@styles/global.css";
import Footer from "@components/Footer";
import Header from "@components/Header";
import { pageview } from "@lib/gtag";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";

import { COMPANY_INFO } from "../config";

// eslint-disable-next-line import/no-default-export
export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
	const router = useRouter();
	useEffect(() => {
		const handleRouteChange = (url: unknown) => {
			pageview(url);
		};
		router.events.on("routeChangeComplete", handleRouteChange);
		return () => {
			router.events.off("routeChangeComplete", handleRouteChange);
		};
	}, [router.events]);
	return (
		<>
			<Head>
				<title>{COMPANY_INFO.name}</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header />
			<Component {...pageProps} />
			<Footer />
		</>
	);
}

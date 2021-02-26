import { GA_TRACKING_ID } from "@src/config.ts";
import Document, { Html, Head, Main, NextScript } from "next/document";
import Link from "next/link";
import { ServerStyleSheet } from "styled-components";
import {COMPANY_META} from "../config.ts"
// eslint-disable-next-line import/no-default-export
export default class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const sheet = new ServerStyleSheet();
		const originalRenderPage = ctx.renderPage;

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: (App) => (props) =>
						sheet.collectStyles(<App {...props} />),
				});

			const initialProps = await Document.getInitialProps(ctx);
			return {
				...initialProps,
				styles: (
					<>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</>
				),
			};
		} finally {
			sheet.seal();
		}
	}
	render() {
		return (
			<Html lang="en-us">
				<Head>
					<meta
						name="description"
						content={COMPANY_META.description}
					/>

					<meta
						itemProp="name"
						content={COMPANY_META.title}
					/>
					<meta
						itemProp="description"
						content={COMPANY_META.description}
					/>
					<meta itemProp="image" content="/logo.png" />

					<meta
						property="og:url"
						content="https://sparsvolleyballclub.com"
					/>
					<meta property="og:type" content="website" />
					<meta
						property="og:title"
						content={COMPANY_META.title}
					/>
					<meta
						property="og:description"
						content={COMPANY_META.description}
					/>
					<meta property="og:image" content="/android-chrome-512x512.png" />

					<meta name="twitter:card" content="summary_large_image" />
					<meta
						name="twitter:title"
						content={COMPANY_META.title}
					/>
					<meta
						name="twitter:description"
						content={COMPANY_META.description}
					/>
					<meta name="twitter:image" content="/android-chrome-512x512.png" />

					<script
						async
						src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
					/>
					<script
						// eslint-disable-next-line react/no-danger
						dangerouslySetInnerHTML={{
							__html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
						}}
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

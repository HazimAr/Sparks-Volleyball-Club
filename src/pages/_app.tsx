import { ChakraProvider } from "@chakra-ui/react";
import theme from "@styles/theme";
import { pageview } from "@lib/gtag";
import { META } from "config";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Footer from "@components/footer";

export default function MyApp({ Component, pageProps }: AppProps) {
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
        <title>{META.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
        <Footer />
      </ChakraProvider>
    </>
  );
}

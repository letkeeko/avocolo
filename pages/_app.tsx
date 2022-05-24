import "../css/globals.css";
import type { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";
import { COLOR } from "../components/variables";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNProgress color={COLOR.green} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

import Head from "next/head";
import { PropTypes } from "./types/seo.types";

export default function SEO(props: PropTypes) {
  const { title, description } = props;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Head>
  );
}

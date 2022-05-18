import Head from "next/head";
import { PropTypes } from "./types/seo.types";

export default function SEO(props: PropTypes) {
  const { title, description, pathname } = props;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content="Avocolo" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="/og-avocolo.png" />
      <meta property="og:image:secure_url" content="/og-avocolo.png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:image" content="/og-avocolo.png" />
      <meta name="theme-color" content="#219F94" />
      <meta property="og:color" content="#219F94" />
      <meta property="og:image:alt" content="Avocolo Artwork" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="og:url" content={`https://www.avocolo.com${pathname}`} />
      <link rel="canonical" href={`https://www.avocolo.com${pathname}`} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getSchema({ title, description })),
        }}
      />
    </Head>
  );
}

type SchemaTypes = {
  title: string;
  description: string;
};

const getSchema = (props: SchemaTypes) => {
  const { title, description } = props;

  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    publisher: {
      "@type": "ProfilePage",
      name: "Keeko Montojo",
    },
  };
};

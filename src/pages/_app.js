import "@NextAlias/styles/globals.css";
import { Albert_Sans } from "next/font/google";
import Head from "next/head";

const albert = Albert_Sans({
  weight: ["400", "300", "500", "600", "700"],
  subsets: ["latin"],
  style: ["normal"],
});

export default function App({ Component, pageProps }) {
  return (
    <main className={albert.className}>
      <Head>
        <title>Snap Message</title>
      </Head>
      {Component.PageLayout ? (
        <Component.PageLayout>
          <Component {...pageProps} />
        </Component.PageLayout>
      ) : (
        <Component {...pageProps} />
      )}
    </main>
  );
}

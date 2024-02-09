import Head from "next/head";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

import { Header, Footer } from "@/components/index";
import "@/styles/globals.scss";

config.autoAddCss = true;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Z3 games - Simplificando sua diversão!</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        ></meta>
        <meta
          name="description"
          content="A Zero3Games é especializada em cartões pré-pagos para os consoles PlayStation, Xbox e Nintendo além de oferecer cartões para jogos de PC como Steam, Battle.Net, Ongame, Level-Up e serviços como: NETFLIX, Google Play, Uber, IMVU e mais"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen flex flex-col bg-body-bg">
        <Header />
        <main className="flex-grow">
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default MyApp;

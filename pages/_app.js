import 'tailwindcss/tailwind.css';
import Head from 'next/head';
import { CartProvider } from 'use-shopping-cart';
import { Header, Footer } from '@/components/index';
import { Toaster } from 'react-hot-toast';

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = true

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>
          Z3 games - Simplificando sua diversão!
        </title>
        <meta
          name="description"
          content="A Zero3Games é especializada em cartões pré-pagos para os consoles PlayStation, Xbox e Nintendo além de oferecer cartões para jogos de PC como Steam, Battle.Net, Ongame, Level-Up e serviços como: NETFLIX, Google Play, Uber, IMVU e mais"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CartProvider>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            <Component {...pageProps} />
          </main>
          <Footer />
        </div>
      </CartProvider>
      <Toaster />
    </>
  );
}

export default MyApp;

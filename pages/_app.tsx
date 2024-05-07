import "@/styles/globals.css";
import { Inter } from "next/font/google";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import Head from "next/head";

import { PersistGate } from "redux-persist/integration/react";

import { store, persistor } from "@/store/store";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>iddaa</title>
        <meta name="description" content="En iyi bahis uygulaması" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={inter.className}>
        <Provider store={store}>
          <PersistGate persistor={persistor} loading={null}>
            <Component {...pageProps} />
          </PersistGate>
        </Provider>
      </main>
    </>
  );
}

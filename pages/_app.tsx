import "@/styles/globals.css";
import { Inter } from "next/font/google";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";

import { store } from "@/lib/store";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={inter.className}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </main>
  );
}

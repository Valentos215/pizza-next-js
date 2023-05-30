import type { AppProps } from "next/app";

import { ExpandProvider } from "contexts/expandContext";
import { CartProvider } from "contexts/cartContext";
import CartChecker from "hok/cartChecker";
import Layout from "components/Layout";

import "styles/app.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ExpandProvider>
      <CartProvider>
        <CartChecker>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </CartChecker>
      </CartProvider>
    </ExpandProvider>
  );
}

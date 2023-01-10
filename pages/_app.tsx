import "styles/app.scss";
import type { AppProps } from "next/app";
import { ExpandProvider } from "contexts/expandContext";
import { CartProvider } from "contexts/cartContext";
import CartChecker from "hok/cartChecker";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ExpandProvider>
      <CartProvider>
        <CartChecker>
          <Component {...pageProps} />
        </CartChecker>
      </CartProvider>
    </ExpandProvider>
  );
}

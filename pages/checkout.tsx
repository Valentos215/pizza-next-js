import { useState, useContext, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import { CartContext } from "contexts/cartContext";
import { ExpandContext } from "contexts/expandContext";
import Form from "components/form/Form";
import Order from "components/order/Order";
import Show from "shared/components/show/Show";

import s from "styles/Checkout.module.scss";

const Checkout = () => {
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);
  const [cart] = useContext(CartContext);
  const [expanded] = useContext(ExpandContext);

  const scrollClassNames = expanded ? "scroll off" : "scroll";

  const router = useRouter();

  useEffect(() => {
    if (!checkoutSuccess) {
      return;
    }

    setTimeout(() => {
      router.push("/");
    }, 5000);
  }, [checkoutSuccess, router]);

  return (
    <>
      <Head>
        <title>Checkout</title>
      </Head>
      {
        <Show condition={checkoutSuccess}>
          <div className={s.title}>
            You have successfully placed an order, wait for the operator`s call
          </div>
        </Show>
      }

      <Show condition={!cart.length && !checkoutSuccess}>
        <div className={s.title}>Cart is empty</div>
      </Show>

      <Show condition={!checkoutSuccess && !!cart.length}>
        <div className={scrollClassNames}>
          <div className={"container"}>
            <main className={s.wrapper}>
              <Order />
              <Form setCheckoutSuccess={setCheckoutSuccess} />
            </main>
          </div>
        </div>
      </Show>
    </>
  );
};

export default Checkout;

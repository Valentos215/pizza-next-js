import { useState, useContext, useEffect } from "react";
import { useRouter } from "next/router";

import { CartContext } from "contexts/cartContext";
import { ExpandContext } from "contexts/expandContext";
import Form from "components/form/Form";
import Order from "components/order/Order";

import s from "styles/Checkout.module.scss";
import MainContainer from "components/MainContainer";
import Show from "shared/components/show/Show";

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
    <MainContainer>
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
            <div className={s.wrapper}>
              <Order />
              <Form setCheckoutSuccess={setCheckoutSuccess} />
            </div>
          </div>
        </div>
      </Show>
    </MainContainer>
  );
};

export default Checkout;

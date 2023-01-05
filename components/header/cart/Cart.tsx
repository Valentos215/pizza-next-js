import { useState, useContext } from "react";
import cartLogo from "assets/Cart.svg";
import { CartContext } from "contexts/cartContext";
import CartItem from "shared/components/cartItem/CartItem";
import { totalAmount, totalNumber } from "utils/utils";
import Show from "shared/components/show/Show";
import s from "./Cart.module.scss";
import Image from "next/image";
import Link from "next/link";

const Cart = () => {
  const [expanded, setExpanded] = useState(false);
  const [cart] = useContext(CartContext);

  const cartIsEmpty = !cart.length;
  const checkoutClassName = !cartIsEmpty
    ? s.checkout
    : `${s.checkout} ${s.disabled}`;
  const expandClassName = expanded ? `${s.expand} ${s.active}` : s.expand;

  return (
    <>
      <div tabIndex={1} onBlur={() => setExpanded(false)} className={s.cart}>
        <div
          className={s.viewer}
          onClick={() => {
            if (!cartIsEmpty) setExpanded(!expanded);
          }}
        >
          <div className={s.counter}>
            <span>{totalNumber(cart)}</span>
            <Image src={cartLogo} alt="" />
          </div>
          <Show condition={!cartIsEmpty}>
            <label className={s.amount}>{`${totalAmount(cart)}.00 uah`}</label>
          </Show>
        </div>
        {
          <Link
            href={!cartIsEmpty ? "checkout" : "#"}
            className={checkoutClassName}
          >
            Checkout
          </Link>
        }
        <Show condition={!cartIsEmpty}>
          <div className={expandClassName}>
            {cart
              .sort((a, b) => a.id - b.id)
              .map((item) => (
                <div
                  key={item.id + item.size + item.crust}
                  className={s.expand__item}
                >
                  <CartItem item={item} />
                </div>
              ))}
          </div>
        </Show>
      </div>
      <div className={`${s.cart} ${s.small}`}>
        <Link href={!cartIsEmpty ? "checkout" : "#"} className={s.viewer}>
          <div className={s.counter}>
            <span>00</span>
            <Image src={cartLogo} alt="" />
          </div>
          <Show condition={!cartIsEmpty}>
            <label className={s.amount}>{`${totalAmount(cart)}.00 uah`}</label>
          </Show>
        </Link>
      </div>
    </>
  );
};

export default Cart;

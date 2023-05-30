import { useContext, useState } from "react";
import Image from "next/image";

import { CartContext } from "contexts/cartContext";
import Show from "shared/components/show/Show";
import CheckoutSection from "shared/components/productItem/checkoutSection/CheckoutSection";
import { ICartItem } from "shared/components/cartItem/utils/cartItem.utils";
import { IProduct } from "utils/products.utils";
import { getProductCount } from "shared/components/productItem/utils/productItem.utils";

import s from "shared/components/productItem/ProductItem.module.scss";

interface IProductItemProps {
  product: IProduct;
}

const ProductItem = ({ product }: IProductItemProps) => {
  const { id, size, title, img, weight, cost } = product;
  const [currentSize, setCurrentSize] = useState(size[0]);
  const [cart] = useContext(CartContext);

  const currentCost = cost[size.indexOf(currentSize)];
  const currentWeight = weight ? weight[size.indexOf(currentSize)] : null;

  const currentItem: ICartItem = {
    ...product,
    size: currentSize,
    number: getProductCount({ cart, currentSize, productId: product.id }),
    amount: currentCost,
  };

  const onSizeClick = (size: string) => {
    setCurrentSize(size);
  };

  const productInCart = cart.some((item) => item.id === id);

  const sizeClassName = (size: string) =>
    size === currentSize ? s.size__checked : "";

  return (
    <div className={s.wrapper}>
      <div className={s.image}>
        <img className={s.image__main} src={img} alt={title} />
        <Show condition={productInCart}>
          <Image
            className={`${s.image__cartLogo} ${s.dark}`}
            src="/Cart.svg"
            alt="Cart logo"
            height={18}
            width={18}
          />
        </Show>
        {!!currentWeight && <span>{currentWeight}g</span>}
      </div>
      <div className={s.title}>{title}</div>
      <div className={s.size}>
        {size.map((size) => (
          <span
            key={size}
            onClick={() => onSizeClick(size)}
            className={sizeClassName(size)}
          >
            {size}
          </span>
        ))}
      </div>

      <CheckoutSection currentItem={currentItem} />
    </div>
  );
};

export default ProductItem;

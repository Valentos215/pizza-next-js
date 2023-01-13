import Image from "next/image";
import s from "components/form/deliverySet/DeliverySet.module.scss";

interface IDeliverySetProps {
  delivery: boolean;
  setDelivery: (value: boolean) => void;
}

const DeliverySet = ({ delivery, setDelivery }: IDeliverySetProps) => {
  const deliveryClassName = delivery
    ? `${s.delivery__item} ${s.active}`
    : s.delivery__item;
  const carryOutClassName = delivery
    ? s.delivery__item
    : `${s.delivery__item} ${s.active}`;

  return (
    <div className={s.delivery}>
      <div className={deliveryClassName} onClick={() => setDelivery(true)}>
        <Image src="/Delivery.svg" alt="" width={38} height={38} />
        <span>Delivery</span>
      </div>
      <div className={carryOutClassName} onClick={() => setDelivery(false)}>
        <Image src="/CarryOut.svg" alt="" width={38} height={38} />
        <span>Carry out</span>
      </div>
    </div>
  );
};

export default DeliverySet;

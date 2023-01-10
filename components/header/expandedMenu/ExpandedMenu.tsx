import { ucFirst } from "utils/utils";

import s from "./ExpandedMenu.module.scss";
import Image from "next/image";
import Link from "next/link";
interface IExpandMenuProps {
  expanded: boolean;
  setExpanded: (value: boolean) => void;
}

const ExpandedMenu = ({ expanded, setExpanded }: IExpandMenuProps) => {
  const menu = [
    { name: "pizza", logo: "/Pizza.svg" },
    { name: "drinks", logo: "/Drinks.svg" },
    { name: "sides", logo: "/Sides.svg" },
    { name: "dessert", logo: "/Dessert.svg" },
  ];

  const menuClassName = expanded ? `${s.menu} ${s.expanded}` : s.menu;

  return (
    <div className={menuClassName} onClick={() => setExpanded(false)}>
      <div className={s.menu__items}>
        {menu.map((item) => (
          <Link href={item.name} key={item.name} className={s.item}>
            <div className={s.item__wrapper}>
              <Image src={item.logo} alt="" height={55} width={55} />
              <span>{ucFirst(item.name)}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ExpandedMenu;

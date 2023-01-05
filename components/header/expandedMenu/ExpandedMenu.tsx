import pizzaLogo from "assets/Pizza.svg";
import drinksLogo from "assets/Drinks.svg";
import sidesLogo from "assets/Sides.svg";
import dessertLogo from "assets/Dessert.svg";
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
    { name: "pizza", logo: pizzaLogo },
    { name: "drinks", logo: drinksLogo },
    { name: "sides", logo: sidesLogo },
    { name: "dessert", logo: dessertLogo },
  ];

  const menuClassName = expanded ? `${s.menu} ${s.expanded}` : s.menu;

  return (
    <div className={menuClassName} onClick={() => setExpanded(false)}>
      <div className={s.menu__items}>
        {menu.map((item) => (
          <Link href={item.name} key={item.name} className={s.item}>
            <div className={s.item__wrapper}>
              <Image src={item.logo} alt="" />
              <span>{ucFirst(item.name)}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ExpandedMenu;

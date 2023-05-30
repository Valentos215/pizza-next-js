import Link from "next/link";
import Image from "next/image";

import { ucFirst } from "utils/utils";
import { NAV_MENU } from "constants/index";

import s from "./ExpandedMenu.module.scss";
interface IExpandMenuProps {
  expanded: boolean;
  setExpanded: (value: boolean) => void;
}

const ExpandedMenu = ({ expanded, setExpanded }: IExpandMenuProps) => {
  const menuClassName = expanded ? `${s.menu} ${s.expanded}` : s.menu;

  return (
    <div className={menuClassName} onClick={() => setExpanded(false)}>
      <nav className={s.menu__items}>
        {NAV_MENU.map((item) => (
          <Link href={item.link} key={item.title} className={s.item}>
            <div className={s.item__wrapper}>
              <Image src={item.logo} alt={item.title} height={55} width={55} />
              <span>{ucFirst(item.title)}</span>
            </div>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default ExpandedMenu;

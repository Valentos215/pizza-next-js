import { ucFirst } from "utils/utils";

import s from "./ExpandedMenu.module.scss";
import Image from "next/image";
import Link from "next/link";
import { NAV_MENU } from "constants/index";
interface IExpandMenuProps {
  expanded: boolean;
  setExpanded: (value: boolean) => void;
}

const ExpandedMenu = ({ expanded, setExpanded }: IExpandMenuProps) => {
  const menuClassName = expanded ? `${s.menu} ${s.expanded}` : s.menu;

  return (
    <div className={menuClassName} onClick={() => setExpanded(false)}>
      <div className={s.menu__items}>
        {NAV_MENU.map((item) => (
          <Link href={item.link} key={item.title} className={s.item}>
            <div className={s.item__wrapper}>
              <Image src={item.logo} alt="" height={55} width={55} />
              <span>{ucFirst(item.title)}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ExpandedMenu;

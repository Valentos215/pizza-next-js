import { useContext } from "react";
import Cart from "components/header/cart/Cart";
import ExpandedMenu from "components/header/expandedMenu/ExpandedMenu";
import { ExpandContext } from "contexts/expandContext";
import { NAV_MENU } from "constants/index";
import s from "components/header/Header.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const [expanded, setExpanded] = useContext(ExpandContext);

  const burgerClassName = expanded ? `${s.burger} ${s.active}` : s.burger;

  const { asPath } = useRouter();

  const linkClassName = (path: string) => {
    if (path === asPath) {
      return `${s.nav__link} ${s.active}`;
    }
    return s.nav__link;
  };

  return (
    <>
      <ExpandedMenu expanded={expanded} setExpanded={setExpanded} />
      <div className={s.header}>
        <div className="container">
          <div className={s.header__wrapper}>
            <Link href="/" className={s.header__logo}>
              <Image
                alt=""
                src="/Logo.svg"
                height={34}
                width={34}
                onClick={() => setExpanded(false)}
              />
              <Image
                alt=""
                src="/Logo_text.svg"
                height={34}
                width={216}
                onClick={() => setExpanded(false)}
              />
            </Link>
            <div className={s.nav}>
              {NAV_MENU.map((item) => (
                <Link
                  key={item.title}
                  href={item.link}
                  className={linkClassName(item.link)}
                >
                  {item.title}
                </Link>
              ))}
            </div>
            <div className={s.right_column}>
              <div onClick={() => setExpanded(false)}>
                <Cart />
              </div>
              <div
                className={burgerClassName}
                onClick={() => setExpanded(!expanded)}
              >
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

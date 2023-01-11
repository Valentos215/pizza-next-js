import Link from "next/link";
import { ReactNode } from "react";

interface IAProps {
  children: ReactNode;
  href: string;
  classname: string;
}

const A = ({ children, href, classname }: IAProps) => {
  return (
    <Link href={href} className={classname}>
      {children}
    </Link>
  );
};

export default A;

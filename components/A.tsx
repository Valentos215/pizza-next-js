import Link from "next/link";

interface IAProps {
  children: any;
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

import Link from "next/link";
import { useRouter } from "next/router";

const MenuLink = ({ children, path }) => {
  const router = useRouter();

  return (
    <li>
      <Link href={path}>
        <a className={router.pathname === path ? "active" : ""}>{children}</a>
      </Link>
    </li>
  );
};

export default MenuLink;

import Link from "next/link";
import { useRouter } from "next/router";

const MenuLink = ({ children, path, setIsClicked, isClicked }) => {
  const router = useRouter();

  return (
    <li>
      <Link href={path}>
        <a
          onClick={() => setIsClicked(!true)}
          className={
            router.pathname === path || router.pathname === `${path}/[id]`
              ? "active"
              : ""
          }>
          {children}
        </a>
      </Link>
    </li>
  );
};

export default MenuLink;

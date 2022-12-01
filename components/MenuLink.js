import Link from "next/link";
import { useRouter } from "next/router";

const MenuLink = ({ children, path, setIsClicked, isClicked }) => {
  const router = useRouter();

  return (
    <li>
      <Link href={path}>
        <a
          onClick={() => setIsClicked(!isClicked)}
          className={router.pathname === path ? "active" : ""}>
          {children}
        </a>
      </Link>
    </li>
  );
};

export default MenuLink;

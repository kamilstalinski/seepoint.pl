import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

const MenuLink = ({ children, path, setIsClicked, isClicked }) => {
  const router = useRouter();

  useEffect(() => {
    console.log(path);
  }, []);
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

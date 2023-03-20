import Link from "next/link";
import { useRouter } from "next/router";

const MenuLink = ({ children, path, setIsClicked, isClicked }) => {
  const router = useRouter();

  return (
    <li>
      <Link legacyBehavior href={path}>
        <a
          onClick={() => setIsClicked(!true)}
          className={
            router.asPath === path || router.asPath.includes(`${path}/`)
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

import Link from "next/link";
import Style from "styles/layout/nav.module.scss";
export default function Nav() {
  return (
    <nav className={Style.nav}>
      <Link href={"/"}>
        <p>Vertual Cube</p>
      </Link>
      <ul>
        <Link href={"/users"}>
          <li>users</li>
        </Link>
        <Link href={"/courses"}>
          <li>courses</li>
        </Link>
        <Link href={"/practices"}>
          <li>Practices</li>
        </Link>
      </ul>
    </nav>
  );
}

import Link from "next/link";
import LogoImg from "@/assets/logo.png";
import classes from "./main-header.module.css";
import Image from "next/image";
import MainHeaderBackground from "./main-header-background";
import NavLink from "./nav-link";

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />

      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image src={LogoImg} alt="NextLevel Food" priority />
          NextLevel Food
        </Link>

        <nav className={classes.nav}>
          <ul>
            <NavLink href="/community">Foodies Community</NavLink>
            <NavLink href="/meals">Browse Meals</NavLink>
            <NavLink href="/meals/share">Share Meal</NavLink>
          </ul>
        </nav>
      </header>
    </>
  );
}

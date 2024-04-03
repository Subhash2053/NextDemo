'use client';
import { usePathname } from "next/navigation";
import classes from "./nav-link.module.css";
import Link from "next/link";

export default function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
    const path = usePathname();
    return (
        <li>
            <Link href={href} className={path.startsWith(href) ? `${classes.link} ${classes.active}` : classes.link}>{children}</Link>
        </li>
    );
}
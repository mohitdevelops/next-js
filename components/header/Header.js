'use client';
import Link from "next/link";
import logo from "@/assets/logo.png";
import classes from "./Header.module.css";
import Image from "next/image";
import HeaderBackground from "./HeaderBackground";
import { usePathname } from "next/navigation";

export default function Header() {
	const path = usePathname();
	return (
		<>
			<HeaderBackground />
			<header className={classes.header}>
				<Link href="/" className={classes.logo}>
					<Image src={logo} alt="A plater" priority />
					Next Food
				</Link>
				<nav className={classes.nav}>
					<ul>
						<li>
							<Link
								href="/meals"
								className={path === "/meals" ? classes.active : undefined}
							>
								Meals
							</Link>
						</li>
						<li>
							<Link
								href="/community"
								className={path === "/community" ? classes.active : undefined}
							>
								Food Community
							</Link>
						</li>
					</ul>
				</nav>
			</header>
		</>
	);
}

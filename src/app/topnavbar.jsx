import Image from "next/image";
import Link from "next/link"
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuToggle} from "@nextui-org/react";


export default function TopNavbar() {
    return (
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
            <Navbar isBordered>
                <NavbarContent>
                    <NavbarBrand>
                    <Link href="/">
                    <Image
                    src="/averyperez.github.io/logocopy.png"
                    alt="KOSMOS Logo"
                    width={150}
                    height={37}
                    priority
                    />
                    </Link>
                    </NavbarBrand>
                </NavbarContent>

                <NavbarContent className="hidden sm:flex gap-4" justify="center">
                    <NavbarItem>
                    <Link color="foreground" href="about-us">
                        About Us
                    </Link>
                    </NavbarItem>
                    <NavbarItem isActive>
                    <Link href="covers" aria-current="page">
                        Covers
                    </Link>
                    </NavbarItem>
                    <NavbarItem>
                    <Link color="foreground" href="events">
                        Events
                    </Link>
                    </NavbarItem>
                    <NavbarItem>
                    <Link color="foreground" href="photos">
                        Photos
                    </Link>
                    </NavbarItem>
                    <NavbarItem>
                    <Link color="foreground" href="follow-us">
                        Follow Us
                    </Link>
                    </NavbarItem>
                </NavbarContent>
                
                <NavbarContent justify="end">
                    <NavbarItem className="hidden lg:flex">
                        <Link href="https://www.instagram.com/kosmoskpop/" target="_blank">IG</Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link href="https://www.youtube.com/@KOSMOSUCB" target="_blank">YT</Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link href="https://www.tiktok.com/@kosmosxucb" target="_blank">TT</Link>
                    </NavbarItem>
                </NavbarContent>

            </Navbar>
        </div>
    );
}
"use client";
import Image from "next/image";
import Link from "next/link"
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuToggle, NavbarMenuItem} from "@nextui-org/react";
import React from "react";

export default function TopNavbar() {

    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const menuItems = [
        "About Us",
        "Covers",
        "Events",
        "Photos",
        "Follow Us",
    ];
    
    return (
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex bg-black">
            <Navbar position="sticky" onMenuOpenChange={setIsMenuOpen} isBordered>
                <NavbarContent>
                    <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                    />
                    <NavbarBrand>
                    <Link href="/">
                    <Image
                    src="/averyperez.github.io//logocopy.png"
                    alt="KOSMOS Logo"
                    width={100}
                    height={25}
                    priority
                    />
                    </Link>
                    </NavbarBrand>
                </NavbarContent>

                <NavbarContent className="hidden sm:flex gap-4" justify="center">
                    <NavbarItem>
                    <Link href="about-us">
                        About Us
                    </Link>
                    </NavbarItem>
                    <NavbarItem>
                    <Link color="foreground" href="covers">
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
                    </NavbarItem >
                    <NavbarItem className="hidden lg:flex">
                        <Link href="https://www.youtube.com/@KOSMOSUCB" target="_blank">YT</Link>
                    </NavbarItem>
                    <NavbarItem className="hidden lg:flex">
                        <Link href="https://www.tiktok.com/@kosmosxucb" target="_blank">TT</Link>
                    </NavbarItem>
                </NavbarContent>
                <NavbarMenu>
                    {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                        color={
                            index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
                        }
                        className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex bg-black"
                        href="#"
                        size="lg"
                        >
                        {item}
                        </Link>
                    </NavbarMenuItem>
                    ))}
                </NavbarMenu>
            </Navbar>
        </div>
    );
}
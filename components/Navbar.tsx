"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import navData from "../data/data.json";

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    const handleNav = () => {
        setNav(!nav);
    };

    useEffect(() => {
        const sections = document.querySelectorAll("section");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.8 }
        );

        sections.forEach((section) => {
            observer.observe(section);
        });

        return () => {
            sections.forEach((section) => {
                observer.unobserve(section);
            });
        };
    }, []);

    return (
        <header className="py-8">
            <nav>
                <div className="w-full font-inter">
                    <div className="w-full flex justify-between items-center">
                        <div className="w-full flex items-center justify-between md:justify-start">
                            <Image
                                src="/mjoy-purple.svg"
                                width="85"
                                height="85"
                                alt="mjoy logo"
                            />
                            <div className="md:flex md:w-full md:items-center md:justify-between md:ml-8">
                                <ul className="hidden md:flex md:gap-x-6 md:flex-wrap">
                                    {navData.navItems.map((item) => {
                                        const activeClasses =
                                            activeSection ===
                                            item.link.substring(1)
                                                ? "font-bold relative inline-block before:absolute before:h-[2px] before:w-1/2 before:left-0 before:-bottom-1 before:bg-primary before:block"
                                                : "";

                                        return (
                                            <li
                                                key={item.name}
                                                className={`${activeClasses}`}
                                            >
                                                <Link href={item.link}>
                                                    {item.name}
                                                </Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                                <ul className="hidden md:flex md:items-center md:min-w-fit gap-x-1 lg:gap-x-4">
                                    <li className="cursor-pointer hover:opacity-75">
                                        <a
                                            href="https://www.facebook.com/MJOYVeldegem/"
                                            target="_blank"
                                        >
                                            <Image
                                                src="/facebook-icon.svg"
                                                width="28"
                                                height="28"
                                                alt="facebook"
                                            />
                                        </a>
                                    </li>
                                    <li className="cursor-pointer hover:opacity-75">
                                        <a
                                            href="https://www.instagram.com/mjoyveldegem/"
                                            target="_blank"
                                        >
                                            <Image
                                                src="/instagram-icon.svg"
                                                width="28"
                                                height="28"
                                                alt="instagram"
                                            />
                                        </a>
                                    </li>
                                </ul>
                                <button
                                    className="md:hidden"
                                    onClick={handleNav}
                                    aria-label="Open menu"
                                >
                                    <Image
                                        src="/open-menu.svg"
                                        width="25"
                                        height="25"
                                        alt="open menu"
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className={
                        nav
                            ? "md:hidden fixed left-0 top-0 w-full h-screen bg-primary"
                            : ""
                    }
                >
                    <div
                        className={
                            nav
                                ? "fixed right-0 top-0 w-full h-screen ease-in-out z-[100] px-10 py-8 duration-300"
                                : "fixed right-[-100%] top-0 ease-in-out z-[100] px-10 py-8 duration-300"
                        }
                    >
                        <div className="flex flex-col w-full h-full">
                            <div className="flex justify-between items-center mb-10">
                                <Image
                                    src="/mjoy-white.svg"
                                    width="100"
                                    height="100"
                                    alt="mjoy logo"
                                />
                                <button
                                    className="cursor-pointer hover:opacity-75"
                                    onClick={handleNav}
                                    aria-label="Close menu"
                                >
                                    <Image
                                        src="/close-menu.svg"
                                        width="35"
                                        height="35"
                                        alt="close menu"
                                    />
                                </button>
                            </div>
                            <ul className="text-secondary space-y-1 font-helvetica font-semibold uppercase text-[3rem] tracking-wide">
                                {navData.navItems.map((item) => {
                                    return (
                                        <li key={item.name}>
                                            <Link
                                                href="/"
                                                className="cursor-pointer ease-in-out duration-150 hover:opacity-75 hover:tracking-wider"
                                            >
                                                {item.name}
                                            </Link>
                                        </li>
                                    );
                                })}

                                <li>
                                    <Link
                                        href="#reserveren"
                                        className="cursor-pointer text-white ease-in-out duration-150 hover:opacity-75 hover:tracking-wider"
                                    >
                                        Reserveren?
                                    </Link>
                                </li>
                            </ul>
                            <ul className="flex space-x-4 items-center mt-auto">
                                <li className="cursor-pointer hover:opacity-75">
                                    <a
                                        href="https://www.facebook.com/MJOYVeldegem/"
                                        target="_blank"
                                    >
                                        <Image
                                            src="/facebook-icon.svg"
                                            width="35"
                                            height="35"
                                            alt="facebook"
                                        />
                                    </a>
                                </li>
                                <li className="cursor-pointer hover:opacity-75">
                                    <a
                                        href="https://www.instagram.com/mjoyveldegem/"
                                        target="_blank"
                                    >
                                        <Image
                                            src="/instagram-icon.svg"
                                            width="35"
                                            height="35"
                                            alt="instagram"
                                        />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;

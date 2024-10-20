"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <header>
            <nav>
                <div className="w-full h-20">
                    <div className="flex justify-between items-center w-full ">
                        <Image
                            src="/mjoy-purple.svg"
                            width="90"
                            height="90"
                            alt="mjoy logo"
                        />
                        <div>
                            <ul className="hidden md:flex">
                                <li className="ml-10">
                                    <Link href="/">Home</Link>
                                </li>
                                <li className="ml-10">
                                    <Link href="/">Home dsfdfsd</Link>
                                </li>
                                <li className="ml-10">
                                    <Link href="/">Home fdsfs</Link>
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
                                ? "fixed left-0 top-0 w-full h-screen ease-in-out z-[100] px-10 py-8 duration-300"
                                : "fixed left-[-100%] top-0 ease-in-out z-[100] px-10 py-8 duration-300"
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
                            <ul className="text-secondary space-y-2 font-helvetica font-semibold uppercase text-[3rem] tracking-wide">
                                <li>
                                    <Link
                                        href="/"
                                        className="cursor-pointer ease-in-out duration-150 hover:opacity-75 hover:tracking-wider"
                                    >
                                        Bistro
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/"
                                        className="cursor-pointer ease-in-out duration-150 hover:opacity-75 hover:tracking-wider"
                                    >
                                        Tearoom
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/"
                                        className="cursor-pointer ease-in-out duration-150 hover:opacity-75 hover:tracking-wider"
                                    >
                                        Zondags Ontbijt
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/"
                                        className="cursor-pointer ease-in-out duration-150 hover:opacity-75 hover:tracking-wider"
                                    >
                                        Evenementen
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/"
                                        className="cursor-pointer ease-in-out duration-150 hover:opacity-75 hover:tracking-wider"
                                    >
                                        Take Away
                                    </Link>
                                </li>
                                <li className="pt-6">
                                    <Link
                                        href="/"
                                        className="cursor-pointer ease-in-out duration-150 hover:opacity-75 hover:tracking-wider text-white"
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

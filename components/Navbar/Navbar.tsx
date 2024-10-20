"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const handleDrawerToggle = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    return (
        <header>
            <nav>
                <div className="fixed w-full h-20">
                    <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
                        <Image
                            src="/mjoy-purple.svg"
                            width="100"
                            height="100"
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
                            <div className="md:hidden">
                                <Image
                                    src="/open-menu.svg"
                                    width="25"
                                    height="25"
                                    alt="open menu"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="fixed left-0 top-0 w-full h-screen bg-primary px-10 py-8 z-[100] ease-in duration-300">
                    <div className="flex flex-col h-full">
                        <div className="flex justify-between items-center mb-10">
                            <Image
                                src="/mjoy-white.svg"
                                width="100"
                                height="100"
                                alt="mjoy logo"
                            />
                            <div className="cursor-pointer hover:opacity-75">
                                <Image
                                    src="/close-menu.svg"
                                    width="35"
                                    height="35"
                                    alt="close menu"
                                />
                            </div>
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
                                <a href="https://www.facebook.com/MJOYVeldegem/" target="_blank">
                                    <Image
                                        src="/facebook-icon.svg"
                                        width="35"
                                        height="35"
                                        alt="facebook"
                                    />
                                </a>
                            </li>
                            <li className="cursor-pointer hover:opacity-75">
                                <a href="https://www.instagram.com/mjoyveldegem/" target="_blank">
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
            </nav>
        </header>
    );
};

export default Navbar;

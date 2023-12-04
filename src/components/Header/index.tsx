"use client"
// import LogoLight from "@/assets/images/logo-light.png";
import Link from "next/link";
import { useState } from "react";
export default function Header() {
    const [isOpen, setMenu] = useState(true);
    const toggleMenu = () => {
        setMenu(!isOpen)
    }
    return (
        <nav className="navbar bg-black" id="navbar">
            <div className="container flex flex-wrap items-center justify-end">
                <a className="navbar-brand text-white" href="index.html">
                    <span className="inline-block dark:hidden">
                        {/* <Image src={LogoDark} className="l-dark" alt="" />
                        <Image src={LogoLight} className="l-light" alt="" /> */}
                        img
                    </span>
                    {/* <Image
                        src={LogoLight}
                        className="hidden dark:inline-block"
                        alt=""
                    /> */}
                    img
                </a>
                <div >
                    <Link
                        href={'/'}
                    >
                        <span className="nav-link">Home</span>
                    </Link>
                    <Link
                        href={'/'}
                    >
                        <span className="nav-link">About Us</span>
                    </Link>
                    <Link
                        href={'/'}
                    >
                        <span className="nav-link">Contact Us</span>
                    </Link>
                </div>


                {/* <div className="nav-icons flex items-center lg_992:order-2 ms-auto">
                    <ul className="list-none menu-social mb-0">
                        <li className="inline ms-1">
                            <Link href="#">
                                <span className="login-btn-primary">
                                    <span className="btn btn-sm btn-icon rounded-full bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 text-white">
                                        <i className="uil uil-github"></i>
                                    </span>
                                </span>
                                <span className="login-btn-light">
                                    <span className="btn btn-sm btn-icon rounded-full bg-gray-50 hover:bg-gray-200 dark:bg-slate-900 dark:hover:bg-gray-700 hover:border-gray-100 dark:border-gray-700 dark:hover:border-gray-700">
                                        <i className="uil uil-github"></i>
                                    </span>
                                </span>
                            </Link>
                        </li>
                        <li className="inline ms-1">
                            <Link href="#">
                                <span className="login-btn-primary">
                                    <span className="btn btn-sm btn-icon rounded-full bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 text-white">
                                        <i className="uil uil-twitter"></i>
                                    </span>
                                </span>
                                <span className="login-btn-light">
                                    <span className="btn btn-sm btn-icon rounded-full bg-gray-50 hover:bg-gray-200 dark:bg-slate-900 dark:hover:bg-gray-700 hover:border-gray-100 dark:border-gray-700 dark:hover:border-gray-700">
                                        <i className="uil uil-twitter"></i>
                                    </span>
                                </span>
                            </Link>
                        </li>
                        <li className="inline ms-1">
                            <Link href="#">
                                <span className="login-btn-primary">
                                    <span className="btn btn-sm btn-icon rounded-full bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 text-white">
                                        <i className="uil uil-instagram"></i>
                                    </span>
                                </span>
                                <span className="login-btn-light">
                                    <span className="btn btn-sm btn-icon rounded-full bg-gray-50 hover:bg-gray-200 dark:bg-slate-900 dark:hover:bg-gray-700 hover:border-gray-100 dark:border-gray-700 dark:hover:border-gray-700">
                                        <i className="uil uil-instagram"></i>
                                    </span>
                                </span>
                            </Link>
                        </li>
                    </ul>
                    <button
                        type="button"
                        className="collapse-btn inline-flex items-center ms-3 text-dark dark:text-white lg_992:hidden"
                        onClick={toggleMenu}
                    >
                        <span className="sr-only">Navigation Menu</span>
                        <i >menu</i>
                    </button>
                </div> */}

                <div
                    className={`${isOpen === true ? 'hidden' : 'block'} navigation lg_992:order-1 lg_992:flex`}
                    id="menu-collapse"
                >
                    <ul className="navbar-nav nav-light" id="navbar-navlist">
                        <Link
                            href={'/'}
                        >
                            <span className="nav-link">Home</span>
                        </Link>
                        <Link
                            href={'/'}
                        >
                            <span className="nav-link">About Us</span>
                        </Link>
                        <Link
                            href={'/'}
                        >
                            <span className="nav-link">Contact Us</span>
                        </Link>
                    </ul>
                </div>
            </div>
        </nav >
    )
}

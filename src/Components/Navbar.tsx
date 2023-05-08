import Link from 'next/link';
import React from 'react';
type NavbarProps = {
    transparence: boolean;
};

export default function Navbar({ transparence }: NavbarProps) {
    return (
        <div className={transparence? 'navbar bg-base-100/80 absolute' : 'navbar bg-base-100'}>
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        <SingelItem source="/" text="Home" />
                        <SingelItem source="/" text="About me" />
                        <SingelItem source="/" text="Sonstiges" />
                        <SingelItem source="/" text="test" />
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <SingelItem source="/" text="Home" />
                    <SingelItem source="/" text="About me" />
                    <SingelItem source="/" text="Sonstiges" />
                    <SingelItem source="/" text="test" />
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Call to Action</a>
            </div>
        </div>
    );
}

type singleItemProps = {
    source: string;
    text: string;
};
function SingelItem({ source, text }: singleItemProps) {
    return (
        <li>
            <Link href={source} scroll={false}>
                {text}
            </Link>
        </li>
    );
}

type multiItemProps = {
    source: string;
    text: string;
    items: Array<singleItemProps>;
};
function MultiItem({ source, text, items }: multiItemProps) {
    return (
        <li tabIndex={0}>
            <a className="justify-between">
                {text}
                <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
            </a>
            <ul className="p-2">
                {items.map((item, idx) => (
                    <SingelItem
                        key={idx}
                        source={item.source}
                        text={item.text}
                    />
                ))}
            </ul>
        </li>
    );
}

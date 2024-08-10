import React from 'react'
import { Link } from 'react-router-dom';
import { Collapse, initTWE } from "tw-elements";
  

const Navbar = () => {
 
  React.useEffect( () => {
    initTWE({ Collapse });
  }, [])

  return (
    <nav
    className="relative flex w-full flex-wrap items-center justify-between bg-blue-500 py-1"
    data-twe-navbar-ref>
    <div className="flex w-full flex-wrap items-center justify-between px-3">
        <Link className="" to="/">
            <img
            className="me-2 block w-[70px] h-[70px] object-cover rounded-full"
            src="/images/logo.PNG"
            alt="ACCTCI Logo"
            loading="lazy" />
        </Link>
        <button
        className="block border-0 bg-transparent px-2 text-black/50 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
        type="button"
        data-twe-collapse-init
        data-twe-target="#navbarSupportedContent4"
        aria-controls="navbarSupportedContent4"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span
            className="[&>svg]:w-7 [&>svg]:stroke-white dark:[&>svg]:stroke-white">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor">
            <path
                fill-rule="evenodd"
                d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                clip-rule="evenodd" />
            </svg>
        </span>
        </button>
        <div
        className="!visible mt-2 hidden flex-grow basis-[100%] items-center lg:mt-0 lg:!flex lg:basis-auto"
        id="navbarSupportedContent4"
        data-twe-collapse-item>
        <ul
            className="list-style-none me-auto flex flex-col ps-0 lg:mt-1 lg:flex-row"
            data-twe-navbar-nav-ref>
            <li
            className="my-4 ps-2 lg:my-0 lg:pe-1 lg:ps-2"
            data-twe-nav-item-ref>
            <a
                className="text-white uppercase  text-xs font-semibold md:font-light transition duration-200 hover:text-gray-100 hover:ease-in-out focus:text-gray-100 active:text-gray-100 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
                aria-current="page"
                href="#"
                style={{letterSpacing:1}}
                data-twe-nav-link-ref
                >African Caribbean Chamber of Trade Commerce & Industry</a>
            </li>
        </ul>

        <div className="flex items-center text-white">
            <Link
               to={'/'}
                data-twe-ripple-init
                data-twe-ripple-color="light"
                className="me-3 inline-block font-medium text-white rounded px-2 pb-2 pt-2.5 text-xs uppercase leading-normal focus:outline-none focus:ring-0">
               Home
            </Link>
            <Link
                to={'/about'}
                data-twe-ripple-init
                data-twe-ripple-color="light"
                className="me-3 inline-block text-white rounded px-2 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal focus:outline-none focus:ring-0">
               About
            </Link>
            <Link
                to={'/contact'}
                data-twe-ripple-init
                data-twe-ripple-color="light"
                className="me-3 inline-block text-white rounded px-2 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal focus:outline-none focus:ring-0">
               Contact
            </Link>
            <Link
                to={'/gallery'}
                data-twe-ripple-init
                data-twe-ripple-color="light"
                className="me-3 hidden inline-block text-white rounded px-2 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal focus:outline-none focus:ring-0">
                 Gallery
            </Link>
            <Link
                to={'/members'}
                data-twe-ripple-init
                data-twe-ripple-color="light"
                className="me-3 inline-block text-white rounded px-2 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal focus:outline-none focus:ring-0">
               Board Of Directors
            </Link>
        </div>
        </div>
    </div>
    </nav>
  )
}

export default Navbar
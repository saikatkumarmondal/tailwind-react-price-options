import React, { useState } from "react";
import Link from "./Link";

const navItems = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "About",
    path: "/about",
  },
  {
    id: 3,
    name: "Services",
    path: "/services",
  },
  {
    id: 4,
    name: "Blog",
    path: "/blog",
  },
  {
    id: 5,
    name: "Contact",
    path: "/contact",
  },
];
import { IoMenuSharp } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const links = navItems.map((route) => <Link route={route} key={route.id} />);
  return (
    <nav className="flex justify-between mx-10 mt-4">
      <span className="flex" onClick={() => setOpen(!open)}>
        {open ? (
          <IoClose className="md:hidden"></IoClose>
        ) : (
          <IoMenuSharp className="md:hidden"></IoMenuSharp>
        )}

        <ul
          className={`md:hidden duration-1000 absolute ${
            open ? "top-8" : "-top-40"
          } bg-amber-200`}>
          {links}
        </ul>

        <h3 className="ml-4">My Navbar</h3>
      </span>
      <ul className="md:flex hidden">{links}</ul>
      {/* <ul className='flex'>
        {navItems.map((link) => (
          <li className="mr-10">
            <a href={link.path}>{link.name}</a>
          </li>
        ))}
      </ul> */}
      {/* <ul className="flex">
              <li className='mr-10'><a href="/">Home</a></li>
              <li className='mr-10'><a href="/about">About</a></li>
              <li className='mr-10'><a href="/blog">Blog</a></li>
      </ul> */}

      <button>Signin</button>
    </nav>
  );
};
export default Navbar;

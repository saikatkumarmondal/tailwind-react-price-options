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
  const links = navItems.map((link) => <Link link={link} key={link.id}></Link>);
  const [open, setOpen] = useState(false);
  return (
    <nav className="flex justify-between mx-10 mt-4">
      <span className="flex" onClick={() => setOpen(!open)}>
        {open ? (
          <IoClose className="md:hidden"></IoClose>
        ) : (
          <IoMenuSharp className="md:hidden"></IoMenuSharp>
        )}
        <ul
          className={`md:hidden duration-1000 px-10 absolute ${
            open ? "top-8" : "-top-40"
          } bg-amber-300`}>
          {links}
        </ul>
      </span>
      <h3>My Navbar</h3>
      <ul className="md:flex hidden">{links}</ul>
      <button>Signin</button>
    </nav>
  );
};
export default Navbar;

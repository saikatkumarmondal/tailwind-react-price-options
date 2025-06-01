import React from 'react'
import Link from './Link';
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
  
export default function Navbar() {
  return (
    <nav>
      <ul className='flex'>
        {navItems.map((route) => (
          <Link route={route} key={route.id}></Link>
        ))}
      </ul>
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
    </nav>
  );
}

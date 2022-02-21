import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSnapshot } from "valtio";
import { states } from "../../states";
import { Button } from "../Buttons";

const links = [
  { title: "Home", link: "/" },
  { title: "About", link: "/about" },
  { title: "Contact", link: "/contact" },
];

const Navbar = (props) => {
  const { selectedLink } = useSnapshot(states);
  return (
    <nav className="py-8 flex px-4 items-center justify-between">
      <a href="">Logo</a>
      <ul className="flex">
        {links.map((link) => (
          <li
            key={link.title}
            className={`mx-4 ${
              selectedLink === link.title.toLowerCase() &&
              "border-b-2 border-red-500"
            } `}
          >
            <Link to={link.link}>{link.title}</Link>
          </li>
        ))}
      </ul>
      <Button>Get Started</Button>
    </nav>
  );
};

export default Navbar;

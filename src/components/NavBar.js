import React from 'react';
import { FiGithub, FiTwitter } from "react-icons/fi";
import { AiOutlineMedium } from "react-icons/ai";

const navStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
}

const NavBar = () => {
    return (
      <nav style={navStyle}>
        <a
          href="https://github.com/tolidevs"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiGithub />
          GitHub
        </a>
        <a
          href="https://twitter.com/tolidevs"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiTwitter />
          Twitter
        </a>
        <a
          href="https://medium.com/@t.benson"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiOutlineMedium />
          Medium
        </a>
      </nav>
    );
}

export default NavBar
import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
      <nav>
        <NavLink to="https://github.com/tolidevs">GitHub</NavLink>
        <NavLink to="https://twitter.com/tolidevs">Twitter</NavLink>
        <NavLink to="https://medium.com/@t.benson">Medium</NavLink>
      </nav>
    );
}

export default NavBar
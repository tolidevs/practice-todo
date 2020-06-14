import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav>
            <a href="https://github.com/tolidevs" target="_blank">
            GitHub
            </a>
            <a href="https://twitter.com/tolidevs" target="_blank">
            Twitter
            </a>
            <a href="https://medium.com/@t.benson" target="_blank">
            Medium
            </a>
        </nav>
    );
}

export default NavBar
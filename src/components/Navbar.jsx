import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => (
    <React.Fragment>
        <nav>
        <Link to='/'>Home Page</Link>
        {" "}
        <Link to='/posts'>Show Post</Link>
        {" "}
        <Link to='/albums'>Show Albums</Link>
        {" "}
        <Link to='/todos'>Show Todos</Link>
        {" "}
        <Link to='/user'>Show Users</Link>
        </nav>
    </React.Fragment>
)
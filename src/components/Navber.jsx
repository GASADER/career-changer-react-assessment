import React from "react"
import './Navber.css'

const Navbar = () => {
    return (
        <>
        <navbar>
            <ul className="navlink">
                <li><a href={'/'}>Home</a></li>
                <li><a href={'/owner'}>Owner</a></li>
            </ul>
        </navbar>
        </>
    )
}

export default Navbar
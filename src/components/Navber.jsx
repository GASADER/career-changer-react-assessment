import React from "react"
import './Navber.css'

const Navbar = () => {
    return (
        <>
            <ul className="navlink">
                <li><a href={'/'}>Home</a></li>
                <li><a href={'/owner'}>Owner</a></li>
            </ul>
            <hr />
        </>
    )
}

export default Navbar
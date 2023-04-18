import React from 'react';
import Navbar from './navber';


const Layout = ({ children }) => {
    return (
        <div>
            <Navbar/>
            {children}
            <button onClick={()=>changeRole()}>User Home Sector</button>
            <button onClick={()=>changeRole()}>Admin Home Sector</button>
        </div>
    )
}

export default Layout
import React from "react";
import Navbar from "../components/Navber";
import img from "../img/IMG_20230302_091947.jpg"
import "./Owner.css";


    const Owner = () => {
        //add variable style
        const style = {
            width:'40%', 
            height:'auto'
        }

        return(
            <>
            <Navbar/>
            <div className="owner-container">
                <h1 className="owner">Save - Group I - 16</h1>
                <div className="img-container">
                    <img src={img} style={style} alt="" />
                </div>
                <h3>Short Biography</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea repellat corporis eos ut. Magni maxime incidunt quam, similique recusandae tempore eaque, nulla consequuntur aut consectetur debitis, sequi quis quidem explicabo.</p>
            </div>
            </>
        )
    }

export default Owner
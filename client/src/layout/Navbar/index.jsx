import React from 'react'
import "./index.scss"
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav id='nav'>
            <div className="navbox">
                <div className="navleft">
                    <h2>Pulse<span>.</span></h2>
                </div>
                <div className="navmid">
                    <ul>
                        <li><Link to={"/"}>Home</Link></li>
                        <li><Link to={"/add"}>Add</Link></li>
                        <li><Link to={"/wishlist"}>Wishlist</Link></li>
                        <li><Link to={"/"}>Home</Link></li>
                        <li><Link to={"/"}>Home</Link></li>
                    </ul>
                </div>
                <div className="navright">
                    <p><span>Reservations</span>  652-345 3222 11</p>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
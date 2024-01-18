import React from 'react'
import "./index.scss"
import Navbar from '../../layout/Navbar'

const Header = () => {
    return (
        <header id='header'>
            <div className="headerbox">
                <div className="text">
                    <img src="https://preview.colorlib.com/theme/pulse/img/slider/slider-3.jpg.webp" alt="" />
                    <h2>Hygienic Food.
                    </h2>
                    <p>By Chef Francis Smith</p>
                </div>
            </div>
        </header>
    )
}

export default Header
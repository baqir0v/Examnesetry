import React, { useContext, useEffect, useState } from 'react'
import "./index.scss"
import { FaBowlFood } from "react-icons/fa6";
import { WishlistContext } from '../../Context/wishlistContext';
import { Link } from 'react-router-dom';


const Menu = () => {
    const [data, setData] = useState([])
    const {addToWishlist} = useContext(WishlistContext)

    const fetchData = async () => {
        const res = await fetch("http://localhost:5000/api/food")
        const jsonData = await res.json()
        setData(jsonData)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <section id='menu'>
            <div className="menubox">
                <div className="menutop">
                    <i><FaBowlFood /></i>
                    <h2>Our Menu</h2>
                </div>
                <div className="menubottom">
                    {data && data.map((item) => (
                        <ul key={item._id}>
                            <li>{item.name}</li>
                            <li>{item.ingredients}</li>
                            <li><button onClick={()=>addToWishlist(item)}>Wishlist</button></li>
                            <li><Link to={`/detail/${item._id}`}>Detail</Link></li>
                        </ul>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Menu
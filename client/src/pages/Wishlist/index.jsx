import React, { useContext } from 'react'
import Navbar from '../../layout/Navbar'
import { WishlistContext } from '../../Context/wishlistContext'

const Wishlist = () => {
    const {wishlist,addToWishlist} = useContext(WishlistContext)

  return (
    <div>
        {wishlist && wishlist.map((item)=>(
            <ul key={item._id}>
                <li>{item.name}</li>
                <li>{item.ingredients}</li>
                <li>{item.price}</li>
                <li><button onClick={()=>addToWishlist(item)}>Delete</button></li>
            </ul>
        ))}
    </div>
  )
}

export default Wishlist
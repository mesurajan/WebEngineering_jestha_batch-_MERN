
import {createContext, useState} from 'react'


export const CartContext = createContext()

function CartContexts({ children }) {
const[cartItems, setCartItems] = useState([])

const addToCart = (product) => {
  setCartItems([...cartItems, product]);
  console.log(`${product.name} added to cart!`);
  localStorage.setItem('cartItems', JSON.stringify([...cartItems, product]));
}


  return (
    <>
    <CartContext.Provider value={{cartItems, setCartItems, addToCart}}>
      {children}
      </CartContext.Provider>
    </>
  )
}

export default CartContexts

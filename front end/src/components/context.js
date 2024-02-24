import { createContext, useContext, useState } from "react"

const initialState = {
    cart: [],
    cartItemCount: () => 0,
    addToCart: () => null,
    removeFromCart: () => null,
    increaseQuantity: () => null,
    decreaseQuantity: () => null,
}

const CartContext = createContext(initialState)

const useCart = () => useContext(CartContext)

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(initialState.cart)

    const cartItemCount = () => {
        return cart.reduce((acc, item) => acc + item.quantity, 0)
    }

    const addToCart = (ServiceCard) => {
        const productIdx = cart.findIndex((item) => item.ServiceCard.id === ServiceCard.id)
        if (productIdx !== -1) {
            increaseQuantity(ServiceCard.id)
        } else {
            setCart([...cart, { ServiceCard, quantity: 1 }])
        }
    }

    const removeFromCart = (ServiceCardId) => {
        setCart(cart.filter((item) => item.ServiceCard.id !== ServiceCardId))
    }

    const increaseQuantity = (ServiceCardId) => {
        const copy = cart.slice()
        const productIdx = copy.findIndex((item) => item.ServiceCard.id === ServiceCardId)
        if (productIdx !== -1) {
            copy[productIdx].quantity += 1
            setCart(copy)
        }
    }

    const decreaseQuantity = (ServiceCardId) => {
        const copy = cart.slice()
        const productIdx = copy.findIndex((item) => item.ServiceCard.id === ServiceCardId)
        if (productIdx !== -1 && copy[productIdx].quantity > 1) {
            copy[productIdx].quantity -= 1
            setCart(copy)
        }
    }

    return (
        <CartContext.Provider
            value={{ cart, cartItemCount, addToCart, removeFromCart, increaseQuantity, decreaseQuantity }}
        >
            {children}
        </CartContext.Provider>
    )
}

export { useCart, CartProvider }

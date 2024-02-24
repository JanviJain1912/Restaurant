import {useNavigate } from "react-router-dom"
import { useCart } from './context';
import "./cart.css"

const SHIPPING_CHARGES = 25

const Cart = () => {
    const { cart, removeFromCart, increaseQuantity, decreaseQuantity } = useCart()

    const cartTotal = () => {
        return cart.reduce((acc, item) => acc + item.ServiceCard.Price * item.quantity, 0)
    }

    const round = (value, decimals) => {
        return Number(Math.round(value + "e" + decimals) + "e-" + decimals)
    }
    const navigate = useNavigate();
    const after = () => {
        navigate("/after");
      };

    return (
        <div className="cartWrapper">
            <div className="container">
                {cart.length >= 1 ? (
                    <div className="grid my-5">
                        <h2 style={{textAlign:"center", padding:"10px"}}>Order Summary</h2>
                        <div className="cartItem p-3">
                            
                            {cart.map((item) => (
                                <div className="item" key={item.ServiceCard.id}>
                                    <div className="grid py-3">
                                        <div className="itemImage">
                                            <img src={item.ServiceCard.image} alt="" />
                                        </div>
                                        <div className="itemDesc">
                                            <div className="title">
                                                <div className="titleLink">
                                                    Dish: {item.ServiceCard.name}
                                                </div>
                                            </div>
                                            <span className="price">Price: ${round(item.ServiceCard.Price * item.quantity, 2)}</span>
                                            {/* <div className="remove">Remove</div> */}
                                        </div>
                                        <div className="itemControl flex">
                                            <div>
                                                <button
                                                    onClick={() => increaseQuantity(item.ServiceCard.id)}
                                                    className="addQty"
                                                >
                                                    +
                                                </button>
                                                <span className="mx-1">{item.quantity}</span>
                                                <button
                                                    onClick={() => decreaseQuantity(item.ServiceCard.id)}
                                                    disabled={item.quantity === 1}
                                                    className="removeQty"
                                                >
                                                    -
                                                </button>
                                                <div
                                                    className="remove my-1"
                                                    onClick={() => removeFromCart(item.ServiceCard.id)}
                                                >
                                                    <button className="cart-button">Remove</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="payment p-3">
                            <h2>Payment Summary</h2>
                            <div className="summary py-3 my-2">
                                <div className="flex py-1">
                                    <span>Subtotal:</span>
                                    <span className="price">${round(cartTotal(), 2)}</span>
                                </div>
                                <div className="flex py-1">
                                    <span>Shipping Fee:</span>
                                    <span className="price">${SHIPPING_CHARGES}</span>
                                </div>
                                <div className=" flex py-1">
                                    <span>Total:</span>
                                    <span className="price">${round(cartTotal() + SHIPPING_CHARGES, 2)}</span>

                                </div>
                                <div className=" flex py-1">
                                    <span>Proceed to buy:</span>
                                    <button className="cart-button" onClick={after} style={{marginTop:"0px"}}>Buy</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="error cart-empty-card">
                        <p>&#9432; Cart is empty<br/><br/>Add Something to buy!!</p>
                        
                    </div>
                )}
            </div>
        </div>
    )
}

export { Cart }

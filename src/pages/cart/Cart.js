
import "./Cart.css";
import CartItem from "../../components/CartItem/CartItem";
import { useSelector } from "react-redux";
import { cartSelector } from "../../reducers/cartReducer.js"
import { clearCart, getTotal } from "../../reducers/cartReducer";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Cart = () => {
    
    const carts = useSelector(cartSelector);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getTotal());
    },[carts,dispatch])

    const handleClearCart = () => {
        dispatch(clearCart());
     };

    return (
        <div>
           
            <div className="cart-container mb-5">
                <h2>Shopping Cart</h2>
                {
                    carts.items.length === 0 ? (
                        <div className="cart-empty">
                            <p>Your cart is currently empty!</p>
                            <div className="start-shopping">
                                <Link to="/">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        fill="currentColor"
                                        className="bi bi-arrow-left"
                                        viewBox="0 0 16 16"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                                        />
                                    </svg>
                                    <span>Start Shopping</span>
                                </Link>
                            </div>
                        </div>
                    ) : (
                        <div className="mb-5">
                            <div className="titles ">
                                <h3 className="product-title fw-semibold">Product</h3>
                                <h3 className="price fw-semibold">Price</h3>
                                <h3 className="quantity fw-semibold">Quantity</h3>
                                <h3 className="total fw-semibold">Total</h3>
                            </div>
                            <div className="cart-items">
                                {carts &&
                                    carts.items.map((cartItem, i) => (
                                        <CartItem item={cartItem} key={i}/>
                                    ))}
                            </div>
                            <div className="cart-summary">
                                <button className="btn btn-outline-danger" onClick={() => handleClearCart()}>
                                    Clear All Carts
                                </button>
                                <div className="cart-checkout">
                                    <div className="subtotal">
                                        <h3>Subtotal</h3>
                                        <span className="amount">${carts.totalPrice}</span>
                                    </div>
                                    <p>Price inclusive of taxes and charges</p>
                                    <button>Proceed to Pay</button>
                                    <div className="continue-shopping">
                                        <Link to="/">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="20"
                                                height="20"
                                                fill="currentColor"
                                                className="bi bi-arrow-left"
                                                viewBox="0 0 16 16"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                                                />
                                            </svg>
                                            <span>Continue Shopping</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
           
        </div>
    );
}

export default Cart
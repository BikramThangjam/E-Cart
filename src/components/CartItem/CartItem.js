import "./CartItem.css";
import { useDispatch } from "react-redux";
import { add, removeItem, decreaseCart} from "../../reducers/cartReducer";
import { Link } from "react-router-dom";

const CartItem = (props) => {

    const cartItem = props.item;
    const dispatch = useDispatch();

    const handleAddToCart = (product) => {
         dispatch(add(product));
    };
    const handleDecreaseCart = (product) => {
         dispatch(decreaseCart(product));
    };

    const handleRemoveFromCart = (product) => {
        dispatch(removeItem(product.id));
    };

    return (
        <>
            <div className="cart-item" key={cartItem.id}>
                <div className="cart-product">
                    <Link  to={`/products/${cartItem.id}`}>
                        <img src={cartItem.image} alt={cartItem.title} />
                    </Link>
                    <div>
                        <h5 className="lead fs-4 px-3">{cartItem.title}</h5>
                        <button className="px-3" onClick={() => handleRemoveFromCart(cartItem)}>
                            Delete
                        </button>
                    </div>
                </div>
                <h5 className="cart-product-price display-6 fs-4">${cartItem.price}</h5>
                <div className="cart-product-quantity">
                    <button className="decreaseCart" onClick={() => handleDecreaseCart(cartItem)}>-</button>
                    <div className="count">{cartItem.quantity}</div>
                    <button className="increaseCart" onClick={() => handleAddToCart(cartItem)}>+</button>
                </div>
                <h5 className="cart-product-total-price fs-4">
                    ${parseFloat((cartItem.price * cartItem.quantity).toFixed(2))}
                </h5>
            </div>

        </>



    );
}
export default CartItem;
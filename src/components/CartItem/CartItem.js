import "./CartItem.css";
import { useDispatch } from "react-redux";
import { add, removeItem, decreaseCart} from "../../reducers/cartReducer";


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
                    <img src={cartItem.image} alt={cartItem.title} />
                    <div>
                        <h5>{cartItem.title}</h5>
                        <button onClick={() => handleRemoveFromCart(cartItem)}>
                            Delete
                        </button>
                    </div>
                </div>
                <h5 className="cart-product-price">${cartItem.price}</h5>
                <div className="cart-product-quantity">
                    <button className="decreaseCart" onClick={() => handleDecreaseCart(cartItem)}>-</button>
                    <div className="count">{cartItem.quantity}</div>
                    <button className="increaseCart" onClick={() => handleAddToCart(cartItem)}>+</button>
                </div>
                <h5 className="cart-product-total-price">
                    ${cartItem.price * cartItem.quantity}
                </h5>
            </div>

        </>



    );
}
export default CartItem;
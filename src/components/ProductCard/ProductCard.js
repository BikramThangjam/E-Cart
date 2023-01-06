import "./ProductCard.css";
import { useDispatch } from "react-redux";
import { add } from "../../reducers/cartReducer";
import { Link } from "react-router-dom";

const ProductCard = (props) => {

    const product = props.item;
    const dispatch = useDispatch();
    const setNotify = props.notify;
    const handleAddToCart = (product)=>{
        dispatch(add(product));
        setNotify(true);
    }

    return (
        <div className="productItem mb-3">
            <div className="card card-main">
                <Link className="card-img-link" to={`/products/${product.id}`}>
                    <img src={product.image} className="card-img px-3" alt="..."/>
                </Link>
                <div className="card-body">
                    <h6 className="text-center lead fs-6">{product.title}</h6>
                    <h3 className="text-center display-6 fs-3">${product.price}</h3>
                    {/* <p className="card-text ">{product.description}</p> */}
                    <button className=" mx-auto addCart-btn position-absolute bottom-0 start-50 translate-middle-x mb-3 " onClick={()=> handleAddToCart(product)}>Add To Cart</button>
                </div>
            </div>
        </div>
    )
}
export default ProductCard;
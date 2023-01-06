import "./Home.css";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useEffect, useState } from "react";
//  import { useSelector } from "react-redux";
//  import { cartQuantitySelector } from "../../reducers/cartReducer";
import CartAlert from "../../components/CartAlert/CartAlert";

const Home = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState();
    const [isCartAdded, setIsCartAdded] = useState(false);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(res => res.json())
            .then(jsonresponse => {
                setProducts(jsonresponse);
                setError();
            })
            .catch(err => {
                console.log("Oops! There seeems to be some errors.");
                setError(err);
            })

    }, []);
    
    const notifyAddCart= (val)=>{
        setIsCartAdded(val);
    }
    useEffect(()=>{
        setTimeout(() => {
            setIsCartAdded(false);
        }, 1000)
    },[isCartAdded]);

    return (
        <div>
            <div className="container-fluid mt-3 set-mb px-5 py-2 position-relative">
                {
                    isCartAdded && <CartAlert/>
                }
                {
                    error ? (<h2 className="mt-3 text-center display-6">No Products to Show!</h2>)
                        : (<div className="row">
                            {products.map((p, i) =>
                                <div className="col-12 col-xl-3 col-md-4 col-sm-6 mb-3" key={i}>
                                    <ProductCard item={p} notify = {notifyAddCart}/>
                                </div>
                            )}
                        </div>)

                }
            </div>
        </div>

    );
}

export default Home
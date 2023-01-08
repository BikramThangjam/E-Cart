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
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getProducts=()=>{

            setLoading(true);

            fetch("https://fakestoreapi.com/products")
            .then(res => res.json())
            .then(jsonresponse => {
                setProducts(jsonresponse);
                setLoading(false);
                setError();
            })
            .catch(err => {
                setLoading(false);
                console.log("Oops! There seeems to be some errors.");
                setError(err);
                
            })
        }

        getProducts();

    }, []);
    
    const notifyAddCart= (val)=>{
        setIsCartAdded(val);
    }
    useEffect(()=>{
        setTimeout(() => {
            setIsCartAdded(false);
        }, 1000)
    },[isCartAdded]);

    const Loading = ()=>{
        return (
            <div className="loading ">
                <div class="spinner-grow text-danger" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
                <div class="spinner-grow text-warning mx-2" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
                <div class="spinner-grow text-info" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }

    const ShowProducts = ()=>{
        return (
            <div className="row">
                {products.map((p, i) =>
                    <div className="col-12 col-xl-3 col-md-4 col-sm-6 mb-3" key={i}>
                            <ProductCard item={p} notify = {notifyAddCart}/>
                    </div>
                )}
            </div>
        )
    }

    return (
            <div className="container-fluid set-mb mt-3 px-5 py-2 position-relative">
                {
                    isCartAdded && <CartAlert/>
                }
                {
                    error ? (<h2 className="mt-3  text-center display-6">No Products to Show!</h2>)
                        : (
                            <div className="position-relative">
                                {loading ? <Loading /> : <ShowProducts/>}
                            </div>                  
                        )

                }
            </div>

    );
}

export default Home
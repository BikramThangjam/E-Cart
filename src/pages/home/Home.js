import "./Home.css";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useEffect, useState} from "react";
//  import { useSelector } from "react-redux";
//  import { cartQuantitySelector } from "../../reducers/cartReducer";


const Home = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState();

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


    return (
        <div>
            <div className="container-fluid mt-3 set-mb px-5 py-2">
                {
                    error ? (<h2 className="mt-3">No Products to Show</h2>) 
                    : (<div className="row">
                            {products.map((p, i) =>
                                <div className="col-12 col-xl-3 col-md-4 col-sm-6 mb-3" key={i}>
                                    <ProductCard item={p}   />
                                </div>
                            )}
                        </div>)
                    
                }
            </div>
        </div>

    );
}

export default Home
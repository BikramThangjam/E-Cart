import "./ProductDetail.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import Skeleton, {SkeletonTheme} from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
const ProductDetail = ()=>{

    const {id} = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{

        const getProduct = ()=>{
            setLoading(true);
            fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res=>res.json())
            .then(json=>{
                setProduct(json);
                //console.log(json);
                setLoading(false);
            })
            
        }
        getProduct();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    const Loading = ()=>{
        return (
            <SkeletonTheme baseColor="#313131"  highlightColor="#525252">
                <div className="col-md-6">
                    <Skeleton height={400}/>
                </div>
                <div className="col-md-6" style={{lineHeight:2}}>
                   <Skeleton height={50} width={300}/> 
                   <Skeleton height={40} count={3}/>
                   <Skeleton height={20} width={150}/>
                   <Skeleton height={55} width={150}/>
                   <Skeleton height={20} count={3}/>
                   <div className="d-flex gap-3">
                   <Skeleton height={50} width={100} />
                   <Skeleton height={50} width={100} />
                   </div>
                   
                     
                </div>
            </SkeletonTheme>
        )
    }

    const ShowProduct =()=>{
        return (
            <>
                <div className="col-md-6">
                    <img className="mx-auto" src={product.image} alt={product.title} height="350px" width="350px"/>
                </div>
                <div className="col-md-6">
                    <h4 className="text-uppercase text-black-50 mt-3">{product.category}</h4>
                    <h1 className="display-5">{product.title}</h1>
                    <p className="lead fw-bolder">
                        Rating {product.rating && product.rating.rate}
                        <i className="fa fa-star"></i>
                    </p>
                    <h3 className="display-6 fw-bold my-4">
                        ${product.price}
                    </h3>
                    <p className="lead">{product.description}</p>
                    <button className="btn btn-outline-dark">Add to Cart</button>
                    <button className="btn btn-dark ms-2 px-3 py-2">Go to Cart</button>
                </div>
            </>
        )
    }

    return (
        
           <div className="container py-5">
                <div className="row py-5">
                    {loading ? <Loading/> : <ShowProduct/>}
                </div>
            </div> 
        
    )
}
export default ProductDetail;
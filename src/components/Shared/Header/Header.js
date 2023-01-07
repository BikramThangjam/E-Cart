
import "./Header.css"
import { useSelector } from "react-redux";
import { cartSelector } from "../../../reducers/cartReducer";
import {Link} from "react-router-dom";
const Header = () => {
    const quantity = useSelector(cartSelector).items.length;
    //console.log(cartItemCount);
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow" >
            <div className="container-fluid ">
                <Link className="navbar-brand px-4" to="/">
                    <h2 >E-Cart</h2>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 navbar-items">
                        <li className="nav-item  p-2">
                            <Link className="nav-link active position-relative" to="/cart">
                                <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" fill="currentColor" className="bi bi-cart4" viewBox="0 0 16 16">
                                    <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                                </svg>
                                {
                                    quantity > 0 &&
                                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{quantity}</span>
                                }

                            </Link>
                        </li>
                        <li className="nav-item lead">
                            <Link className="nav-link active " aria-current="page" to="/register">Register</Link>
                        </li>
                        <li className="nav-item lead">
                            <Link className="nav-link active" to="/login">Login</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header
import "./App.css";
import React from 'react';
import './index.css';
import Header from "./components/Shared/Header/Header";
import Footer from "./components/Shared/Footer/Footer";
import Home from './pages/home/Home';
import ProductDetail from './components/ProductDetail/ProductDetail';
import Cart from './pages/cart/Cart';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
const App = () => {
    return (
        <>                         
            <BrowserRouter>
                <Header/>
                <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/products/:id" element={<ProductDetail/>} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path='/register' element={<Register />} />
                        <Route path='/login' element={<Login />} />
                </Routes>
                <Footer/>  
            </BrowserRouter>                     
        </>
    )
}

export default App;
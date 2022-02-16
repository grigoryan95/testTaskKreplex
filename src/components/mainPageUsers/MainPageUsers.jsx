import React, {useState} from 'react';
import './MainPageUsers.css';
import MyProducts from "./myProducts/MyProducts";
import AllProducts from "./allProducts/AllProducts";

const MainPageUsers = () => {
    const [myProducts, setMyProducts] = useState(false);
    const [allProducts, setAllProducts] = useState(false);
    const changeHandler = (event) => {
        setMyProducts(event);
    };
    const change = (event) => {
        setAllProducts(event);
    };

    return (
        <div className='mainPageUsers'>
            <button
                className='buttonProducts'
                onClick={() => {
                changeHandler(!myProducts)
                change(false)
            }}>MY PRODUCTS</button>
            <button
                className='buttonProducts'
                onClick={() => {
                changeHandler(false)
                change(!allProducts)
            }}>ALL PRODUCTS</button>
            {myProducts ? <MyProducts/> : null }
            {allProducts ? <AllProducts/> : null }
        </div>
    );
};

export default MainPageUsers;
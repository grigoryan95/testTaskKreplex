import React from 'react';
import './AllProducts.css';
import {useSelector} from "react-redux";

const AllProducts = () => {
    const allProducts = useSelector(data => data.products.allProducts)
    const allProductsUser = useSelector(data => data.products.myProducts)
    const allProduct = allProducts.map(item => {
        return (
            <div key={item.price}  className='oneItemProduct'>
                <p><span className='productItem'>Name: </span> {item.name}</p>
                <p><span className='productItem'>Model: </span> {item.model}</p>
                <p><span className='productItem'>Color: </span> {item.color}</p>
                <p><span className='productItem'>Price: </span> {item.price}$</p>
            </div>
        )
    })
    const allProductUser = allProductsUser.map(item => {
        return (
            <div key={item.price}  className='oneItemProduct'>
                <p><span className='productItem'>Name: </span> {item.name}</p>
                <p><span className='productItem'>Model: </span> {item.model}</p>
                <p><span className='productItem'>Color: </span> {item.color}</p>
                <p><span className='productItem'>Price: </span> {item.price}$</p>
            </div>
        )
    })
    return (
        <div className='allProducts'>
            <h1>ALL PRODUCTS</h1>
            {allProductUser}
            {allProduct}
        </div>
    );
};

export default AllProducts;
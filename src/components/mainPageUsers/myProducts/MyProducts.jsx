import React, {useState} from 'react';
import './MyProducts.css';
import {useDispatch, useSelector} from "react-redux";
import UserName from "./userName/UserName";
import {addProduct} from "../../../redux/actions/addProduct/addProduct";

const MyProducts = () => {
    const dispatch = useDispatch()
    const [name, setName] = useState('')
    const [model, setModel] = useState('')
    const [color, setColor] = useState('')
    const [price, setPrice] = useState('')
    const myProducts = useSelector(data => data.products.myProducts);
    const myProduct = myProducts.map((item) => {
        return (
            <div key={item.price}  className='oneItemUsers'>
                <p><span className='productItem'>Name: </span> {item.name}</p>
                <p><span className='productItem'>Model: </span> {item.model}</p>
                <p><span className='productItem'>Color: </span> {item.color}</p>
                <p><span className='productItem'>Price: </span> {item.price}$</p>
            </div>
        )
    })

    const handleSubmit = (event) =>  {
        event.preventDefault();
        dispatch(addProduct({
                name,
                model,
                color,
                price
        }));
        setColor('');
        setPrice('');
        setModel('');
        setName('');
    }

    return (
        <div className='usersName'>
            <h1>My Products</h1>
            <UserName/>
            <div className='boxMyProducts'>
                {myProduct}
                <div className='addProduct'>
                    <p>Add Product</p>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label className='productItem' htmlFor="name">Name</label>
                            <input
                                value={name}
                                onChange={e => setName(e.target.value)}
                                id='name'
                                type="text"
                            />
                        </div>
                        <div>
                            <label className='productItem' htmlFor="model">Model</label>
                            <input
                                value={model}
                                onChange={e => setModel(e.target.value)}
                                id='model'
                                type="text"
                            />
                        </div>
                        <div>
                            <label className='productItem' htmlFor="color">Color</label>
                            <input
                                value={color}
                                onChange={e => setColor(e.target.value)}
                                id='color'
                                type="text"
                            />
                        </div>
                        <div>
                            <label className='productItem' htmlFor="price">Price</label>
                            <input
                                value={price}
                                onChange={e => setPrice(e.target.value)}
                                id='price'
                                type="text"
                            />
                        </div>
                        <button className='addProductButton'>Add Product</button>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default MyProducts;
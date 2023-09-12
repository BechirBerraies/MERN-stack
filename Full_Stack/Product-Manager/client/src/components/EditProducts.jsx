import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";
    
const Update = (props) => {
    const { id } = useParams();
    const [Title, setTitle] = useState('');
    const [Price, SetPrice] = useState('');
    const [Description,SetDescription]= useState('');
    
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' + id )
            .then(res => {
                setTitle(res.data.Title);
                SetPrice(res.data.Price);
                SetDescription(res.data.Description)
            })
    }, []);
    
    const updateProduct = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/product/' + id, {
            Title,
            Price,
            Description
        })
            .then(res => console.log(res))
            .catch(err => console.error(err));
    }
    
    return (
        <div>
            <h1>Update a Person</h1>
            <form onSubmit={updateProduct}>
                <p>
                    <label>Title</label><br />
                    <input type="text" 
                    name="Title" 
                    value={Title} 
                    onChange={(e) => { setTitle(e.target.value) }} />
                </p>
                <p>
                    <label>Price</label><br />
                    <input type="text" 
                    name="Price"
                    value={Price} 
                    onChange={(e) => { SetPrice(e.target.value) }} />
                </p>
                <p>
                    <label>Description</label><br />
                    <input type="text" 
                    name="Description"
                    value={Description} 
                    onChange={(e) => { SetDescription(e.target.value) }} />
                </p>
                

                <input type="submit" />
            </form>
        </div>
    )
}
    
export default Update;
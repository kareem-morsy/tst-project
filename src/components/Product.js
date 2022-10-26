import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function AddNew() {
    let {productid} = useParams();
    let api_url = (`http://localhost:9000/products/${productid}`)
    const [product , setProduct] = useState({})
    useEffect(()=>{
        fetch(api_url)
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data);
            setProduct(data);
        })
    },[])

    return (
        <div className='row'>
            <div className='col-md-6'>
                <div className='product-img'>
                    <img src={product.image} alt={product.title} />
                </div>
            </div>

            <div className='col-md-6 col-12'>
                <div className='product-card'>
                    <h4>{product.title}</h4>
                </div>
            </div>
        </div>
        
    )
}

export default AddNew
import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';

function Products() {


    let base_url = "http://localhost:9000/products";
    const [Products,setProducts] = useState([]);
    useEffect(() => {
        getProducts()
    }, [])

    const getProducts =() =>{
        fetch(base_url).then((res) => res.json()).then((data) => {
            console.log('data', data)
            setProducts(data)
        })
    }

    const deletItem =(productid)=>{
        fetch(`http://localhost:9000/products/${productid}`,{method : "DELETE"})
        .then((res)=>res.data)
        .then((data)=>getProducts())
    }
   


    // const deletItem =(id)=>{
    //     let arr = Products;
    //     arr.splice(0,id);
    //     setProducts(arr)
    //     console.log(arr)

    // }



    return ( 
    <> 
        <h1 className='mt-4 mb-3'>All Products</h1>

        <Link to='/add' className='btn btn-success p-2 mt-4'>Add New product</Link>
        <table className="table table-bordered">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Category</th>
                    <th>title</th>
                    <th>description</th>
                    <th>Operation</th>
                </tr>
            </thead>


            <tbody>
                {Products.map((product)=>{
                    return(
                        <tr key={product.id}>
                            <th>{product.id}</th>
                            <th>{product.category.slice(0,15)}...</th>
                            <th>{product.title.slice(0,10)}...</th>
                            <th>{product.description.slice(0,50)}...</th>
                            <th>        
                                <button type="button" className="btn btn-danger btn-sm" onClick={()=>deletItem(product.id)}>delete</button>
                                <button className="btn btn-info btn-sm m-2">Edit</button>
                                <Link to={`/products/${product.id}`} className="btn btn-primary btn-sm">View</Link>                           
                            </th>
                        </tr>
                    )
                })}
                
            </tbody>
        </table>
    </>
  )
}

export default Products
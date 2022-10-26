import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function AddNew() {
    const navigate = useNavigate();
    const [prductId , setPrductId] = useState(0);
    const [Category , setCategory] = useState("");
    const [title , settitle] = useState("");
    const [description , setdescription] = useState("");

    const submitForm = (e)=>{
        e.preventDefault();
        fetch("http://localhost:9000/products",{
            method : "POST",
            headers : {
                "Content-Type": "Application/json"
            },

            body : 
                JSON.stringify({
                    id : prductId,
                    category : Category,
                    title:title,
                    description : description
                })
            
        })
        .then((res)=> res.json())
        .then((data)=>{
            navigate('/')
        })
    }

  return (
    <>

        <div className='add-form'>
            <form onSubmit={submitForm}>
                <div className='form-group'>
                    <label>Product ID</label>
                    <input type='number' className="form-control" onChange={(e)=>setPrductId(e.target.value)} />
                </div>

                <div className='form-group'>
                    <label>Category</label>
                    <input type='text' className="form-control" onChange={(e)=>setCategory(e.target.value)}/>
                </div>

                <div className='form-group'>
                    <label>title</label>
                    <input type='text' className="form-control" onChange={(e)=>settitle(e.target.value)}/>
                </div>

                <div className='form-group'>
                    <label>description</label>
                    <input type='text' className="form-control" onChange={(e)=>setdescription(e.target.value)}/>
                </div>

                <button className='btn btn-primary'>Add</button>
            </form>
        </div>
    </>
  )
}

export default AddNew
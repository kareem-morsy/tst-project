import React from 'react'
import { Link } from 'react-router-dom'

function SideBar() {
    return ( 
    <>
        <ul>
            <li>
                <Link to='/'>Get All Products</Link>
            </li>
        </ul>
    </>
  )
}

export default SideBar
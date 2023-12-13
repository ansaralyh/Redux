import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';

const Shop = () => {
  return (
    <div >
        <h1 className='mb-5 mt-5'>Buy Addidas</h1>
      <button className='btn btn-danger mx-2'>-</button>
      Add this item to cart
      <button className='btn btn-success mx-2'>+</button>
    </div>
  )
}

export default Shop

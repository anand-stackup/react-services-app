import React from 'react'
import './Categories.css'
import CategoryList from './CategoryList'

const Categories = ({ product, name}) => {

    // console.log(product);
  return (
    <div className='categories' >
        <h3>{name}</h3>
        <div className='pdts'>
            {product.map((data) => (<CategoryList data={data} key={data.productId}/>))}
        </div>
    </div>
  )
}

export default Categories
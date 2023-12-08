import React, { useCallback, useEffect, useState } from 'react'
import './MainSection.css'
import Categories from './Categories'
import axios from 'axios'


const MainSection = () => {
    const [categories, setCategories] = useState([])
    const [products, setProducts] = useState([])

    function getCategories() {
        axios.get('http://localhost:4001/api/categories')
            .then((categories) => {setCategories(categories.data)})
    }
    
    function getProducts() {
        axios.get('http://localhost:4001/api/products')
        .then((products) => {setProducts(products.data)})
    }
    
    console.log(categories,products);

    const logResult = useCallback(() => {
        return 2 + 2;
      }, []);

    useEffect(()=> {
        getCategories()
        getProducts()
    },[logResult])


  return (
    <div className='main-section'>
        <h2>Our services</h2>
        {categories.map((category)=> (<Categories product={products.filter((data)=> (data.categoryId === category._id))} name={category.categoryName} key={category._id} />))}
    </div>
  )
}

export default MainSection
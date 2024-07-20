
import React from 'react';
import { useState, useEffect } from 'react'
import './Home.css'
import Product from '../components/Product.jsx'
import Carousel from '../components/Carousel.jsx'
import { Link } from 'react-router-dom';

import '../App.css'

const URL ="https://fakestoreapi.com"

function Home() {

    const [products, setProducts] = useState([])
    const [showProducts, setShowProducts] = useState(true)
    let [filas, setFilas] = useState([])
  
    const getProducts =async ()=>{
        const response = await fetch(`${URL}/products?limit=10`)
        const data = await response.json()
  
        setProducts(data)
    }
  
    useEffect(()=>{
      getProducts()
    }, [])
  
   
    setFilas= products;
  
    console.log(showProducts)
    
  
    return (
      
      <section className='justify-center w-full border-2 border-red-500'>

        <Carousel/>
        <h1 className='title'>ENVÍOS A TODO EL PAÍS</h1>
        <h3 className='subtitle'>Mìnimo de compras $50.00</h3>
        
        <div className="content-center max-w-screen-xl mx-auto rounded-xl shadow-md overflow-hidden  ">
          <div className="row  md:flex ">
        
            {showProducts ? (
              
              products && products.length > 0 && products.map(product =>(
                
                <Product key={product.id} data ={product} />
      
              ))
            ) : (
              <p></p>
            )
            
            }
         
          </div>
        </div>
    
      </section>
    )

}

export default Home;

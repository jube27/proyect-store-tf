import React from 'react';
import { useState, useEffect } from 'react'
import Product from '../components/Product.jsx'
import "./Salepag.css"


    const URL ="https://fakestoreapi.com"

function Salepag() {



    const [products1, setProducts1] = useState([])
    const [showProducts1, setShowProducts1] = useState(true)
    let [filas1, setFilas1] = useState([])
  
    const getProducts1 =async ()=>{
        const response = await fetch(`${URL}/products?limit=12`)
        const data1 = await response.json()
  
        setProducts1(data1)
    }
  
    useEffect(()=>{
      getProducts1()
    }, [])
  
   
    setFilas1= products1;

    return (
        <section>
            <div className='sectionsale'>
                <h1 className='titlesale'>FINAL SALE</h1>
                <h3 className='subtitlesale'>Hasta 60%off en productos de temporada</h3>
            
            </div>

            <div className="content-center max-w-screen-xl mx-auto rounded-xl   ">
          <div className="row  md:flex ">
        
            {showProducts1 ? (
              
              products1 && products1.length > 0  && products1.map(product =>(
                
                <Product key={product.id} data ={product} /> 
      
              ))
            ) : (
              <p></p>
            )
            
            }
         
          </div>
        </div>







        </section>
    );
}

export default Salepag;

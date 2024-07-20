
import React from 'react';
import {Link} from "react-router-dom"
import "./HeadPag.css"


function HeadPag (){


return (

    <section className="justify-center w-full fixed top-0 left-0 right-0 z-50 bg-white border-1 border-b-gray-400/50 shadow-md">


        <nav className="  flex content-center w-full ">
            <div className="content-center">
                <figure>
                    <img src="/src/assets/image/Logo.jpg" alt="" />
                </figure>
            </div>
            <div className="content-center font-mono ">
                <ul className="inline-flex m-10 ">
                    <li className="mr-20"><Link to="/">Inicio</Link></li>
                    <li className="mr-20" ><Link to="/pagina2">Productos</Link></li>
                    <li className="mr-20"><Link to="/pagina2">Sale</Link></li>
                    <li className="mr-20"><Link to="/pagina2">Tiendas</Link></li>
                </ul>
            </div>
            <div className="container-fluid content-center ">
                <form className="d-flex justify-center " role="search">
                <button className=" bg-white rounded-full mr-2" type="submit">
                    <img src="/src/assets/icons/shopping-cart-thin-svgrepo-com.svg" width="50px"/>
                    </button>
                    <input className="form-control me-2 " type="search" placeholder="Search" aria-label="Search"/>
                    <button className=" hover:bg-white " type="submit">
                    <img src="/src/assets/icons/search-alt-1-svgrepo-com.svg" width="50px"/>
                    </button>
                </form> 
            </div> 
        </nav>
    </section>




    
)

}
export default HeadPag
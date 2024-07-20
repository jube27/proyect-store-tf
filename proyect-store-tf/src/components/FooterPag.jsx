import React from 'react';
import {Link} from "react-router-dom"
import "./FooterPag.css"

function FooterPag (){


    return (
    <footer className="border-2 border-red-500 mt-24 bg-black   w-full bottom-0 left-0 right-0 z-50">
      <div className="container">
        <div className="row">
          <div className="col-lg-4  border-2 border-red-500">
          <div className="content-center border-2 border-red-500">
                <figure className="border-2 border-red-500">
                    <img src="/src/assets/images/Logo.jpg" className="scale-50 border-2 border-red-500" alt="" />
                </figure>
            </div>
            <ul className="border-2 border-red-500">
              <li><Link to="/">Inicio</Link></li>
              <li><Link to="/pagina2">Acerca de</Link></li>
              <li><Link to="/pagina2">Contacto</Link></li>
            </ul>
          </div>
          <div className="col-lg-4">
    
            <p>Correo electrónico: contacto@alivestore.com</p>
            <p>Teléfono: 123-456-7899</p>
          </div>
          <div className="col-lg-4">
            <h3>iconos redes sociales</h3>
            <p>fc twitter etc</p>
          </div>
        </div>
      </div>
    </footer>
    )
    
    }
    export default FooterPag
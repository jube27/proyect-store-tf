import React from 'react';
import {Link} from "react-router-dom"
import "./FooterPag.css"

function FooterPag (){


    return (
    <footer className=" mt-24    w-full bottom-0 left-0 right-0 z-50">
      <div className="container">
        <div className="row">
          <div className="col-lg-3  ">
          <div className="content-center">
                <figure className="logoo">
                    <img src="/src/assets/images/Logo.jpg" className="scale-50 " alt="" />
                </figure>
            </div>
            <ul className="">
              <li  className='m-2'><Link to="/pagina2">Sobre Nosotros</Link></li>
              <li  className='m-2'><Link to="/pagina2">Política de Privacidad</Link></li>
              <li  className='m-2'><Link to="/pagina2">Términos y Condiciones</Link></li>
              <li  className='m-2'><Link to="/pagina2">Legales Generales</Link></li>
            </ul>
          </div>
          <div className="col-lg-3">
            <h3 className='seccionf'>Servicio al Cliente</h3>
            <ul >
                <li  className='m-2'><Link to="/pagina2">Contáctanos</Link></li>
                <li  className='m-2'><Link to="/pagina2">Preguntas frecuentes</Link></li>
                <li  className='m-2'><Link to="/pagina2">Libro de reclamaciones</Link></li>
                <li  className='m-2'><Link to="/pagina2">Contacto</Link></li>
              </ul>
          </div>
          <div className="col-lg-3">
            <h3 className='seccionf'>Tus Pedidos</h3>
            <ul className="">
                <li className='m-2'><Link to="/pagina2">Seguimiento de Pedido</Link></li>
                <li className='m-2'><Link to="/pagina2">Formas de pago</Link></li>
                <li className='m-2'><Link to="/pagina2">Cambios y devoluciones</Link></li>
                <li className='m-2'><Link to="/pagina2">Envíos</Link></li>
              </ul>
          </div>
          <div className="col-lg-3">
          <h3 className='seccionf'>Síguenos</h3>
            <ul className=' flex justify-center '>
                <li className='m-1 '><Link to="/pagina2"><img className="hover:border-4 hover:rounded-2xl hover:border-zinc-50" src="/src/assets/icons/facebook-2.svg" width="30px" /></Link></li>
                <li className='m-1'><Link to="/pagina2"><img className="hover:border-4 hover:rounded-2xl hover:border-zinc-50" src="/src/assets/icons/instagram-1.svg" width="30px" /></Link></li>
                <li className='m-1'><Link to="/pagina2"><img className="hover:border-4 hover:rounded-2xl hover:border-zinc-50" src="/src/assets/icons/twitter-1.svg" width="30px" /></Link></li>
                <li className='m-1'><Link to="/pagina2"><img className="hover:border-4 hover:rounded-2xl hover:border-zinc-50" src="/src/assets/icons/whatsapp-1.svg" width="30px" /></Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
    )
    
    }
    export default FooterPag

  
import React from 'react';
import {Routes,Route} from 'react-router-dom'
import MainLayout from './layouts/MainLayout.jsx'
import Home from './pages/Home.jsx'
import Page2 from './pages/Page2.jsx'

import './App.css'
import Salepag from './pages/Salepag.jsx';





function App() {
 
  return (
       
    <Routes>
        <Route path='/' element={<MainLayout />} >

            <Route index element={<Home />} />
            <Route path='/pagina2' element={<Page2 />} />
            <Route path='/salepag' element={<Salepag />} />
            
        </Route>
      </Routes>

);

}

export default App

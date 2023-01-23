import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from '../pages/Home/Home'
import Error from "../pages/Error/Error"
import Website from '../pages/Website/Website'

import Application from '../pages/Application/Application'


function RouterPage() {
    return (
      
        <Routes>
  
          <Route exact path="/" element={<Home />}/>

          <Route path="/website" element={<Website/>}/>

          <Route path="/application" element={<Application/>}/>

          <Route path="/*" element={<Error />}/>
            
        </Routes>
        
    );
  }
  
  export default RouterPage;
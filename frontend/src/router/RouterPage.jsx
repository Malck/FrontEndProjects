import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from '../pages/Home/Home'
import Error from "../pages/Error/Error"
import Website from '../pages/Website/Website'

import Nft from "../creation/Nft_Card/Nft"
import Rating from '../creation/Rating_component/Rating'



function RouterPage() {
    return (
      
        <Routes>
  
          <Route exact path="/" element={<Home />}/>

          <Route path="/website" element={<Website/>}/>

          <Route path="/nft" element={<Nft/>}/>

          <Route path="/rating" element={<Rating/>}/>

          <Route path="/*" element={<Error />}/>
            
        </Routes>
        
    );
  }
  
  export default RouterPage;
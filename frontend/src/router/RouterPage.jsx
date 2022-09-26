import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from '../pages/Home'
import Error from "../pages/Error.jsx"
import Project from "../pages/Project"
import Nft from "../creation/Nft_Card/Nft"
import Rating from '../creation/Rating_component/Rating'
import LocationPage from "../pages/Location"


function RouterPage() {
    return (
      
        <Routes>
  
          <Route exact path="/" element={<Home />}/>

          <Route path="/project" element={<Project/>}/>

          <Route path="/nft" element={<Nft/>}/>

          <Route path="/rating" element={<Rating/>}/>


          <Route  path='/locations/:id' element={<LocationPage />}/>
          

          <Route path="/*" element={<Error />}/>
            
        </Routes>
        
    );
  }
  
  export default RouterPage;
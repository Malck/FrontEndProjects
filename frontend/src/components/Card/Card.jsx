import React from 'react';
//import {Link}  from "react-router-dom";
 

function Card({cover,title,id,url}) {
    return(
        <div className='card' >   

            <a href={`${url}`} target="blank">            

            <img className="card-image" src={cover} alt="cardImage" />  

            <h1 className='card-title'>{title}</h1>

            </a> 

        </div>
    )
}

export default Card;
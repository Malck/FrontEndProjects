import "./website.css";
//import { Link } from "react-router-dom"
import "../../components/Card/card.css"

import Header from "../../components/Header/Header"

import data from "../../data"
import Card from "../../components/Card/Card"

function Website() {

    return (
        
        <div className="projects-main">

            <Header/>

            <h1 className="website-h1">Integration maquette to website</h1>
            
            <div className="cardall-page">

                {data.map((elt) => (
                    <div key={elt.id} className='somewebsite'>
                        <Card title={elt.title} cover={elt.cover} id={elt.id} url={elt.url}/>
                    </div>
                ))}

            </div>

            <div className="espace"> 
            
            <br/> 
            <br/> 
            <br/> 
            
            </div>
        
        </div>
       
    )
}
export default Website;
import Header from "../../components/Header/Header"
import "./application.css"
//import { Link } from "react-router-dom"

import datapp from "../../datapp"
import Card from "../../components/Card/Card"

function Application() {

    return (
        
        <div className="projects-main">

            <Header/>

            <h1 className="website-h1">List of some Applications</h1>
                
            
            <div className="cardall-page">

          {datapp.map((elt) => (
                        <div key={elt.id} className='someapp'>
                            <Card title={elt.title} cover={elt.cover} id={elt.id} url={elt.url}/>
                        </div>
                    ))}

          </div>
        
        </div>

       
    )
}
export default Application;
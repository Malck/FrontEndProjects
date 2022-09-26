import "../styles/projects.css";
import { Link } from "react-router-dom"
import "../styles/card.css"

import data from "../data"
import Card from "../components/Card"

function Project() {

    return (
        <div className="projects-main">
            <div className="projects-react">
                Projet react
            </div>
            
            <Link to="/nft" className="project-link1" title='NFT'>NFT link </Link>

            <Link to="/rating" className="project-link2" title='Rating'>Rating link </Link>
            
            <div className="cardall-page">

          {data.map((elt) => (
                        <div key={elt.id} className='location'>
                            <Card title={elt.title} cover={elt.cover} id={elt.id} url={elt.url}/>
                        </div>
                    ))}

          </div>
        
        </div>

       
    )
}
export default Project;
import "../styles/home.css"
import { Link } from "react-router-dom"
import Header from "../components/Header.jsx"

//import data from "../data"
//import Card from "../components/Cards"

export default function HomePage() {

    

    return (

        <div className="homepage">

            <Header/>

            <h1 className="slogan">PAGE D'ACCUEIL DU SITE</h1>
        
            

            <details>
                <summary>Dropdown</summary>
                <p>drop1</p>
                <button>drop2</button>
            </details>

            <Link to="/project" className="project-link" title='Project'>Project: </Link>

        
        </div>

    )
}

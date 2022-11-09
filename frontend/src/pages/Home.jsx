import "../styles/home.css"
import { Link } from "react-router-dom"
import Header from "../components/Header.jsx"

//import data from "../data"
//import Card from "../components/Cards"

export default function HomePage() {

    

    return (

        <div className="homepage">

            <Header/>

            <br />

            <div className="container-first">
                <h1><span>Discover </span><span>my </span><span>projects </span></h1>
            </div>

            <div className="container-btns">
                <button className="btn-first b1">Website</button>
                <button className="btn-first b2">Application</button>

            </div>

            <Link to="/project" className="project-link" title='Project'>Project: </Link>

        
        </div>

    )
}

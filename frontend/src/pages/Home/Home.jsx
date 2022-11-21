import "./home.css"
import { Link } from "react-router-dom"

import Header from "../../components/Header/Header"
import {gsap} from "gsap"

//import data from "../data"
//import Card from "../components/Cards"

export default function HomePage() {

    return (

        <div className="homepage">

            <Header/>

            <div className="lignes">
                <div className="l1"></div>
                <div className="l2"></div>
            </div>

            <div className="container-first">
                <h1><span>Discover </span><span>my </span><span>projects </span></h1>
            </div>

            <div className="container-btns">
                <Link to="/website" className="project-link" title='Project'> <button className="btn-first b1">Website</button> </Link>
                <Link to="/application" className="project-link" title='Project'> <button className="btn-first b2">Application</button> </Link>
            </div>

        </div>

    )

     /*ici pour le js ? */
     

}

/*<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.3/gsap.min.js" integrity="sha512-gmwBmiTVER57N3jYS3LinA9eb8aHrJua5iQD7yqYCKa5x6Jjc7VDVaEA0je0Lu0bP9j7tEjV3+1qUm6loO99Kw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>*/

const titreSpan = document.querySelectorAll("h1 span");
    const btns = document.querySelectorAll(".btn-first");
    const l1 = document.querySelector(".l1");
    const l2 = document.querySelector(".l2");

    window.addEventListener("load", () => {

    const TL = gsap.timeline({paused : true});

    TL
    
    .from(btns, 1, {opacity: 0, ease:"power2.out"}, 0.3, "-=1")
    .from(l1, 1, {width:0, ease: "power2.out"})
    .from(l2, 1, {width:0, ease: "power2.out"})
    .from(titreSpan, 1, {top:-50, opacity: 0, ease: "power2.out"}, 0.3)


    TL.play();

})

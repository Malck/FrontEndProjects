import "./header.css"
import finger from "../../../src/assets/creative.png"
export default function Header() {

    return (

    <nav>
        <div className="header-title"><a href="/" aria-current="page">Front-End Projects</a></div>

        <a href="/" className="nav-icon"
        aria-label="visit homepage"
        aria-current="page">
          <img src={`${finger}`} alt="icon"/>
        </a>

        <div className="nav-authentification">
            
            <div className="navlinks-container">
                <a href="/" aria-current="page">Home</a>
                <a href="/website">Websites</a>
                <a href="/application" aria-current="page">Lab</a>
            </div>

        </div>
    </nav>
)
}
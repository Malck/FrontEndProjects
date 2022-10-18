import "../styles/header.css"
export default function Header() {

    return (

    <nav>

        <div className="header-title"><a href="/" aria-current="page">Front-End Projects</a></div>

        <a href="/" className="nav-icon"
        aria-label="visit homepage"
        aria-current="page">
          <img src="finger.svg" alt="idea icon"/>
        </a>

    
        <div className="nav-authentification">
            
            <div className="navlinks-container">
                <a href="/" aria-current="page">Home</a>
                <a href="/project">Projects</a>
            </div>

        </div>

    </nav>
)
}
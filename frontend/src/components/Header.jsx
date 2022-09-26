import "../styles/header.css"
export default function Header() {

    return (

    <nav>

        <a href="/" className="nav-icon"
        aria-label="visit homepage"
        aria-current="page">
          <img src="img/chat.png" alt="chat icon"></img>
          <span>FrontEnd Projects</span>
        </a>

        <div className="main-navlinks">
            <button className="hamburger" type="button"
            aria-label="toggle navigation"
            aria-expanded="false">
            <span></span>
            <span></span>
            <span></span>
            </button>

            <div className="navlinks-container">
                <a href="/" aria-current="page">Home</a>
                <a href="/project">Projects</a>
            </div>
        </div>

        <div className="nav-authentification">
            <a href="/" className="sign-user"
            aria-label="Sign in page">
              <img src="img/user.png" alt="user icon"></img>
            </a>

            <div className="sign-btns">
                <button type="button">Sign In</button>
                <button type="button">Sign Up</button>
            </div>

        </div>

    </nav>
)
}
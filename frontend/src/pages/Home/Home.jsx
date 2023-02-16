import "./home.css";
import { Link } from "react-router-dom";

import Header from "../../components/Header/Header";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function HomePage() {
  const titreSpan = useRef(null);
  const btns = useRef(null);
  const l1 = useRef(null);
  const l2 = useRef(null);

  useEffect(() => {
    const TL = gsap.timeline({ paused: true });

    TL.from(l1.current, { duration: 1,width: 0, ease: "Power2.easeIn"}).to(l1.current, { width: 250,})
      
    .from(l2.current, { duration: 2, width: 0, ease: "Power2.easeIn" }).to(l2.current, { width: 150,})
    .from(titreSpan.current, {duration: 0.5,opacity: 0, ease: "Power4.easeOut",}).to(titreSpan.current, {opacity: 1})
    .from(btns.current, {duration: 1,opacity: 0, ease: "Power0.easeIn",}).to(btns.current, {opacity: 1})

    
      TL.play();

  }, []);

  return (
    <div className="homepage">
      <Header />

      <div className="lignes">
        <div ref={l1} className="l1"></div>
        <div ref={l2} className="l2"></div>
      </div>

      <div className="container-first">
        <h1>
          <span ref={titreSpan}>Discover my projects</span>
        </h1>
      </div>

      <div ref={btns} className="container-btns">
        <Link to="/website" className="project-link" title="Project">
          {" "}
          <button className="btn-first b1">Websites</button>{" "}
        </Link>
        <Link to="/application" className="project-link" title="Project">
          {" "}
          <button className="btn-first b2">Lab</button>{" "}
        </Link>
      </div>
    </div>
  );

}

/*<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.3/gsap.min.js" integrity="sha512-gmwBmiTVER57N3jYS3LinA9eb8aHrJua5iQD7yqYCKa5x6Jjc7VDVaEA0je0Lu0bP9j7tEjV3+1qUm6loO99Kw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>*/

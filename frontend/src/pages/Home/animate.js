/* code avec gsap qui fonctionne mais seulement sur du javascript css html isolé j'ai l'impression */


import {gsap} from "gsap"

const titreSpan = document.querySelectorAll("h1 span");
    const btns = document.querySelectorAll(".btn-first");
    const l1 = document.querySelector(".l1");
    const l2 = document.querySelector(".l2");
    console.log(l1);

    window.addEventListener("load", () => {

    const TL = gsap.timeline({paused : true});

    TL
    
    .from(btns, 1, {opacity: 0, ease:"power2.out"}, 0.3, "-=1")
    .from(l1, 1, {width: 0, ease: "power2.out"})
    .from(l2, 1, {width: 0, ease: "power2.out"})
    .from(titreSpan, 1, {top:-50, opacity: 0, ease: "power2.out"}, 0.3)


    TL.play();

})

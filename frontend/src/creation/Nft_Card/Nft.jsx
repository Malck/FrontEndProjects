import "../Nft_Card/nft.css";

import iconethereum from "./assets/icon-ethereum.svg";
import iconview from "./assets/icon-view.svg";
import iconclock from "./assets/icon-clock.svg";
import imageequilibrium from "./assets/image-equilibrium.jpg";


export default function Nft() {

    return (

        <main className="main-nft">
        <div className="main-box-nft">

            <div className="icon-nft">
                <img src={imageequilibrium} alt="nft"/>
                <div className="view">
                    <img src={iconview} alt="view icon"/>
                </div>
            </div>

            <div className="title">
                <h1>Equilibrium #3429</h1>
            </div>

            <div className="text-nft">
                <p>Our Equilibrium collection promotes balance and calm</p>
            </div>

            <div className="infos">

                <div className="price">
                    <img src={iconethereum} alt=""/>
                    <p>0.041 ETH</p>
                </div>
                <div className="time">
                    <img src={iconclock} alt=""/>
                    <p>3 days left</p>
                </div>

            </div>

            <div className="creator">
                <img src="assets/image-avatar.png" alt=""/>
                <p>Creation of <span>Jules Wyvern</span></p>
            </div>

        </div>
    </main>

    )
}
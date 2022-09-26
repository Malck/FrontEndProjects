import "../Rating_component/rating.css"

import iconstar from "./assets/icon-star.svg";

export default function Rating(){

    return (
        <main className="main-rating">
        <div className="main-box-rating">

            <div className="start">

                <div className="icon-rating">
                    <img src={iconstar} alt="icon star"/>
                </div>
        
                <div className="text-rating">
                    <h1>How did we do?</h1>
                    <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
                </div>
        
                <div className="number">
                    <ul >
                        <li> <button className="nbTag">1</button></li>
                        <li> <button className="nbTag">2</button></li>
                        <li> <button className="nbTag">3</button></li>
                        <li> <button className="nbTag">4</button></li>
                        <li> <button className="nbTag">5</button></li>
                    </ul>
                </div>
        
                <div className="btn-submit">
                    <button type="submit">SUBMIT</button>
                </div>

            </div>

            <div className="thank hide">

                <div className="img-thank">
                    <img src="assets/illustration-thank-you.svg" alt="" srcset=""/>
                </div>

                <div className="selected">
                    <p>
                        You selected <span id="rate">5</span> out of 5 
                    </p>
                </div>

                <div className="title">
                    <h1>Thank you!</h1>
                </div>

                <div className="text-rating-thank">
                    <p>We appreciate you taking the time to give a rating.
                        If you ever need more support, don't hesitate to get in touch!
                    </p>
                </div>

            </div>

            
        </div>

    </main>
    )
}
import logo from "../AboutUs/images/sid-logo.jpg";
import "../AboutUs/Why.css";

const Why = () => {
    return(
        <div id="left-side">
        <div id="why">
            <h2>Why we started</h2>
            <p>We started this business with the same drive that fuels most entrepreneurs: a passion for the
                product and
                the potential for success. At just 16, we believed that with determination, we could make a big
                impact.
                Back then, consignment stores were charging around 10% fees and offering prices at or below
                market
                value. However, over time, many of these stores became greedy, hiking their fees to 15-18% and
                significantly inflating prices. Frustrated by this greed and the negative effect it had on the
                sneaker
                community, we decided to create a platform that prioritizes fair pricing, authentic sneakers,
                and
                exceptional customer service.
            </p>
        </div>
        <div id="group-image">
            <img src={logo}/>
        </div>
    </div>
    )
}

export default Why;
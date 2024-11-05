import Wadepic from "../AboutUs/images/Wade.jpg";
import "../AboutUs/Wade.css";


const Wade = () => {
    return (
        <div id="wade" class="siding">
            <section>
                <img class="images" src={Wadepic} />
            </section>
            <section>
                <h2>Wade Little</h2>
                <p>Wade Little is a Computer Information Systems (CIS) student at the University of South
                    Carolina,
                    where he combines his passion for coding with a love for fashion and entrepreneurship. His
                    entrepreneurial journey began in high school during the COVID-19 pandemic, when he started
                    reselling
                    shoes. What began with a single pair quickly grew into a thriving business with over 50
                    pairs in
                    inventory by the time he entered college.

                    Though Wade liquidated his inventory upon starting his freshman year, he maintained strong
                    connections within the sneaker community. He has since channeled his skills in web
                    development to
                    support his friend Saahil in launching an online platform, making Saahil's inventory
                    accessible to a
                    broader audience.
                </p>
            </section>
        </div>
    );
}

export default Wade;
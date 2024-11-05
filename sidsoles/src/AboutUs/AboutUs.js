import Layout from "../Layout";
import Wade from "./Wade";
import Saahil from "./Saahil";
import Why from "./Why";
import Footer from "../components/Footer";
import "../AboutUs/AboutUs.css";



const AboutUs = () => {
    return (
        <>
            <Layout />
            <div id="content">
                <h1>About Us</h1>
                <div class="columns">
                    <Why />
                    <div id="right-section">
                        <Saahil />
                        <Wade />
                    </div>
                </div>
                <h1>We serve for the customer, not ourselves</h1>
            </div>
            <Footer />
        </>
    )
}

export default AboutUs;
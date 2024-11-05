import Layout from "../Layout"
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";
import Footer from "../components/Footer";
import "../ContactUs/ContactUs.css"

const ContactUs = () => {
    return (
        <>
            <Layout />
            <div id="content">
                <h1>Contact Us</h1>
                <div class="columns">
                    <ContactForm />
                    <ContactInfo />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ContactUs;
import "../ContactUs/ContactInfo.css";
import sidLogo from "../ContactUs/images/sid-logo.jpg";

const ContactInfo = () => {
    return (
        <section id="contact-info">
        <h2>How to Reach Us</h2>
        <h2>Sid Soles</h2>
        <h3>Store Phone Number: (919)-758-3774</h3>
        <h3>Store Email: sidsoles@gmail.com</h3>
        <img src={sidLogo}/>
    </section>
    )
}

export default ContactInfo;
import "../ContactUs/ContactForm.css";

const ContactForm = () => {
    return (
        <form id="contact-form" action="https://api.web3forms.com/submit" method="POST">
            <input type="hidden" name="access_key" value="ff25d0dd-4d36-49f8-992c-49a611530dc1" />
            <p>
                <label for="name">Name:</label>
                <input id="name" type="text" placeholder="First and Last Name" name="name" required />
            </p>
            <p>
                <label for="email">Email:</label>
                <input id="email" type="email" name="email" placeholder="Email" required />
            </p>
            <p>
                <label for="message">Message:</label>
                <textarea id="message" name="message" placeholder="Message (If needed resize the textbox with bottom right corner )"></textarea>
            </p>
            <input type="hidden" name="subject" value="SidSoles Contact Form" />
            <input type="hidden" name="from_name" value="My Website" />
            <p>
                <button type="submit">Submit Form</button>
            </p>
            <p id="result"></p>
        </form>
    );
}

export default ContactForm;
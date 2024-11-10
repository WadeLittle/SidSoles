import "../ContactUs/ContactForm.css";
import {useState} from "react";

const ContactForm = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "ff25d0dd-4d36-49f8-992c-49a611530dc1");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
    return (
        <>
        <form id="contact-form" onSubmit={onSubmit}>
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
                <textarea id="message" name="message" placeholder="Message (If needed resize the textbox with bottom right corner )" required></textarea>
            </p>
            <input type="hidden" name="subject" value="SidSoles Contact Form" />
            <input type="hidden" name="from_name" value="My Website" />
            <p>
                <button type="submit">Submit Form</button>
            </p>
            <p id="result">{result}</p>
        </form>
        </>
    );
}

export default ContactForm;
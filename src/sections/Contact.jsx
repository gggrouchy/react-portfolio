import { useState } from "react";


const Contact = () => {
  const initialState = {
    name: "",
    email: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(initialState);

  const onValueChange = (fieldName, value) => {
    const updatedFormDetails = { ...formDetails, [fieldName]: value };
    setFormDetails(updatedFormDetails);
  };

  const onHandleSubmit = async (e) => {
    e.preventDefault();
    console.log(formDetails);
    setFormDetails(initialState);
    try {
      const response = await fetch("https://api.example.com/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formDetails),
      });
      if (response.ok) {
        alert("Message sent successfully");
      }
    } catch (error) {
      console.error(error);
      alert("Failed to send message");
    }
  };
  
  return (
  <section>
    <h1 className="text-4xl text-left font-bold my-6">Contact Me</h1>
    <div className="bg-white text-left rounded-xl p-8">
      <p>
        Feel free to reach out to me at {""} 
        <a href="mailto:oayala544@gmail.com">Email Address</a>
      </p>
      <form onSubmit={onHandleSubmit} className="mt-3 flex flex-col gap-6">
        <input type="text" 
          placeholder="Your Name" 
          className="text-md bg-background rounded-xl px-4 py-3 placeholder-opacity-50 focus:outline-none border w-full"
          value={formDetails.name}
          onChange={(e) => onValueChange("name", e.target.value)}
          />
        <input type="email" 
          placeholder="Your Email"
          className="text-md bg-background rounded-xl px-4 py-3 placeholder-opacity-50 focus:outline-none border w-full"
          value={formDetails.email}  
          onChange={(e) => onValueChange("email", e.target.value)}
          />
        <textarea placeholder="Your Message"
          rowrs="4"
          className="text-md bg-background rounded-xl px-4 py-3 placeholder-opacity-50 focus:outline-none border w-full"
          value={formDetails.message}
          onChange={(e) => onValueChange("message", e.target.value)}
          />
        <button 
          type="submit" 
          className="bg-primary text-white">
          Send Message 
        </button>
      </form>
    </div>
  </section>
  );
};

export default Contact;
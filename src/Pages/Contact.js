import React ,{useState,useEffect} from "react";

const Contact = () => {

  const [location, setLocation] = useState();

  useEffect(() => {
    setLocation("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109552.19658193935!2d75.7866325077157!3d30.90047363738575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a837462345a7d%3A0x681102348ec60610!2sLudhiana%2C%20Punjab!5e0!3m2!1sen!2sin!4v1665048869671!5m2!1sen!2sin")
  }, [])
  
  return (
    <>
      <div className="container  p-5">
        <h1 className="text-center mb-5">Feel Free to Contact Us</h1>

         <iframe
          src={location}
          width="100%"
          height="400"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          title="location"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <form method="POST" className="container-sm mt-5 p-5" action="https://formspree.io/f/xnqrvrgj">
          <div className="  mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="Email"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input type="text" className="form-control" id="name" name="Name" />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea
              className="form-control"
              id="message"
              rows="3"
              name="Message"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;

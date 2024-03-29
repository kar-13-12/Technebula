import "./contact.css";
import man from "../../assets/contact-man.png";
import girl from "../../assets/contact-girl.png";
import Navbar from "../../component/navbar/navbar";
import { FaWhatsapp } from 'react-icons/fa';
 


const Contact = () => {

    const handleClick = async (e) => {
        
        const {name, email, message, location} = e.target.elements
        let details = {
            name: name.value,
            email: email.value,
            location : location.value,
            message: message.value
        }
        let response = await fetch("http://localhost:5000/contact-data", {
            method:"POST",
            headers:{
                "Content-Type": "application/json;charset=utf-8"
            },
            body: JSON.stringify(details)
        })

        /*let result = await response.json()*/
        alert(response.status)
    }

    const handlesubmitbtn = () => {

      let data_name = document.getElementById("namme").value;
      if (data_name === "") {
        document.getElementById("namedemo").innerText="Name is Empty";
        return false
      }

      let data_email = document.getElementById("email").value;
      if (data_email == "") {
        document.getElementById("emaildemo").innerText="Email is Empty";
        return false
      }

      let data_locat = document.getElementById("location").value;
      if (data_locat == "") {
        document.getElementById("locatdemo").innerText="Native is Empty";
        return false
      }

      let data_message = document.getElementById("message").value;
      if (data_message == "") {
        document.getElementById("messagedemo").innerText="Message is Empty"
        return false
      }
    }

  return (
    <>
      <div className="head-contact">
      <Navbar style={{ position: 'relative', zIndex: '1' }} />
      <div className="text">
        <h1>Be close with us by contact</h1>
        <div className="app" style={{ marginLeft: '85px',top:'-1.7rem' }}>
          <a href="https://whatsapp.com/channel/0029VaPUcXp9mrGeVV8lXf1r"><FaWhatsapp size={48} color="03254c" /></a>
        </div>
      </div>
        <div className="contact">
          <div className="two-person">
            <img src={man} alt="" className="man" />
            <img src={girl} alt=""  className="girl"/>
          </div>
          <div className="class">
            <form onSubmit={handleClick}>
              <div className="input-name">
                <label htmlFor="name">Name</label>
                <input name="name" className="input-1" id="name" type="text" required/>
                <p id="namedemo"></p>
              </div>
              <div className="input-name">
                <label htmlFor="email">Email</label>
                <input name="email" className="input-1" id="email" type="email" required />
                <p id="emaildemo"></p>
              </div>
              <div className="input-name">
                <label htmlFor="location">Location</label>
                <input
                  name="location"
                  className="input-1"
                  type="text"
                  required
                  id="location"
                />
                <p id="locatdemo"></p>
              </div>
              <div className="input-name">
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" className="text-area" />
                <p id="messagedemo"></p>
              </div>
              <button className="btn" onClick={handlesubmitbtn}>SUBMIT</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;

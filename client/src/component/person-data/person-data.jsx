import  { useState } from "react";
import "./person-data.css";
import PositionedSnackbar from '../SnackBar/SnackBar'

const ContactForm = () => {
  // const [name, setName] = useState('')
  // const [email, setEmail] = useState('')
  // const [location, setLocation] = useState('')
  // const [message, setMessage] = useState('')

  const [fname, setFname] = useState("");
  const [place, setPlace] = useState("");
  const [numbers, setNumbers] = useState("");
  const [canShowSnackBar, setCanShowSnackBar] = useState(false); 

  const handleSubmit = async (e) => {
    e.preventDefault()

    // try {
    //     await axios.post("http://localhost:3000/data", { name,email,location,message })
    // } catch (error) {
    //     console.error("The data not send", error);
    // }

    const { name, email, number, location } = e.target.elements;
    let details = { 
      name: name.value,
      email: email.value,
      location: location.value,
      number: number.value,
    };
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });

    /*let result = await response.json();  */
    alert(response.status);
  };

  const handleclick = () => {
    const isFnameValid = fname.length !== 0;
    const isPlaceValid = place.length !== 0;
    const isNumbersValid = numbers.length !== 0;
    console.log({
      fname,
      place,
      numbers
    })
    if (!isFnameValid) {
        document.getElementById("wrong").innerText="Name is Empty";        
    }

    if (!isPlaceValid) {
        document.getElementById("place").innerText="Place is Empty";        
    }

    if (!isNumbersValid) {
        document.getElementById("num").innerText="Number is Empty";        
    }

    setCanShowSnackBar(isFnameValid && isPlaceValid && isNumbersValid);
  };

  return (
    <>
    <PositionedSnackbar open={canShowSnackBar}/>
    <div className="head-form transition duration-700 ease-in-out">
      <div className="form">
        <form onSubmit={handleSubmit}>
          <p className="step">Step to success</p>
          <div>
            <input
              type="text"
              className="input caret-sky-900 focus:caret-indigo-500"
              id="name"
              placeholder="Enter Your Name"
              onChange={(e) => setFname(e.target.value)}
              required
            />
            <p id="wrong"></p>
          </div>
          <div>
            <select
              name="email"
              className="option caret-sky-900"
              id="email"
              required
            >
              <option value="NEET">NEET</option>
              <option value="JEET">JEE</option>
            </select>
          </div>
          <div>
            <input
              className="input"
              name="location"
              type="text"
              id="locat"
              onChange={(e) => setPlace(e.target.value)}
              placeholder="Native Place"
              required
            />
            <p id="place"></p>
          </div>
          <div>
            <input
              type="number"
              className="input caret-sky-500"
              name="number"
              id="number"
              placeholder="Phone Number"
              onChange={(e) => setNumbers(e.target.value)}
              required
            />
            <p id="num"></p>
          </div>
          <button className="butn" onClick={handleclick}>
            JOIN US            
          </button>
        </form>
      </div>
    </div>
    </>
  );
};

export default ContactForm;

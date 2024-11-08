import { useState } from "react";
import "./index.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [gender, setGender] = useState("");
  const [subjects, setSubjects] = useState({
    english: false,
    maths: false,
    physics: false,
  });
  const [country, setCountry] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message, gender, subjects, country);
  };

  const handleSubjectChange = (sub) => {
    setSubjects((prevSubjects) => ({
      ...prevSubjects,
      [sub]: !prevSubjects[sub],
    }));
  };

  const ResetAll = () => {
    setName("");
    setEmail("");
    setMessage("");
    setGender("");
    setSubjects({
      english: false,
      maths: false,
      physics: false,
    });
    setCountry("");
  };

  return (
    <>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <br />
        <input
          type="text"
          id="name"
          name="name"
          required
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="email">Email:</label>
        <br />
        <input
          type="email"
          id="email"
          name="email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="message">Message:</label>
        <br />
        <textarea
          id="message"
          name="message"
          rows="4"
          required
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <br />
        <br />
        <label htmlFor="gender">Gender:</label>
        <br />
        <input
          type="radio"
          id="male"
          name="gender"
          value="male"
          onChange={(e) => setGender(e.target.value)}
        />
        <label htmlFor="male">Male</label>
        <br />
        <input
          type="radio"
          id="female"
          name="gender"
          value="female"
          onChange={(e) => setGender(e.target.value)}
        />
        <label htmlFor="female">Female</label>
        <br />
        <br />
        <label>Your best Subject:</label>
        <br />
        <input
          type="checkbox"
          name="english"
          checked={subjects.english}
          onChange={() => handleSubjectChange("english")}
        />
        English
        <input
          type="checkbox"
          name="maths"
          checked={subjects.maths}
          onChange={() => handleSubjectChange("maths")}
        />
        Maths
        <input
          type="checkbox"
          name="physics"
          checked={subjects.physics}
          onChange={() => handleSubjectChange("physics")}
        />
        Physics
        <br />
        <br />
        <label htmlFor="country">Country:</label>
        <br />
        <select
          id="country"
          name="country"
          onChange={(e) => setCountry(e.target.value)}
        >
          <option value="usa">USA</option>
          <option value="canada">Canada</option>
          <option value="uk">UK</option>
        </select>
        <br />
        <br />
        <input type="submit" value="Submit" />
        <button type="button" onClick={ResetAll}>
          Reset
        </button>
      </form>
    </>
  );
}

export default App;

import Title from "../components/Title";
import React, { useState } from "react";

export default function Esignatureapp() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleDateChange(e) {
    setDate(e.target.value);
  }
  const inputStyle = {
    border: "none",
    borderBottom: "2px dotted",
    paddind: ".35rem 0",
    outline: "none",
  };
  document.body.style.background = "#eee";
  return (
    <div className="container text-center">
      <Title classes={"title"} text={name} />
      <Title classes={"main-title mb-4"} text={!date ? "Dob" : date} />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt
        similique inventore suscipit debitis iusto error consequatur, cumque
        harum voluptates. Consequuntur vel alias ipsum praesentium quibusdam
        commodi neque dolorum cum porro!
      </p>

      <footer
        className="d-flex"
        style={{
          justifyContent: "space-around",
          position: "relative",
          top: "40vh",
        }}
      >
        <input
          type="date"
          value={date}
          style={inputStyle}
          onChange={handleDateChange}
        />
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          style={inputStyle}
        />
      </footer>
    </div>
  );
}

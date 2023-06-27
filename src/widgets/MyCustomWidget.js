import React, { useState } from "react";
import Button from "../components/Button"; // importing Button component to handle the logic of calculator

export default function MyCustomWidget() {

  // setting up the states using useState
  // equation holds the equation when the buttons are clicked
  // display holds the display value for each button when it is clicked
  // and it shows the output after the calculations are done using the
  // functions in Button.js file from components
  const [display, setDisplay] = useState("0");
  const [equation, setEquation] = useState("");


  // returning the actual calculator component
  // styles for the different classes are added to the end of App.css file
  return (
    <div >
      <div className="display">{display}</div>
      <div className="buttons">
        <div className="buttonContainer">
          <Button
            text="AC"
            display={display}
            setDisplay={setDisplay}
            equation={equation}
            setEquation={setEquation}
          />
          <Button
            text="+/-"
            display={display}
            setDisplay={setDisplay}
            equation={equation}
            setEquation={setEquation}
          />
          <Button
            text="%"
            display={display}
            setDisplay={setDisplay}
            equation={equation}
            setEquation={setEquation}
          />
          <Button
            text="÷"
            display={display}
            setDisplay={setDisplay}
            equation={equation}
            setEquation={setEquation}
          />
        </div>
        <div className="buttonContainer">
          <Button
            text="7"
            display={display}
            setDisplay={setDisplay}
            equation={equation}
            setEquation={setEquation}
          />
          <Button
            text="8"
            display={display}
            setDisplay={setDisplay}
            equation={equation}
            setEquation={setEquation}
          />
          <Button
            text="9"
            display={display}
            setDisplay={setDisplay}
            equation={equation}
            setEquation={setEquation}
          />
          <Button
            text="x"
            display={display}
            setDisplay={setDisplay}
            equation={equation}
            setEquation={setEquation}
          />
        </div>
        <div className="buttonContainer">
          <Button
            text="4"
            display={display}
            setDisplay={setDisplay}
            equation={equation}
            setEquation={setEquation}
          />
          <Button
            text="5"
            display={display}
            setDisplay={setDisplay}
            equation={equation}
            setEquation={setEquation}
          />
          <Button
            text="6"
            display={display}
            setDisplay={setDisplay}
            equation={equation}
            setEquation={setEquation}
          />
          <Button
            text="-"
            display={display}
            setDisplay={setDisplay}
            equation={equation}
            setEquation={setEquation}
          />
        </div>
        <div className="buttonContainer">
          <Button
            text="1"
            display={display}
            setDisplay={setDisplay}
            equation={equation}
            setEquation={setEquation}
          />
          <Button
            text="2"
            display={display}
            setDisplay={setDisplay}
            equation={equation}
            setEquation={setEquation}
          />
          <Button
            text="3"
            display={display}
            setDisplay={setDisplay}
            equation={equation}
            setEquation={setEquation}
          />
          <Button
            text="+"
            display={display}
            setDisplay={setDisplay}
            equation={equation}
            setEquation={setEquation}
          />
        </div>
        <div className="buttonContainer">
          <Button
            text="0"
            display={display}
            setDisplay={setDisplay}
            equation={equation}
            setEquation={setEquation}
          />
          <Button
            text="."
            display={display}
            setDisplay={setDisplay}
            equation={equation}
            setEquation={setEquation}
          />
          <Button
            text="="
            display={display}
            setDisplay={setDisplay}
            equation={equation}
            setEquation={setEquation}
          />
        </div>
      </div>
    </div>
  );
}

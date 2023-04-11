import React, { useState } from "react";

export default function TextForm(props) {
  // let disabled = 
  const handleUpClick = () => {
    console.log("UpperCase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("coverted to UpperCase!", "Success");
    // props.showAlert("coverted to UpperCase!","Success")
  };
  const handleOnChange = event => {
    console.log("On Changed"); 
    setText(event.target.value);
  };

  const [text, setText] = useState("Enter text here");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.Heading}</h1>

        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="10"
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
      </div>
      <div
        className="container"
        my-3
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1> your text summary</h1>
        <p>
          {
            text.split(/\s+/).filter(element => {
              return element.length !== 0;
            }).length
          }{" "}
          word and {text.length} character
        </p>
      </div>
    </>
  );
}

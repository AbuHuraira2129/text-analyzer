import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const textUpper = () => {
    console.log("Button Clicked " + text)
    let newtext = text.toUpperCase();
    setText(newtext);
  };

  const textLower = () => {
    console.log("Button Clicked " + text)
    let newtext = text.toLowerCase();
    setText(newtext);
  };

  const textCapital = () => {
    const arr = text.split(" ");
    for (let i = 0; i < arr.length; i++) {
        arr[i]= arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    let newtext = arr.join(" ");
    setText(newtext);
  };

  const textClear = () => {
    let newtext = "";
    setText(newtext);
  };

  const textCopy = () => {
    var copytext = document.getElementById("myBox");
    copytext.select(text);
    navigator.clipboard.writeText(copytext.value);
  };

  const removeExtraSpaces = () => {
    var newText = text.split(/[ ]+/)
    setText(newText.join(" "));
  };

  const textChange = (event) => {
    console.log("On Change");
    setText(event.target.value);
  };
  return (
    <>
    <div className="container">
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          rows="6"
          onChange={textChange}
          id="myBox"
          value={text}
        ></textarea>
      </div>
        <div>
        <button className="btn btn-primary mx-2" onClick={textUpper}>
        Uppercase
      </button>
      <button className="btn btn-danger mx-2" onClick={textLower}>
        Lowercase
      </button>
      <button className="btn btn-success mx-2" onClick={textCapital}>
        Capitalize
      </button>
      <button className="btn btn-info mx-2" onClick={textClear}>
        Clear
      </button>
      <button className="btn btn-secondary mx-2 my-2" onClick={textCopy}>
        Copy Text
      </button>
      <button className="btn btn-secondary mx-2 my-2" onClick={removeExtraSpaces}>
        Remove Extra Spaces
      </button>
        </div>
    </div>
    <div className="container my-3">
        <h3>Text Summary</h3>
        <p>{text.split(" ").length} Words and {text.length} Characters</p>
        <p>{0.08 * text.split(" ").length} Minutes Read</p>
    </div>
    </>
  );
}

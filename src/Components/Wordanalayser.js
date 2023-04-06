import React, { useState } from "react";

export default function Wordanalayser(props) {
  const [text, settext] = useState("Enter Text Here");

  const handletoup = () => {
    const newtext = text.toUpperCase();
    settext(newtext);
    props.showalert("Converted to Upper case", "success");
  };
  const handletolo = () => {
    const newtext = text.toLowerCase();
    settext(newtext);
    props.showalert("Converted to Lower case", "success");
  };
  const handletoclear = () => {
    const newtext = "";
    settext(newtext);
    props.showalert("Text Cleared", "success");
  };
  const changeonhandle = (event) => {
    settext(event.target.value);
  };
  return (
    <div className="container my-4">
      <h1 style={{ color: props.mode === "light" ? "black" : "white" }}>
        {props.title}
      </h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={changeonhandle}
          id="exampleFormControlTextarea1"
          style={{
            backgroundColor: props.mode === "light" ? "white" : "gray",
            color: props.mode === "light" ? "black" : "white",
          }}
          rows="3"
        ></textarea>
      </div>
      <button type="button" onClick={handletoup} className="btn btn-primary">
        Click To Uppercase
      </button>
      <button type="button" onClick={handletolo} className="btn btn-primary">
        Click To Lowercase
      </button>
      <button type="button" onClick={handletoclear} className="btn btn-primary">
        Click To Clear
      </button>
      <div className="container">
        <h1 style={{ color: props.mode === "light" ? "black" : "white" }}>
          Preview
        </h1>
        <p style={{ color: props.mode === "light" ? "black" : "white" }}>
          {text.split(" ").length}:{text.length}
        </p>
        <p style={{ color: props.mode === "light" ? "black" : "white" }}>
          {text.length > 0 ? text : "Enter some text to Preview Here!!!"}
        </p>
      </div>
    </div>
  );
}

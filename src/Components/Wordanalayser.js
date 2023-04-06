import React, { useState } from "react";

export default function Wordanalayser(props) {
  const [text, settext] = useState("");

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
      <button
        disabled={text.length === 0}
        type="button"
        onClick={handletoup}
        className="btn btn-primary mx-1 my-2"
      >
        Click To Uppercase
      </button>
      <button
        disabled={text.length === 0}
        type="button"
        onClick={handletolo}
        className="btn btn-primary mx-1 my-2"
      >
        Click To Lowercase
      </button>
      <button
        disabled={text.length === 0}
        type="button"
        onClick={handletoclear}
        className="btn btn-primary mx-1 my-2"
      >
        Click To Clear
      </button>
      <div className="container">
        <h1 style={{ color: props.mode === "light" ? "black" : "white" }}>
          Preview
        </h1>
        <p style={{ color: props.mode === "light" ? "black" : "white" }}>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          Words and {text.length} Characters
        </p>
        <p style={{ color: props.mode === "light" ? "black" : "white" }}>
          {text.length > 0 ? text : "Enter some text to Preview Here!!!"}
        </p>
      </div>
    </div>
  );
}

  import React, { useState } from "react";

  export default function TextForm(props) {
    const [text, setText] = useState("");
    const [normalText, setItalicText] = useState("normal");
    const [convertbtn, setConvertbtn] = useState("Convert to Uppercase");
    const [convertItalicBtn, setConvertItalicBtn] = useState("Convert to Italic");
    const wordCount = text == '' ? 0 : text.split(' ').length;
    const charCount = text.length;

    const handleUpClick = () => {
      if (!text) {
        alert("enter some");
      } else {
        if (text == text.toUpperCase()) {
          setText(text.toLowerCase());
          setConvertbtn("Convert To UpperCase");
        } else {
          setText(text.toUpperCase());
          setConvertbtn("Convert To LowerCase");
        }
        let caserecord = document.getElementById("caserecord");
        caserecord.innerHTML += `<li style=""><button class="btn btn-primary">${convertbtn}</button></li>`;
      }

      // let casebutton = document.createElement("button");
      // casebutton.setAttribute('class','btn btn-primary')
      // let btntext = document.createTextNode(convertbtn);
      // casebutton.appendChild(btntext);
      // caserecord.appendChild(casebutton);

      // console.log(casebutton)
      // console.log(caserecord)
    };

    // const handlelowClick = ()=>{
    //   console.log("" + text);
    //   let newText = text.toLowerCase();
    //   setText(newText)

    // }

    const handleitalicClick = () => {
    if (!text) {
      alert("Enter Something")
    } else {
      if (normalText == "normal") {
        setItalicText("italic");
        setConvertItalicBtn("Convert to Normal");
      } else {
        setItalicText("normal");
        setConvertItalicBtn("Convert to Italic");
      }
      let caserecord = document.getElementById("caserecord");
      caserecord.innerHTML += `<li style=""><button class="btn btn-primary">${convertItalicBtn}</button></li>`;
    }
    };

    const handleOnChange = (event) => {
      console.log("On Changed");
      setText(event.target.value);
    };

    return (
      <div>
        <h1>{props.heading}</h1>
        <div className="mb-3 my-3">
          <textarea
            className="form-control"
            id="myBox"
            placeholder="Enter Your Message"
            onChange={handleOnChange}
            rows="8"
            value={text}
            style={{ fontStyle: normalText }}
          ></textarea>
        </div>
        <button
          className="btn btn-primary"
          onClick={handleUpClick}
          id="casebutton"
        >
          {convertbtn}
        </button>
        {/* <button className="btn btn-primary" onClick={handlelowClick}>Convert to Lowercase</button> */}
        <button className="btn btn-primary" onClick={handleitalicClick}>
          {convertItalicBtn}
        </button>

        <div className="container my-5 mx-0 p-0">
          <h2>{props.summaryText}</h2>
          <p>{wordCount} words & {charCount} characters</p>
          <p>{0.004 * wordCount} Minutes Read </p>
          <h2>Preview Text</h2>
          <p>{text} </p>
        </div>

        <div className="container p-0">
        <h2 className="my-5">{props.tableRecord}</h2>
        <div className="box border border-1">
          <div className="py-2 ">
            <ol id="caserecord" className="d-flex gap-5 flex-wrap"></ol>
          </div>
        </div>
        </div>
      </div>
    );
  }

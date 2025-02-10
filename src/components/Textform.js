import React,{useState} from 'react';

export default function Textform(props) {

  const handleUpClick = () =>{
    console.log("Upper Case was clicked");
    let newText = text.toUpperCase();
    setText(newText);
  }

  const handleLoClick = () =>{
    console.log("Lower Case was clicked");
    let newText = text.toLowerCase();
    setText(newText);
  }

  const handleClearClick = () =>{
    let newText = ("");
    setText(newText);
  }

  const handleOnCLick = (event) =>{
    console.log("onchange")
    setText(event.target.value)
  }

  const [text, setText] = useState('');

  return (
    <>
          <div className="d-flex flex-column align-items-center justify-content-center min-vh-100">
        <div className="container">
          <h1>{props.heading}</h1>
          <div className="mb-3">
          <textarea
              className="form-control"
              id="mybox"
              rows="8"
              value={text}
              placeholder="Enter your Text"
              onChange={handleOnCLick}
              style={{backgroundColor : props.mode === 'light' ? "white" : "grey"}}
            ></textarea>
          </div>
          <button className="btn btn-primary mx-1" onClick={handleUpClick}>
            Convert to Uppercase
          </button>
          <button className="btn btn-primary mx-1" onClick={handleLoClick}>
            Convert to LowerCase
          </button>
          <button className="btn btn-primary mx-1" onClick={handleClearClick}>
            Clear Text
          </button>
        </div>
        <div className="container  my-3">
          <h2>Your Text Summary is Here</h2>
          <p className="my-1">
            {text.split(" ").length} Words and {text.length} Characters are in the
            text
          </p>
          <p className="my-2">{0.008 * text.split(" ").length} minutes Read</p>
          <h3>Preview</h3>
          <p>{text}</p>
        </div>
      </div>
    </>
  )
}

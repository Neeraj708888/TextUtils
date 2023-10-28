import React, {useState} from "react";

export default function TextForm(props) {
    const handleUpClick = ()=>{ 
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper-Case" , "success");
    }
    const handleLoClick = ()=>{
        let newText = text.toLocaleLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower-Case" , "success");
    }
    const handleClearClick = ()=>{
      let newText = "";
      setText(newText);
      props.showAlert("Cleared Text" , "success");
  }
    const handleOnChange = (event)=>{
        setText(event.target.value);
        console.log(event);
    }

    const handleCopy = ()=>{
      let newtext = document.getElementById('mybox');
      newtext.select();
      navigator.clipboard.writeText(newtext.value);
      document.getSelection().removeAllRanges();
      props.showAlert("Coppied Text" , "success");
  }
  const handleSpace = ()=>{
    let newtext = text.split(/[ ]+/);
    setText(newtext.join(" "));
    props.showAlert("Removed Extra Spaces" , "success");
  }

    const [text , setText] = useState("");
   
  return (
    <>
    <div className="container" style={{color: props.mode === 'dark' ? 'white' : 'black'}} >
        <h1 className="mb-2">{props.heading}</h1>
        <div className="mb-3">
        <textarea
          className="form-control"
          id="mybox"
          value={text}
          onChange={handleOnChange}
          rows="8" 
          placeholder="Enter your text" style={{backgroundColor: props.mode === 'dark' ? '#5d77da' : 'white', color: props.mode === 'dark' ? 'white' : 'black'}}
        ></textarea>
      </div>
      <button disabled={text.length ===0} className="btn btn-primary mx-2 my-2 " onClick={handleUpClick}>Convert ot Uppercase</button> 
      <button disabled={text.length ===0} className="btn btn-primary mx-2 my-2 " onClick={handleLoClick}>Convert ot Lowercase</button> 
      <button disabled={text.length ===0} className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear</button>
      <button disabled={text.length ===0} className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy Text</button>
      <button disabled={text.length ===0} className="btn btn-primary mx-2 my-2" onClick={handleSpace}>Remove Extra Space</button>
    </div>
    <div className="container my-3" style={{backgroundColor: props.mode === 'dark' ? 'grey':'white', color: props.mode === 'dark' ? 'white' : 'black'}}>
        <h2>Your text summary</h2>
        <p><b>{text.split(" ").filter((element)=>{return element.length!==0}).length} and {text.length}</b></p>
        {/* here we can {text.split(" ").filter((element)=>{return element.length!==0}).length-1}  */}
        <p><b>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes Reads</b></p>
        <h2>Preview</h2>
        <p><b>{text.length>0 ? text:"Nothing to Preview"}</b></p>
    </div>
    </>
  );
}

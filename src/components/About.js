import React, { useState } from "react";

export default function About(props) {

  // Remove the Toggle function light and dark mode 

  // const [myStyle, setMyStyle] = useState({
    // color: "white",
    // backgroundColor: "black",
  // });
  // const [btntext, setBtnText] = useState("Enable light mode");

  // const toggleStyle = () => {
    // if (myStyle.color === "black") {
      // setMyStyle({
        // color: "white",
        // backgroundColor: "black",
        // border: "1px solid white",
      // });
      // setBtnText("Enable light mode");
    // } else {
      // setMyStyle({
        // color: "black",
        // backgroundColor: "white",
      // });
      // setBtnText("Enable dark mode");
    // }
  // };

  let myStyle = {
  color : props.mode === 'dark'?'white': '#34326a',
     backgroundColor : props.mode ==='dark'? 'rgb(49, 53, 109)':'white',
     border: '2px solid',
     borderColor: props.mode === 'dark'?'white': '#34326a'
     
  };
  return (
    <div className="container" style={{color : props.mode === 'dark'?'white': 
    '#34326a'}}>
      <h1 className="my-2">About</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              style={{color : props.mode === 'dark'?'black': 
'#34326a'}}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Word Manipulation
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="About Your Self">
              <strong>Word Manipulation: </strong> The Document Manipulation is a feature that gets and adds paragraphs and edits document file property information for document files created in Microsoft Word (hereafter "docx file"). Microsoft Word is not required for editing.<code>.Manipulation the Word</code>,
              Semantic Manipulation is a sort of history distortion in that you are changing the meanings of established words and phrases.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={{color : props.mode === 'dark'?'black': 
'#34326a'}}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Text Analyzation
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong> Text Analyzation: </strong> Text analysis is the process of using computer systems to read and understand human-written text for business insights. Text analysis software can independently classify, sort, and extract information from text to identify patterns, relationships, sentiments, and other actionable knowledge.<code>.Text Analization Description</code>,
              Text Analysis is an umbrella term encompassing AI-empowered techniques that help derive meaningful information from unstructured data.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={{backgroundcolor : props.mode === 'dark'?'black': 
'#34326a'}}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Free to use
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>Free-To-Use: </strong>Redundant manipulators locally based collision avoidance algorithm provides a robust solution.<code>.Desciption</code>,
              Some robot manipulators are controlled using methods that do not take into account the flexibility of the links and joints.
            </div>
          </div>
        </div>
      </div>

      {/* Hide Button from about section */}

      {/* <div className="conatiner my-3"> */}
        {/* <button */}
          {/* onClick={toggleStyle}
           type="button"
           className="btn btn-primary my-3"> */}
          {/* {btntext} */}
        {/* </button> */}
      {/* </div> */}
    </div>
  );
}

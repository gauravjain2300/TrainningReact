import React, { useState } from "react";
import "../Alltasks/TasksCss/Taskconverter.css";

export default function TextConverter() {
  const [text, setText] = useState("");

  const handleupperCase = () => {
    setText(text.toUpperCase());
  };

  const handleLowerCase = () => {
    setText(text.toLowerCase());
  };
  const handleCharacterCount = () => {
    setText(Number(text.length));
  };
  const handleCapitalize = () => {
    let newtext = text.split(" ");
    setText(newtext.toUpperCase().join(""));
  };
  const handleWordCount = () => {
    setText(text.split(" ").length);
  };

  const handleReverse = () => {
    let newtext = text.split(" ");
    console.log(newtext);
    setText(newtext.reverse().join(" "));
  };

  const handlereset = () => {
    setText("");
  };
  return (
    <div>
      <div>
        <div className="text-container">
          <div className="All-div">
            <input
              type="text"
              value={text}
              onChange={(e) => {
                setText(e.target.value);
              }}
            />

            <div className="All-buttons">
              <button onClick={handleupperCase}>UpperCase</button>
              <button onClick={handleLowerCase}>LowerCase</button>
              <button onClick={handleCapitalize}>Capitalize</button>
              <button onClick={handleWordCount}>WordCount</button>
              <button onClick={handleCharacterCount}>CharacterCount</button>
              <button onClick={handleReverse}>Reverse</button>
              <button onClick={handlereset}>Reset</button>
            </div>
          </div>
          <div className="Second-div">
            <h1>
              <span>T</span>
              <span>H</span>
              <span className="E">E</span>

              <span>R</span>
              <span>e</span>
              <span>s</span>
              <span>u</span>
              <span>l</span>
              <span>t</span>
              <br />
              <span>I</span>
              <span className="E">s</span>
              <span>H</span>
              <span>e</span>
              <span>r</span>
              <span>e</span>
            </h1>
            <input type="text" value={text} disabled />
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
}

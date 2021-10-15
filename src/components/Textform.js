
import React , {useState} from "react";

export default function Textform(props) {
  const handUpCLick = () =>{
   
    let newText = text.toUpperCase();
    setext(newText);
    props.showAlert("converted to uppercase" , "success")
  }
  const handleOnChange =(event) =>{
    
    setext(event.target.value)//to get the input valuese in text area
  }
  const handLoCLick = () =>{
    let lowText = text.toLowerCase();
    setext(lowText);
    props.showAlert("converted to lowercase" , "success")
  }
  const handClear = () =>{
    let clearText = " "
    setext (clearText);
    props.showAlert("text cleared" , "success")
  }
  const handCopy = () =>{
    var text = document.getElementById("mybox");
    text.select()
    navigator.clipboard.writeText(text.value);
    props.showAlert("copy to clipboard" , "success")


  }
  const [text, setext] = useState(" ");//the curretn value of text is in usestate
  
 
  return (
    <>
    <div className="container" >
        <h1>{props.heading} </h1>
      <div className="mb-3">    
        <textarea
          className="form-control" 
          id="mybox"
          rows="8"
          value={text}
          onChange={handleOnChange}
         style = {{backgroundColor:props.mode==="light" ? "dark":"light"}}
        ></textarea>
      </div>
      <button disabled = {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handUpCLick} >Convert To Uppercase</button>
      <button disabled = {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handLoCLick} >Convert To Lowercase</button>
      <button  disabled = {text.length===0}  className="btn btn-primary mx-1 my-1" onClick={handClear} >Clear</button>
      <button  disabled = {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handCopy} >Copy</button>
    </div>
   
    <div className="container  my-5">
      <h2>Your Summary</h2>
    <p> {text.split(" ").filter((element =>{return element.length !== 0;})).length} words {text.length}  characters</p>
      <p>  {text.split("").length * 0.008 } Minutes will need to read</p>
      <h2>Preview</h2>
      <p>{text.length>0 ? text:"nothing to preview"}</p>
    </div>
    </>
  );

  
}

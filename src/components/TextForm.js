import React, { useState } from 'react'


export default function TextForm(props) {
  const handleUpClick = () => {

    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to uppercase","success")
  }

  const handleLoClick = () => {
  
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to lowercase","success")

  }
  const handleClearClick = () => {
    
    let newText = '';
    setText(newText)
    props.showAlert("Clipbord clear","success")
   
  }
  const handleOnChange = (event) => {
   
    setText(event.target.value);

  }
  const handleCopy = ()=>{
    let text = document.getElementById('myBox');
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Clipbord  copy","success")
  }
  const handleExtraSpaces = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra spaceses removed","success")
  }
  const [text, setText] = useState('');
  return (
    <div className="container mx-auto mt-8 absolute ">
      <div>
        
        <label for="message" className="block mb-3
 text-sm font-medium mt-12 text-gray-900 dark:text-white"></label>
        <textarea id="myBox"  value={text} rows="4" style={{backgroundColor: props.mode==='white'?'white':'black'}} onChange={handleOnChange}placeholder="Write your  thoughts here..." className={`block  p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "  text-${props.mode==='white'?'black':'white'}`} ></textarea>
        <button type="button" className={`text-${props.mode==='white'?'black':'white'} bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800`} onClick={handleUpClick} >convert to uppercase</button>
        <button type="button" className={`text-${props.mode==='white'?'black':'white'} bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800`} onClick={handleLoClick} >convert to lowercase</button>
        <button type="button" className={`text-${props.mode==='white'?'black':'white'} bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800`} onClick={handleClearClick} >Clear Text</button>
        <button type="button" className={`text-${props.mode==='white'?'black':'white'} bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800`} onClick={handleCopy} >Copy Text</button>
        <button type="button" className={`text-${props.mode==='white'?'black':'white'} bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800`} onClick={handleExtraSpaces} >Remove Extra Spaces</button>
      </div>
      <div className={`container flex flex-col space-x-2 my-auto  text-${props.mode==='white'?'black':'white'} `}>
        <h1 className={`ml-1 font-bold mx-2 `}>Your text summary </h1>
        <p>{text.split(" ").filter((element)=>{
          return element.length!==0}).length} words &  {text.length} characters</p>
        <p>{0.008 * text.split(" ").length } Minutes Read</p>
        <h1 className='font-bold mx-2'>Preview</h1>
        <p>{text.length>0?text:"Enter somthing to preview it here"}</p>
      </div>
      </div>

  )
}

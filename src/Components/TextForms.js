import React,{useState} from 'react'

export default function TextForms(props) {
    const handleUpClick = ()=>{
        // setText("You have clicked on HandleUpclick");
        const newText = text.toUpperCase();
        setText(newText);// The entered text is converted to UpperCase on a click
        props.showAlert("Entered text is Converted to UpperCase ","success");
    }
    const handleLoClick = ()=>{
        // setText("You have clicked on HandleUpclick");
        const newText = text.toLowerCase();
        setText(newText);// The entered text is converted to UpperCase on a click
        props.showAlert("Entered text is Converted to LowerCase ","success");
    }
    const handleCopyClick = ()=>{
        let text1 = document.getElementById("form");
        text1.select();
        navigator.clipboard.writeText(text1.value);
        props.showAlert("Text Copied to ClipBoard!1","success");
    }
    const handleClearClick = ()=>{
       setText("");
    }
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    const [text,setText] = useState('Enter text here');
    // text = "new Text" //Wrong to change text
    // setText("New Text") //Corret Way to change Text
    return (
        <>
        <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
            <div class="mb-3">
                <h1>{props.heading}</h1>
                <textarea className="form-control" value={text} onChange={handleOnChange} id="form" rows="8"></textarea>
            </div>
           <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick} >Convert to UppperCase</button>
           <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLoClick} >Convert to LowerCase</button>
           <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopyClick} >Copy Text</button>
           {/* <button className="btn btn-primary mx-2 my-2" onClick={handlePasteClick} >Paste Text</button> */}
           <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClearClick} >Clear Text</button>
        </div>
        <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
            <h2 className="my-3">Your Text Summary</h2>
            <ul>
                <li><p>Entered Text has {text.split(" ").filter((element)=>{return element.length!==0}).length} words and Total {text.length} Characters.</p></li>
                <li><p>Time taken to read the Text is {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes.</p></li>
            </ul>
        </div>
        </>
    )
}


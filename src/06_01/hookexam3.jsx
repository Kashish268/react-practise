import { useState } from "react";

function SetExam3(){
    const [Color , setColor] = useState("Red");
    const [backgroundColor, setBackgroundColor] = useState("black");
    const [fontWeight, setFontWeight] = useState("normal");
    const [fontStyle, setFontStyle] = useState("normal");
    const [textDecoration, setTextDecoration] = useState("none");
    return(
        <div>
            <input type="radio" name="color" onChange={()=>{setColor("Green"); setBackgroundColor("blue");}}/>
            {"Green"}
            <br></br>

            <input type="radio" name="color" onChange={()=>{setColor("purple"); setBackgroundColor("pink");}}/>
            {"purple"}
            <br></br>

            <input type="radio" name="color" onChange={()=>{setColor("blue"); setBackgroundColor("orange");}}/>
            {"blue"}
            <br></br>

            <input type="checkbox" name="check1"  onChange={(e)=>setFontWeight(e.target.checked ? "bold": "normal")}/>
            bold
            <br></br>

            <input type="checkbox" name="check1"  onChange={(e)=>setFontStyle(e.target.checked ? "italic" : "normal")}/>
            italic
            <br></br>

            <input type="checkbox" name="check1"  onChange={(e)=>setTextDecoration(e.target.checked ? "underline" : "none")}/>
            underline
            <br></br>
            <p style={{color : Color, backgroundColor : backgroundColor, padding:30 , fontWeight : fontWeight, fontStyle : fontStyle, textDecoration : textDecoration}}>Hello World!
            </p>
        </div>
    );
}
export default SetExam3;
import React, { useState } from "react";

const Calculator=()=>{
    const[input, setInput]=useState("");
    const [result, setResult] = useState("");

    const handleClear=()=>{
        console.log("Clear");
        setInput("");
        setResult("");
    }
const handleEqual = () => {
  try {
    const trimmed = input.trim();

    // Check if input is empty
    if (trimmed === "") {
      setResult("Error");
      return;
    }

    const lastChar=trimmed[trimmed.length-1];
    if(["+","-","*","/"].includes(lastChar)){
        setResult("Error");
        return;
    }
    const result=Function(`return ${trimmed}`)();
    if(result===Infinity){
        setResult("Infinity");
    }else if(isNaN(result)){
        setResult("NaN")
    }else{
        setResult(result.toString());
    }
   
  } catch (error) {
    setResult("Error");
  }
};

    const handleClick=(value)=>{
        switch(value){
            case "C":
                handleClear();
                break;
            case "=":
                handleEqual();
                break;
            case "+":
            case "-":
            case "*":
            case "/":
                setInput((prev)=>{
                    
                    if(prev === "" ||["+","-","*","/"].includes(prev.slice(-1))){
                        return prev;
                    }
                    return prev+ value ;
                });
                break;
            default:
                setInput((prev)=>prev + value);

        }
    }

    const buttons=[["7","8","9","+"],["4","5","6","-"],["1","2","3","*"],["C","0","=","/"]];
    return(
        <div >
            <h1>React Calculator </h1>
            <input type={"text"} value={input} readOnly style={{margin:10,width:"350px",height:"50px",borderRadius:"10px", border:"2px solid orange",  fontSize: "20px",
          textAlign: "right",
          padding: "10px",}}  />
          <div style={{fontSize: "20px", fontWeight: "bold", color: "grey", minHeight: "30px"}}>
            {result}
          </div>
          {/* <p>{input}</p> */}
           {buttons.map((row,rowIndex)=>(
            <div key={rowIndex} style={{marginTop:10}}>
                {row.map((btn)=>(
                    <button key={btn} style={{margin:10, padding:32,borderRadius:"8px",border:"2px solid green",cursor:"pointer"}} onClick={()=>handleClick(btn)}>{btn}</button>
                ))}
            </div>
           ))}
            {/* <div className={"row2"} style={{marginTop:"10px"}}>
                <button style={{margin:10, padding:32,borderRadius:"8px",border:"2px solid green",cursor:"pointer"}} onClick={()=>handleClick("4")}>4</button>
                 <button style={{margin:10, padding:32,borderRadius:"8px",border:"2px solid green",cursor:"pointer"}} onClick={()=> handleClick("5")}>5</button>
                  <button style={{margin:10, padding:32,borderRadius:"8px",border:"2px solid green",cursor:"pointer"}} onClick={()=> handleClick("6")}>6</button>
                   <button style={{margin:10, padding:32, borderRadius:"8px", border:"2px solid green",cursor:"pointer"}} onClick={()=>handleClick("-")}>-</button>
            </div>
            <div className={"row3"} style={{marginTop:"10px"}}>
                <button style={{margin:10, padding:32,borderRadius:"8px",border:"2px solid green",cursor:"pointer"}} onClick={()=> handleClick("1")}>1</button>
                 <button style={{margin:10, padding:32,borderRadius:"8px",border:"2px solid green",cursor:"pointer"}} onClick={()=> handleClick("2")}>2</button>
                  <button style={{margin:10, padding:32,borderRadius:"8px",border:"2px solid green",cursor:"pointer"}} onClick={()=> handleClick("3")}>3</button>
                   <button style={{margin:10, padding:32, borderRadius:"8px", border:"2px solid green",cursor:"pointer"}} onClick={()=> handleClick("*")}>*</button>
            </div>
            <div className={"row4"} style={{marginTop:"10px"}}>
                <button style={{margin:10, padding:32,borderRadius:"8px",border:"2px solid green",cursor:"pointer"}} onClick={handleClear}>C</button>
                 <button style={{margin:10, padding:32,borderRadius:"8px",border:"2px solid green",cursor:"pointer"}} onClick={()=> handleClick("0")}>0</button>
                  <button style={{margin:10, padding:32,borderRadius:"8px",border:"2px solid green",cursor:"pointer"}} onClick={handleEqual}>=</button>
                   <button style={{margin:10, padding:32, borderRadius:"8px", border:"2px solid green",cursor:"pointer"}} onClick={()=> handleClick("/")}>/</button>
            </div> */}
        </div>
    )
}
export default Calculator;
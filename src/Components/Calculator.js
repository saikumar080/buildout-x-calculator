import React, { useState } from "react";

const Calculator=()=>{
    const[input, setInput]=useState("");
    const handleClick=(value)=>{
        setInput((prev)=>prev+value)
    }
    const handleClear=()=>{
        console.log("Clear");
        setInput("");
    }
    const handleEqual=()=>{
        try{
            const result=eval(input);
            setInput(result.toString());
        }catch(error){
            setInput("Error");
        }
    }
    return(
        <div >
            <h1>React Calculator </h1>
            <input style={{margin:10,width:"350px",height:"50px",borderRadius:"10px", border:"2px solid orange",  fontSize: "20px",
          textAlign: "right",
          padding: "10px",}} value={input} ></input>
          {/* <p>{input}</p> */}
            <div className={"row1"} style={{marginTop:"10px"}}>
                <button style={{margin:10, padding:32,borderRadius:"8px",border:"2px solid green",cursor:"pointer"}} onClick={()=> handleClick("7")}>7</button>
                 <button style={{margin:10, padding:32,borderRadius:"8px",border:"2px solid green",cursor:"pointer"}} onClick={()=> handleClick("8")}>8</button>
                  <button style={{margin:10, padding:32,borderRadius:"8px",border:"2px solid green",cursor:"pointer"}} onClick={()=> handleClick("9")}>9</button>
                   <button style={{margin:10, padding:32, borderRadius:"8px", border:"2px solid green",cursor:"pointer"}} onClick={()=> handleClick("+")}>+</button>
            </div>
            <div className={"row2"} style={{marginTop:"10px"}}>
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
            </div>
        </div>
    )
}
export default Calculator;
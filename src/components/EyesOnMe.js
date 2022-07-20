// // Code EyesOnMe Component Here
// function keypad(){
//     function handleChange(event){
// console.log("Entering password")
    
// }
// return (<input 
// type="text"
// name="password"
// onChange={handleChange}
// placeHolder="Entering password"
// />
// )
// }
import React from "react";

function EyesOnMe(){
    function handleFocus(){
        console.log("Good!");
    }

function handleBlur(){
    console.log("Hey! Eyes on me!");
}
    return(
        <button onFocus={handleFocus} onBlur={handleBlur}>Eyes on me</button>
    );
}

export default EyesOnMe 

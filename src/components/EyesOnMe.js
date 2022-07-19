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
    function dealWithFocus(){
        console.log("Good!");
    }

function dealWithBlur(){
    console.log("Hey! Eyes on me!");
}
    return(
        <button onFocus={dealWithFocus} onBlur={dealWithBlur}>Eyes on me</button>
    );
}
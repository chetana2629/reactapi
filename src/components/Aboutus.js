import React, {useEffect, useState } from "react";

export default function Aboutus() {
  var [counter, setcounter] = useState(100);
  function f1() {
    setcounter(counter +10);

  }
//   UE called on component load as well as change in the state variable
//   useEffect(function (){

//     console.log(Math.random());
//   })
// useEffect(function (){

//     console.log(Math.random());
//   },[])

useEffect(function (){
     console.log(Math.random());
    return () =>{  //this is call back function 
        console.log("Success!");
    }
  },[])
  return (
    <div className="container">
      <h1>Use Effect Example</h1>
      <p>{counter}</p>
      <button onClick={f1}>Enter</button>
    </div>
  );
}

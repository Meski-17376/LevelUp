import React from "react";
import Hello from "./Hello";
import m from "./m.PNG";
function Main(){
    return(
        <body>
        <section  class="wbody">
        <div id="whole">
        <Hello/>
        <div class="flex-container">
        <img src={m} id="imgs"  />
        <div class="mine">
        <p>
        <span id="p1">COMPLETE YOUR</span> <br/><span  id="online">ONLINE EXAM</span><br/>
        <span id="p2">Lorem ipsum dolor sit amet, consectetur <br/>adipiscing elit, sed do eiusmod tempor  </span>
        </p>
        <div >
        <button id="b1" >PAY NOW</button>
        <button id="s1">SUBMIT</button></div>
        </div>
     </div>
     </div>
   </section>  
 </body>
    );
}
export default Main;
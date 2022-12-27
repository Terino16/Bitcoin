import React, {  useState } from 'react'
import "./Api.css"

const Api = () => {
    const [fact,newfacts]=useState(["Click The button Down for intersting cat facts"]);
    const catfacts=()=>{
        fetch(`https://catfact.ninja/fact`).then((result)=>{
            result.json().then((resp)=>{
                newfacts(resp.fact);
            });
          
        })
        
    }
   
  return (
    <div className='background'>
         <h1 className='Hedline'>匚卂ㄒ 千卂匚ㄒ丂</h1>
       
        <p className='Text'>{fact}</p>
        <button  onClick={catfacts} className="Btn" > <img  className='gungun' src={require('../images/2170.jpg')}/></button>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>   
      
    </div>
  )
}

export default Api
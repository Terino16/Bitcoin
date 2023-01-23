import React, { useState } from 'react'
import "./Bitcoin.css"
const Bitcoin = () => {
  const [present, setpresent]=useState(["Click to get current BTC Rate"])
  const [presen, setpresen]=useState("");
  const [prese, setprese]=useState("");
 
  
  const Getbtc=()=>{
     fetch(`https://api.coindesk.com/v1/bpi/currentprice.json`).then((result)=>{
      result.json().then((price)=>{
        setpresent("Currency: "+price.bpi.USD.code);
        setpresen("Rate: $"+price.bpi.USD.rate);
        setprese("Floating rate: $"+price.bpi.USD.rate_float);
      
     }
    )})
     
  }
  return (
       <div className='Btc'> 
         <div className='Btc2'>
          Bitcoin Price Tracker
         </div>
         <p className='text'>{present}</p>
         <p className='text'>{presen}</p>
         <p className='text'>{prese}</p>
      
         <img  alt="Fuckoff" src='https://static.vecteezy.com/system/resources/previews/005/018/578/original/bitcoin-isolated-on-black-background-free-vector.jpg' onClick={Getbtc} className="Btcimg"/>
       </div>
  )
}

export default Bitcoin
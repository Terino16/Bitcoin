import React from 'react';
import ReactDOM from 'react-dom/client';
// import Head from "./Head"
// import Mid from './mid'
import Bitcoin from "./Bitcoin.js"
function wish()
{
   return(
      <div>
    <Bitcoin/>
      </div>
   )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
   wish()

);


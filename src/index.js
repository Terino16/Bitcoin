import React from 'react';
import ReactDOM from 'react-dom/client';
// import Head from "./Head"
// import Mid from './mid'
import Api from "./Apiuse/Api.js"
function wish()
{
   return(
      <div>
    <Api/>
      </div>
   )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
   wish()

);


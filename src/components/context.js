import React from "react";
import ReactBootstrap from 'react-bootstrap';
import axios from 'axios';
import {
    Route,
    Link,
    HashRouter
   } from 'react-router-dom';
import { createContext } from 'react';

   
const Context = createContext(null);

   function Card(props){
       function classes(){
         const bg  = props.bgcolor ? ' bg-' + props.bgcolor : ' ';
         const txt = props.txtcolor ? ' text-' + props.txtcolor: ' text-white';
         return 'card mb-3 ' + bg + txt;
       }
     
       return (
         <div className={classes()} style={{maxWidth: "19rem"}}>
           <div className="card-header">{props.header}</div>
           <div className="card-body">
             {props.title && (<h5 className="card-title">{props.title}</h5>)}
             {props.text && (<p className="card-text">{props.text}</p>)}
             {props.body}
             {props.status && (<div id='createStatus'>{props.status}</div>)}
           </div>
         </div>      
       );    
     }

     export default Context;



   
    
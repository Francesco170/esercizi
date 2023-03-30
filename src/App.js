import React from "react";
import { Container } from "./Container";
export class App extends React.Component{
   render(){
      
    return(
        <Container title={<h1>this is a title</h1>} 
        child={<p>this is a child</p>}/>
    )
}}

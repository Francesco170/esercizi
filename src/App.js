import React from "react";
import { Counter } from "./Counter";
export class App extends React.Component{
   render(){
      
    return(
        <Counter  initialValue={0} interval={1000} increment={1} />
    )
}}

import React from "react";
import { Age } from "./Age";
export class Welcome extends React.Component{
    render(){
        const nome= <strong> francesco</strong>
   return (
    <>
    <p> "Welcome, {nome}" </p>
     <Age age={ 19 }/>
    </>
    )
}}
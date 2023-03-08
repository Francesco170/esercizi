import React from "react";

export class Sum extends React.Component{
    render(){
    function sum(a,b,){
       let somma = a+b;
        return somma;
    }
    return (<h2> {sum(1,100)}</h2>)
}}
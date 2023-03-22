import React from "react";

export class Welcome extends React.Component{
    render(){
        const nome= <strong> francesco</strong>
   return (
    <>
    <p> "Welcome, {nome}"</p>
    <p>"your age is {this.props.age}"</p>
    </>
    )
}}
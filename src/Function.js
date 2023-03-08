import React from "react"
  
export class Func extends React.Component{
   
    render(){
       function Name(name){
        name="francesco"
        return name
       }
       
         return <h1>"Hello, {Name()}"</h1>
        
    }
    
}
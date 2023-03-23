import React from "react";


export class Age extends React.Component{
    render(){
    return(
        <>
        
        { this.props.age >18 && this.props.age<65 
        ?<p>" your age is {this.props.age} "</p>
        
        :null} 
        </>
    )
}
}
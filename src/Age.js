import React from "react";


export class Age extends React.Component{
    render(){
    return(
        <>
        {this.props.age>=18
        ? <p>" your age is {this.props.age}</p>
        :null} 
        </>
    )
}
}
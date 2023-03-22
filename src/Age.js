import React from "react";


export class Age extends React.Component{
    render(){
    return(
        <>
        {this.props.age
        ? <p>" your age is {this.props.age}</p>
        :null} 
        </>
    )
}
}
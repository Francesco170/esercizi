import React from "react";

export class ClickCounter extends React.Component{
     constructor(props){
        super(props)
        this.state = {
            count: 0,
        }
        this.increment = this.increment.bind(this);
        
        
    }   
        increment() {
            this.setState(value => ({
                count: value.count + 1,
            }));
        }
        
        
        
        render() {
            return (
                <>
          <h1>{this.state.count}</h1>
          <button onClick={this.increment}>+</button>
         
        </>
      )
    }
}
import React from "react";
export class TodoList extends React.Component{
    state = {
       input:""
    }

    EventHandler = (event) => {
       const value = event.target.value

       this.setState({
       input : value
       })
    }



    buttonhandler=()=>{
      this.items= this.props.name.push(this.state.input)
      
      this.setState({
        input : ""
        })
    }
    render(){
        
        const items= this.props.name.map((name,index) => <li key={name + index}>{name}</li> )
        return(
            <>      
            <input id="input" onChange={this.EventHandler} value={this.state.input}/>  
            <button  onClick={this.buttonhandler} >Click Me</button>
            <ul>{items} </ul>      
            </>
        )
    }
}
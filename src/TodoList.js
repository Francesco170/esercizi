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



buttonhandler=(event)=>{
    this.items= this.props.name.push(this.state.input)
      
    const value = event.target.value
        
    this.setState({
    input : value
})
      
    }
    render(){
        
        const items= this.props.name.map((name,index) => <li key={name + index}>{name}</li> )
        return(
            <>      
            <input onChange={this.EventHandler} />  
            <button  onClick={this.buttonhandler} >Click Me</button>
            <ul>{items} </ul>      
            </>
        )
    }
}
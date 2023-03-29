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

    // resetHandler=(value)=>{
    //   this.items=[""]
    //   this.setState({
    //     items : value
    //   })
    //     console.log(this.items)
    // }


    removeHandler=()=>{
         this.setState({
            rem:this.props.name.pop()
            })
     // da fixare 
    }
    render(){
        
        const items= this.props.name.map((name,index) => 
        <li key={name + index}>   
        {name} 
        <button name="remove" onClick={this.removeHandler}> remove</button> 
        </li> )
        
      
        return(
            <>      
            <input onChange={this.EventHandler} value={this.state.input}/> 

            <button  onClick={this.buttonhandler} >Click Me</button>
            <ul>{items}</ul>      
            </>
        )
    }
}
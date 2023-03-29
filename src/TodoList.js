//non so perchè ma il nome non viene aggiunto subito, viene aggiunto dopo aver cliccato il bottone ed aver riscritto una lettera nel campo input



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
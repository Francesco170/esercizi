import React from "react";


export class Login extends React.Component{
    state = {
        username:"",
        password:"",
        remember:false,
       
    }

    EventHandler = (event) => {
       const value = event.target.value

       this.setState({
        username : value
       })
    }

    PasswordHandler = (event) => {
        const value = event.target.value
 
        this.setState({
        password : value
        })
     }

    CheckHandler = (event) => {
        const checked = event.target.checked
 
        this.setState({
       remember : checked
        })
     }

   
   
    render(){
            
    return(
        <>
          
            <input name="username"   onChange={this.EventHandler} value={this.state.username}/>  
            <input name="password" type="password"  onChange={this.PasswordHandler} value={this.state.password}/> 
            <input name=" remember" type="checkbox" onChange={ this.CheckHandler} checked={this.state.check} /> 
                  
        </>
    )
}
}
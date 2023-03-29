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
        const Login={
           backgroundColor:this.state.password.length<8 ? 'red':'green'
        }
            
    return(
        <>
             
            <input name="username"   onChange={this.EventHandler} value={this.state.username}/>  
            <input name="password" type="password"  onChange={this.PasswordHandler} value={this.state.password}/> 
            <input   name=" remember" type="checkbox" onChange={ this.CheckHandler} checked={this.state.check} /> 
              <button style={Login} name="login"    disabled={!this.state.username && !this.state.password}>Login</button>    
        </>
    )
}
}
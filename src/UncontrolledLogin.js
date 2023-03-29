import React from "react";
export class UncontrolledLogin extends React.Component{
    
    
    
    
    
    
    HandleFormSubmit=(event)=>{
        event.preventDefault()

         const username= event.target.elements.username.value
         const password= event.target.elements.password.value
         const remember= event.target.elements.remember.checked

         console.log({
            username,password,remember
         })
    }
    
    
    render(){
        return(
            <>
            <form onSubmit={this.HandleFormSubmit} >
            <input name="username" autoFocus/>  
            <input name="password" type="password"/> 
            <input name="remember" type="checkbox"  />


            <button name="login" type="submit">Login</button>    
            <button name=" reset" type="reset"> reset</button>
              </form>
            </>
        )
    }
}
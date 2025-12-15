import React, { Component } from "react";

export default class UsersForm extends Component{
    
    initialUserState = {
        name:"",
        email:"",
        age:"",
        role:"",
        city:"",
    };
    
    state={
        user: this.initialUserState,
    };
    
    handleChange=(e)=>{
        const newUser={...this.state.user};
        newUser[e.target.name] =e.target.value;
        this.setState({user:newUser});
    };
    
    handleSubmit=()=>{
        
        this.props.addUser(this.state.user);
        this.handleReset(); 
    };
    
    
    handleReset=()=>{
        this.setState({
            user: this.initialUserState,
        })
    }
    
    render(){
        return(
            <div>
                <label htmlFor="">Name:</label>
                <input type="text" name="name" value={this.state.user.name}
                onChange={(e)=>{
                    this.handleChange(e);
                }} />
                  <label htmlFor="">Email:</label>
                <input type="email" name="email" value={this.state.user.email}
                onChange={(e)=>{
                    this.handleChange(e);
                }} />
                  <label htmlFor="">age:</label>
                <input type="number" name="age" value={this.state.user.age}
                onChange={(e)=>{
                    this.handleChange(e);
                }} />
                  <label htmlFor="">role:</label>
                <input type="text" name="role" value={this.state.user.role}
                onChange={(e)=>{
                    this.handleChange(e);
                }} />
                  <label htmlFor="">city:</label>
                <input type="text" name="city" value={this.state.user.city}
                onChange={(e)=>{
                    this.handleChange(e);
                }} />
                <button type="button" onClick={this.handleSubmit}>AddUser</button>
                
            </div>
        )
    }
}
import React from "react";
import { Component } from "react";

export default class UserForm extends Component {
    state = {
        user: {
            name: "",
            email: "",
            age: "",
            role: "",
            city: "",
        },
    };
    handleChange = (e) => {
        const newUser = { ...this.state.user };
        newUser[e.target.name] = e.target.value;
        this.setState({ user: newUser });
    };
    handleSubmit = () => {
        console.log("adding User");
        this.props.addUser(this.state.user)
    }
    render() {
        return (
            <div>
                <form>
                    <label htmlFor="">Name:</label>
                    <input type="text" name="name" value={this.state.user.name}
                        onChange={(e) => {
                            this.handleChange(e);
                        }} />
                    <br />
                    <label htmlFor="">email:</label>
                    <input type="text" name="email" value={this.state.user.email}
                        onChange={(e) => {
                            this.handleChange(e);
                        }} />
                    <br />
                    <label htmlFor="">age:</label>
                    <input type="number" name="age" value={this.state.user.age}
                        onChange={(e) => {
                            this.handleChange(e);
                        }} />
                    <br />
                    <label htmlFor="">role:</label>
                    <input type="text" name="role" value={this.state.user.role}
                        onChange={(e) => {
                            this.handleChange(e);
                        }} />
                    <br />
                    <label htmlFor="">city:</label>
                    <input type="text" name="city" value={this.state.user.city}
                        onChange={(e) => {
                            this.handleChange(e);
                        }} />
                    <br />
                    <button type="button" onClick={this.handleSubmit}>Add User</button>
                </form>
            </div>
        )
    }
}
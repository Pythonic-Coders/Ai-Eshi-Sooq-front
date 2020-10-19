const { Component } = require("react");
import React from 'react';

export default class Signup extends React.Component {


    state = {
        credentials:{
            email:'',
            username:'',
            password:''
        }
    }

    signup = event => {
        event.preventDefault();
        // console.log(this.state.credentials);
        fetch('https://ai-eshi-sooq-api.herokuapp.com/api/v1/post/user/',{
            method:'Post',
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify(this.state.credentials)
        })
        .then(data => data.json())
        .then(data =>{
            if(data){

                window.location.href = '/login';
                console.log(data)
            }else{
                throw new Error('Something went wrong');
            }
        }).catch((error) => {
            console.error(error)
            alert(error);
        })
            
    }


    inputChanged = event => {
        const cred = this.state.credentials;
        cred[event.target.name] = event.target.value;
        this.setState({credentials: cred});

    }

    render() {
        return(
            <div>
                <h1>Sign Up Page</h1>

                <form>
                    <label>
                        Email:
                        <input type='email' name='email' value={this.state.credentials.email}
                        onChange={this.inputChanged}></input>
                    </label>
                    <br/>
                    <label>
                        Username:
                        <input type='text' name='username' value={this.state.credentials.username}
                        onChange={this.inputChanged}></input>
                    </label>
                    <br/>
                    <label>
                        Password:
                        <input type='password' name='password' value={this.state.credentials.password}
                        onChange={this.inputChanged}></input>
                    </label>
                    <br/>
                    <button type='submit' onClick={this.signup}>Sign Up</button>
                </form>
            </div>
        )
    }
}
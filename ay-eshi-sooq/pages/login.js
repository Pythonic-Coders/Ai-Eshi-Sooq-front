const { Component } = require("react");
import React from 'react';

class Login extends React.Component {
    constructor(props){

    super(props)
        this.state = {
            credentials:{
                username:'',
                password:''
            }
          
    
        }
    }

    login = event => {
        event.preventDefault();
        // console.log(this.state.credentials);
        fetch('https://ai-eshi-sooq-api.herokuapp.com/api/v1/post/auth/',{
            method:'POST',
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify(this.state.credentials)
        })
        .then(data => data.json())
        .then(data =>{
        console.log(data)
            if(data.token){
            localStorage.setItem('user_id',JSON.stringify(data.user_id))
            localStorage.setItem('username',JSON.stringify(data.username))
            localStorage.setItem('token',JSON.stringify(data.token))
            localStorage.setItem('isLoggedIn',JSON.stringify(true))
        // console.log(data.user_id)
            window.location.href = '/';
            }else{
                // alert('error');
                throw new Error('Incorrect password or username entered. Please try again.');
            }


        }).catch((error) => {
            // console.error(error)
            // alert(error);
            document.getElementById('logErorr').innerHTML = error
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
                <h1>Log in Page</h1>
                <p id='logErorr'></p>
                <form>
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
                    <button type='submit' onClick={this.login}>Log in</button>
                </form>
            </div>
        )
    }
}

export default Login;
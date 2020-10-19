import React from 'react'

export default class LogOut extends React.Component{
    // window.localStorage.clear();
    // window.location.href = '/';
    constructor(props){
        super(props)
    }
    handelLogOut = event =>{
        window.localStorage.clear();
        window.location.href = '/';
    }
    render(){
        return(
            // <input type='submit' onClick={this.handelLogOut} value='Log Out'/>
            <a onClick={this.handelLogOut}>Logout</a>
        )
    }

}
import React, {Component} from 'react'
import {Link} from "react-router-dom";

class LoginUser extends Component{
    constructor(props) {
        super(props);
        this.state={
            errorMesssage:"",
        }
    }

    loginForm=(e)=>{
        e.preventDefault();
        let usernameFromInput = document.getElementById("username").value;
        let passwordFromInput = document.getElementById("password").value;

        fetch("/login_user/",
            {
                method: "post",
                headers: {
                    "Accept": "application/json",
                    'Content-Type': 'application/json',
                },
                body:JSON.stringify({
                    username: usernameFromInput,
                    password: passwordFromInput,
                }),
            })
            .then(data=>data.json())
            .then(response=>{
                console.log(response);
                if(response.error){
                    this.props.retrieveUserInfo(false, null);
                    this.setState({errorMessage: response.error});
                }
                else{
                    this.props.retrieveUserInfo(true, response);
                //     this.setState({
                //         isLoggedIn: true,
                //         user: response,});
                }
            });
    };


    clearErrorMessage=()=>{
        this.setState({errorMessage: ""})
    };

    render() {
        return(<div>
            <h3>Please Log In</h3>
            <form onSubmit={this.loginForm}>
                <label htmlFor="username">Enter Username</label>
                <input autoFocus type="text" id="username" onChange={this.clearErrorMessage}/><br/>

                <label htmlFor="password">Enter Password</label>
                <input type="text" id="password" onChange={this.clearErrorMessage}/><br/>
                <button>Submit</button>
            </form>
            <h3>{this.state.errorMessage}</h3>
            <h1>Or</h1>
            Click <Link to='/new_user'>Here</Link> to Create a New User
        </div>);
    }
}

export default LoginUser;
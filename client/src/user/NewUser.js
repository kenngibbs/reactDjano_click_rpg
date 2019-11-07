import React, {Component} from 'react'
import {Link} from "react-router-dom";

class NewUser extends Component{
    constructor(props) {
        super(props);
        this.state={
            errorMesssage:"",
        }
    }

    createNewUser=(e)=>{
        e.preventDefault();
        let usernameFromInput = document.getElementById("new_username").value;
        let passwordFromInput = document.getElementById("new_password").value;

        fetch("/users/",{
            method: 'post',
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: usernameFromInput,
                password: passwordFromInput,
            })
        })
            .then(data=>data.json())
            .then(resp=>{
                console.log(resp);
                if(resp.id){
                    console.log(resp);
                    this.props.retrieveUserInfo(true, resp);
                }
                else{
                    this.props.retrieveUserInfo(false, null);
                    this.setState({errorMessage: resp.username});
                }
            });
    };

    clearErrorMessage=()=>{
        this.setState({errorMessage: ""})
    };

    render() {
        return(<div>
            <h3>Create a New User</h3>
            <form onSubmit={this.createNewUser}>
                <label htmlFor="new_username">Enter New Username</label>
                <input type="text" id="new_username" onChange={this.clearErrorMessage}/><br/>

                <label htmlFor="new_password">Enter New Password</label>
                <input type="text" id="new_password" onChange={this.clearErrorMessage}/><br/>
                <button>Submit</button>
            </form>
            <h3>{this.state.errorMessage}</h3>
            <Link to="/">Cancel</Link>
        </div>);
    }
}

export default NewUser;
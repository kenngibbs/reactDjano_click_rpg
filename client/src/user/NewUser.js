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
        let pictureURLFromInput = document.getElementById("new_pictureURL").value;
        let health = Math.floor(Math.random() * 200) + 50;
        let attack = Math.floor(Math.random() * 30) + 5;

        fetch("/users/",{
            method: 'post',
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: usernameFromInput,
                password: passwordFromInput,
                pictureURL: pictureURLFromInput,
                health: health,
                attack: attack,
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
                <input type="password" id="new_password" onChange={this.clearErrorMessage}/><br/>

                <label htmlFor="new_pictureURL">Enter Picture URL</label>
                <input type="text" id="new_pictureURL" onChange={this.clearErrorMessage}/><br/>
                <button>Submit</button>
            </form>
            <h3>{this.state.errorMessage}</h3>
            <Link to="/">Cancel</Link>
        </div>);
    }
}

export default NewUser;
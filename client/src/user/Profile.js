import React, {Component} from 'react'
import {Redirect} from "react-router-dom";

class Profile extends Component{
    constructor(props) {
        super(props);
        this.state={
            goBackToHomePage: false,
        }
    }

    componentDidMount() {
        this.getExistingFormData();
    }

    getExistingFormData=()=>{
        fetch(`/users/${this.props.user.id}/`)
            .then(data=>data.json())
            .then(response=>{
                document.getElementById("username").defaultValue = response.username;
                document.getElementById("password").defaultValue = response.password;
                document.getElementById("pictureURL").defaultValue = response.pictureURL;
            })
    };

    updateProfile=(e) =>{
        e.preventDefault();
        let usernameFromInput = document.getElementById("username").value;
        let passwordFromInput = document.getElementById("password").value;
        let pictureURLFromInput = document.getElementById("pictureURL").value;

        fetch(`/users/${this.props.user.id}/`,
            {
                method: "put",
                headers: {
                    "Accept": "application/json",
                    'Content-Type': 'application/json',
                },
                body:JSON.stringify({
                    id: this.props.user.id,
                    username: usernameFromInput,
                    password: passwordFromInput,
                    pictureURL: pictureURLFromInput,
                }),
            })
            .then(data=>data.json())
            .then(response=>{
                console.log("blah");
                this.setState({goBackToHomePage:true}, ()=>
                    this.props.retrieveUserInfo(true, response));
            });
    };
    render() {
        if(!this.state.goBackToHomePage)
        {
        return(<div>
            <h1>Profile</h1>
            <form onSubmit={this.updateProfile}>
                <label htmlFor="username">Enter Username</label>
                <input autoFocus type="text" id="username"/><br/>

                <label htmlFor="password">Enter Password</label>
                <input type="text" id="password" /><br/>

                <label htmlFor="pictureURL">Enter Picture URL</label>
                <input type="text" id="pictureURL" /><br/>
                <button>Submit</button>
            </form>
        </div>);
        }
        else{
            this.setState({goBackToHomePage:false});
            return(<Redirect to="/"/>)
        }
    }
}

export default Profile;
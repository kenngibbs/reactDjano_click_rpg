import React, {Component} from 'react'
import {Redirect} from "react-router-dom";

class ShopItem extends Component{
    constructor(props) {
        super(props);
        this.state = {
            goBackToHomePage: false,
        }
    }


    updateEqippedItem=()=> {
        fetch(`/users/${this.props.user.id}/`,
            // fetch("/login_user/",
            {
                method: "put",
                headers: {
                    "Accept": "application/json",
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: this.props.user.id,
                    // userID: this.props.user.id,
                    equippedItem: this.props.item.id,
                }),
            })
            .then(data => data.json())
            .then(response => {
                console.log(response);
                this.setState({goBackToHomePage:true});
            });
    };

    render() {
        if(!this.state.goBackToHomePage) {
            return (<div>
                <p><a href="#" onClick={this.updateEqippedItem}>{this.props.item.name}</a> (
                    +{this.props.item.attack} to attack
                    +{this.props.item.health} to health)</p>
            </div>);
        }
        else{
            this.setState({goBackToHomePage:false});
            return(<Redirect to="/"/>)
        }
    }
}

export default ShopItem;
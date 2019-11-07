import React, {Component} from 'react'
import EachItem from "./EachItem";

class Home extends Component{
    constructor(props) {
        super(props);
        this.state= {
            equippedItem: [],
            monsterArray: [],
        }
    }


    componentDidMount() {
        this.getWeaponData();
        // this.getMonsterData();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("Did update!!!");
    }

    getWeaponData = ()=>{
        fetch('/get_user_items/',{
            method:"post",
            header:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({userID: this.props.user.id})
        })
            .then(data=>data.json())
            .then(response=>{
                this.setState({equippedItem:response})
            })
    };

    render() {
        return(<div>
            <h1>Welcome to the fight {this.props.user.username}!!!</h1>
            <img src={this.props.user.pictureURL} width="100px" alt="profile"/>
            <h2>Name: {this.props.user.username}</h2>
            <h2>Health: {this.props.user.health}</h2>
            <h2>Attack: {this.props.user.attack}</h2>
            <hr/>
            {this.state.equippedItem.name!=="" ?
                (<EachItem item={this.state.equippedItem}/>):
                ("No Weapon Equipped")}
        </div>);
    }
}

export default Home;
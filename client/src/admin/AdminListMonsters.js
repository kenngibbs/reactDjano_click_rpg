import React, {Component} from 'react'
import {Link} from "react-router-dom";

class AdminListMonsters extends Component{
    constructor(props) {
        super(props);
        this.state={
            arrayOfMonsters: [],
            errorMessage: "",
        }
    }

    componentDidMount() {
        this.getListOfAllItems();
    }

    getListOfAllItems=()=>{
        fetch('/monsters/')
            .then(data=>data.json())
            .then(response=>{
                let temp_monster_array = response.map(
                    (eachItem)=>{
                        return(
                            <div key={eachItem.id}>
                                <img src={eachItem.pictureURL} width="50px" alt=""/>
                                {/*<button className="buttonLookLookalike">{eachItem.name}</button>(HP: {eachItem.health}/ATK: {eachItem.attack})*/}
                                <Link to={{
                                    pathname: "/edit_monster",
                                    state: {monsterID: eachItem.id}
                                }} >{eachItem.name}</Link>(HP: {eachItem.health}/ATK: {eachItem.attack})
                                <hr/>
                            </div>
                        )
                    }
                );
                this.setState({arrayOfMonsters:temp_monster_array})
            })
    };

    new_monster_funct=(e)=>{
        e.preventDefault();
        let tempBody= {
            name: document.getElementById("name").value,
            pictureURL: document.getElementById("pictureURL").value,
            health: document.getElementById("health").value,
            attack: document.getElementById("attack").value,
        };
        fetch(`/monsters/`,{
            method: 'post',
            headers: {
                "Accept": "application/json",
                "Content-Type": 'application/json',
            },
            body: JSON.stringify(tempBody),
        })
            .then(data=>data.json())
            .then(response=> {
                if (!response.id) {
                    console.log(response);
                    this.setState({errorMessage: "There was an error creating user"})
                }
                else{
                    this.getListOfAllItems();
                }
            });
    };

    render() {
        return(<div>
            <h1>Create New Monster</h1>
            {this.state.errorMessage}
            <form onSubmit={this.new_monster_funct}>
                <label htmlFor="name">Enter Name</label>
                <input autoFocus type="text" id="name"/><br/>

                <label htmlFor="pictureURL">Enter Picture URL</label>
                <input type="text" id="pictureURL"/><br/>

                <label htmlFor="health">Enter Health</label>
                <input type="text" id="health"/><br/>

                <label htmlFor="attack">Enter Attack</label>
                <input type="text" id="attack"/><br/>
                <button>Submit</button>
            </form>
            <h1>List of Monsters</h1>
            {this.state.arrayOfMonsters}
        </div>);
    }
}

export default AdminListMonsters;
import React, {Component} from 'react'
import {Link} from "react-router-dom";

class AdminListItems extends Component{
    constructor(props) {
        super(props);
        this.state={
            arrayOfItems: [],
            errorMessage: "",
        }
    }

    componentDidMount() {
        this.getListOfAllItems();
    }

    getListOfAllItems=()=>{
        fetch('/shopitems/')
            .then(data=>data.json())
            .then(response=>{
                let temp_item_array = response.map(
                    (eachItem)=>{
                        return(
                            <div key={eachItem.id}>
                                <img src={eachItem.pictureURL} width="50px" alt=""/>
                                <Link to={{
                                    pathname: "/edit_item",
                                    state: {itemID: eachItem.id}
                                }} >{eachItem.name}</Link>(HP: {eachItem.health}/ATK: {eachItem.attack})
                                <hr/>
                            </div>
                        )
                    }
                );
                this.setState({arrayOfItems:temp_item_array})
            })
    };

    new_item_funct=(e)=>{
        e.preventDefault();
        let tempBody= {
            name: document.getElementById("name").value,
            pictureURL: document.getElementById("pictureURL").value,
            health: document.getElementById("health").value,
            attack: document.getElementById("attack").value,
        };
        fetch(`/shopitems/`,{
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
            <h1>Create A New Item</h1>
            {this.state.errorMessage}
            <form onSubmit={this.new_item_funct}>
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
            <h1>List of Items</h1>
            {this.state.arrayOfItems}
        </div>);
    }
}

export default AdminListItems;
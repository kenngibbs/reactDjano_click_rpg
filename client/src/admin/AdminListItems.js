import React, {Component} from 'react'
import ShopItem from "../user/ShopItem";

class AdminListItems extends Component{
    constructor(props) {
        super(props);
        this.state={
            arrayOfItems: [],

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
                        return(<div>
                            <p>{eachItem.name} (
                                {eachItem.attack}/
                                +{eachItem.health}/)</p>
                        </div>)
                    }
                );
                this.setState({arrayOfItems:temp_item_array})
            })
    };

    render() {
        return(<div>
            <h1>Shop: Select a Weapon</h1>
            {this.state.arrayOfItems}
        </div>);
    }
}

export default AdminListItems;
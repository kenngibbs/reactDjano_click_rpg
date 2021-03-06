import React, {Component} from 'react'
import ShopItem from "./ShopItem";

class Shop extends Component{
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
                        return(<ShopItem key={eachItem.id} item={eachItem} user={this.props.user}/>)
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

export default Shop;
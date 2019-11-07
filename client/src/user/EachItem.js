import React, {Component} from 'react'

class EachItem extends Component{
    render() {
        return(<div>
                <p>{this.props.item.name} is equipped</p>
                <p>+{this.props.item.attack} to attack</p>
                <p>+{this.props.item.defense} to defense</p>
                <p>+{this.props.item.health} to health</p>
            </div>);
    }
}

export default EachItem;
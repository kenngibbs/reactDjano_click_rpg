import React, {Component} from 'react'

class EachMonster extends Component{

    attackMonster=()=>{

    };

    render() {
        return(<div>
            <img src={this.props.monster.pictureURL} width="100px" alt=""/>
            <p>{this.props.monster.name} has {this.props.monster.health} health!</p>
            <p>Attack: {this.props.monster.attack}</p>
            <p>Health: {this.props.monster.health}</p>
            <button onClick={this.attackMonster}>Attack Monster</button>
            <hr/>
        </div>);
    }
}

export default EachMonster;
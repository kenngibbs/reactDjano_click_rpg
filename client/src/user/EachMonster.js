import React, {Component} from 'react'

class EachMonster extends Component{

    attackMonster=()=>{
        let tempBody={
            userID: this.props.user.id,
            monsterID: this.props.monster.id,
        };
        fetch('/user_attack/',{
            method:"post",
            header:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(tempBody)
        })
            .then(data=>data.text())
            .then(response=>{
                console.log(response);
                this.props.getMonsterData();
            })
    };

    render() {
        return(<div>
            <img src={this.props.monster.pictureURL} width="100px" alt=""/>
            <h2>{this.props.monster.name}</h2>
            <p>Attack: {this.props.monster.attack}</p>
            <p>Health: {this.props.monster.health}</p>
            <button onClick={this.attackMonster}>Attack Monster</button>
            <hr/>
        </div>);
    }
}

export default EachMonster;
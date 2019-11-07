import React, {Component} from 'react'
import EachMonster from "./EachMonster";

class FightMonster extends Component{
    constructor(props) {
        super(props);
        this.state = {
            monsterArray: [],
        }
    }

    componentDidMount() {
        this.getMonsterData();
    }

    getMonsterData = ()=>{
        fetch('/monsters/')
            .then(data=>data.json())
            .then(response=>{
                let temp_monster_array = response.map(
                    (eachMonster)=>{
                        return(<EachMonster key={eachMonster.id} monster={eachMonster}/>)
                    }
                );
                this.setState({monsterArray:temp_monster_array})
            })
    };

    render() {
        return(<div>
            <h1>Fight the Monsters!</h1>
            {this.state.monsterArray}
        </div>);
    }
}

export default FightMonster;
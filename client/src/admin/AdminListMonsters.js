import React, {Component} from 'react'

class AdminListMonsters extends Component{
    constructor(props) {
        super(props);
        this.state={
            arrayOfMonsters: [],
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
                            <div>
                                <img src={eachItem.pictureURL} width="100px" alt=""/>
                                <h2>{eachItem.name}</h2>
                                <p>Attack: {eachItem.attack}</p>
                                <p>Health: {eachItem.health}</p>
                                <hr/>
                            </div>
                        )
                    }
                );
                this.setState({arrayOfMonsters:temp_monster_array})
            })
    };

    render() {
        return(<div>
            <h1>List of Monsters</h1>
            {this.state.arrayOfMonsters}
        </div>);
    }
}

export default AdminListMonsters;
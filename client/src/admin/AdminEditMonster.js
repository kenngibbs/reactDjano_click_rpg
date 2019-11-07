import React, {Component} from 'react'

class AdminEditMonster extends Component{
    constructor(props) {
        super(props);
        this.state={
            // monsterObject:"",
            errorMessage:"",
        }
    }

    componentDidMount() {
        this.get_monster_info();
    }

    get_monster_info=()=>{
        fetch(`/monsters/${this.props.location.state.monsterID}/`)
            .then(data=>data.json())
            .then(response=>{
                // this.setState({monsterObject:response});
                document.getElementById("name").defaultValue = response.name;
                document.getElementById("pictureURL").defaultValue = response.pictureURL;
                document.getElementById("health").defaultValue = response.health;
                document.getElementById("attack").defaultValue = response.attack;
            });
    };

    edit_monster_funct=(e)=>{
        e.preventDefault();
        let tempBody= {
            name: document.getElementById("name").value,
            pictureURL: document.getElementById("pictureURL").value,
            health: document.getElementById("health").value,
            attack: document.getElementById("attack").value,
        };
        fetch(`/monsters/${this.props.location.state.monsterID}/`,{
            method: 'put',
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
                    this.setState({errorMessage: "There was an editting the monster"})
                }
                else{
                    console.log(response);
                    this.props.history.push("/crud_monster");
                }
            });
    };

    deleteMonster=()=>{
        fetch(`/monsters/${this.props.location.state.monsterID}/`,
            {method: 'delete'})
            .then(()=>this.props.history.push('/crud_monster'))
    };

    render() {
        console.log(this.props);
        console.log(this.props.location.state.monsterID);
        return(<div>
            <form onSubmit={this.edit_monster_funct}>
                <label htmlFor="name">Enter Name</label>
                <input autoFocus type="text" id="name"/><br/>

                <label htmlFor="pictureURL">Enter Picture URL</label>
                <input type="text" id="pictureURL"/><br/>

                <label htmlFor="health">Enter Health</label>
                <input type="text" id="health"/><br/>

                <label htmlFor="attack">Enter Attack</label>
                <input type="text" id="attack"/><br/>
                <button>Submit</button>
                <h1>OR</h1>
                <button onClick={this.deleteMonster}>Delete</button>
            </form>
        </div>);
    }
}

export default AdminEditMonster;
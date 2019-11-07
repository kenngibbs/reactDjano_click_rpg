import React, {Component} from 'react'

class AdminEditItems extends Component{
    constructor(props) {
        super(props);
        this.state={
            errorMessage:"",
        }
    }

    componentDidMount() {
        this.get_monster_info();
    }

    get_monster_info=()=>{
        fetch(`/shopitems/${this.props.location.state.itemID}/`)
            .then(data=>data.json())
            .then(response=>{
                // this.setState({monsterObject:response});
                document.getElementById("name").defaultValue = response.name;
                document.getElementById("pictureURL").defaultValue = response.pictureURL;
                document.getElementById("health").defaultValue = response.health;
                document.getElementById("attack").defaultValue = response.attack;
            });
    };

    edit_item_funct=(e)=>{
        e.preventDefault();
        let tempBody= {
            name: document.getElementById("name").value,
            pictureURL: document.getElementById("pictureURL").value,
            health: document.getElementById("health").value,
            attack: document.getElementById("attack").value,
        };
        fetch(`/shopitems/${this.props.location.state.itemID}/`,{
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
                    this.props.history.push("/crud_item");
                }
            });
    };

    deleteItem=()=>{
        fetch(`/shopitems/${this.props.location.state.itemID}/`,
            {method: 'delete'})
            .then(()=>this.props.history.push('/crud_item'))
    };

    render() {
        console.log(this.props);
        console.log(this.props.location.state.itemID);
        return(<div>
            <form onSubmit={this.edit_item_funct}>
                <label htmlFor="name">Enter Item Name</label>
                <input autoFocus type="text" id="name"/><br/>

                <label htmlFor="pictureURL">Enter Picture URL</label>
                <input type="text" id="pictureURL"/><br/>

                <label htmlFor="health">Enter Health</label>
                <input type="text" id="health"/><br/>

                <label htmlFor="attack">Enter Attack</label>
                <input type="text" id="attack"/><br/>
                <button>Submit</button>
                <h1>OR</h1>
                <button onClick={this.deleteItem}>Delete</button>
            </form>
        </div>);
    }
}

export default AdminEditItems;
import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Home from "./Home";
import FightMonster from "./FightMonster";
import Shop from "./Shop";
import Profile from "./Profile";
import LoginUser from "./LoginUser";
import NewUser from "./NewUser";
import AdminListMonsters from "../admin/AdminListMonsters";
import AdminListItems from "../admin/AdminListItems";
import AdminEditMonster from "../admin/AdminEditMonster";
import AdminEditItems from "../admin/AdminEditItems";

class RaidMMO extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            isAdmin: false,
            user: "Not Signed In",
        }
    }

    retrieveUserInfo=(isLoggedIn, user, isAdmin)=>{
        this.setState({
            isLoggedIn: isLoggedIn,
            user: user,
            isAdmin: isAdmin,
        })
    };

    // setAdminTrue=()=>{
    //     this.setState({isAdmin:true})
    // };

    logout=()=>{
        this.setState({
            isLoggedIn: false,
            user: null,
            errorMessage: ""})
    };

    render() {
        if(this.state.isLoggedIn && !this.state.isAdmin){
            return(<div>
                <h1>{this.state.user.username}, Raid the MMO!</h1>
                <Router>
                    <Link className="routeLink" to="/">Fighter Profile</Link>
                    <Link className="routeLink" to="/fight">Fight!</Link>
                    <Link className="routeLink" to="/profile">Edit User</Link>
                    <Link className="routeLink" to="/shop">Shop</Link>
                    <Link className="routeLink" to="/loggout" onClick={this.logout}>Log Out</Link>
                    <Switch>
                        <Route path="/fight">
                            <FightMonster user={this.state.user}/>
                        </Route>
                        <Route path="/profile">
                            <Profile user={this.state.user} retrieveUserInfo={this.retrieveUserInfo}/>
                        </Route>
                        <Route path="/shop">
                            <Shop user={this.state.user} />
                        </Route>
                        <Route path="/">
                            <Home user={this.state.user}/>
                        </Route>
                    </Switch>
                </Router>
            </div>);
        }
        if(this.state.isLoggedIn && this.state.isAdmin){
            return(<div>
                <h1>{this.state.user.username}, Raid the MMO!</h1>
                <Router>
                    <Link className="routeLink" to="/">Home</Link>
                    <Link className="routeLink" to="/crud_monster">List Monsters</Link>
                    <Link className="routeLink" to="/crud_item">List Items</Link>
                    <Link className="routeLink" to="/loggout" onClick={this.logout}>Log Out</Link>
                    <Switch>
                        <Route path="/crud_monster">
                            <AdminListMonsters/>
                        </Route>
                        <Route path="/crud_item">
                            <AdminListItems/>
                        </Route>
                        <Route path="/edit_monster" component={AdminEditMonster}>
                        </Route>
                        <Route path="/edit_item" component={AdminEditItems}>
                        </Route>
                        <Route path="/">
                            <h3>Please select an option above. The Admin does not fight</h3>
                        </Route>
                    </Switch>
                </Router>
            </div>);
        }
        else{
            return(<div>
                <h1>Welcome to RaidMMO</h1>
                <Router>
                    <Switch>
                    <Route path='/new_user'>
                        <NewUser retrieveUserInfo={this.retrieveUserInfo}/>
                    </Route>
                        <Route path="/">
                            <LoginUser retrieveUserInfo={this.retrieveUserInfo}/>
                        </Route>
                    </Switch>
                </Router>
            </div>);
        }
    }
}

export default RaidMMO;
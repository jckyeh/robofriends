import React from 'react';
import { robots } from './robots';
import CardList from './CardList';
import Searchbox from './Searchbox';

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }
    render() {
        return (
            <div className="tc">
                <h1>Robofriends</h1>
                <Searchbox />
                <CardList robots={ this.state.robots }/>
            </div>
        );
    }
}

export default App;
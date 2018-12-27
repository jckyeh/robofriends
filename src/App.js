import React from 'react';
// import { robots } from './robots';
import CardList from './CardList';
import Searchbox from './Searchbox';
import './app.css';

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        };
        this.onSearchChange = this.onSearchChange.bind(this);
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {this.setState({robots: users})})
    }

    onSearchChange(event) {
        this.setState({ searchfield: event.target.value });
    }

    render() {
        const filteredRobots = this.state.robots.filter((robot) => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        if (this.state.robots.length === 0) {
            return <h1 className="tc">Loading</h1>
        } else {
            return (
                <div className="tc">
                    <h1 className="f1">Robofriends</h1>
                    <Searchbox searchChange={ this.onSearchChange }/>
                    <CardList robots={filteredRobots}/>
                </div>
            );
        }
    }
}

export default App;
import React from 'react';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';

import './App.css';

class App extends React.Component{
  constructor(){
    super();
      this.state = {
        monsters: [],
        searchField: ""
      }
  }
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => this.setState({monsters: users}))
  }
  //Just use the arrow function in react all the time
  handleChange = (e) => {
    this.setState({searchField: e.target.value})
  }

  render(){
    const {monsters, searchField} = this.state;
    //This is same as doing const monsters = this.state.monsters;
    const filteredArray = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase())
    })
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox placeholder="search monsters"
        handleChange={this.handleChange}
        />
        <CardList monsters={filteredArray} />
      </div>
    );
  }
}

export default App;
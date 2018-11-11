import React, { Component } from 'react';
import Ninjas from './Ninjas'
import AddNinja from './AddNinja'

class App extends Component {
  state = {
    ninjas : [
      {name: "Samuel", age:"29", job:"Web Developer", id:"1"},
      {name: "Glaudja", age:"24", job:"Nail Artist", id:"2"},
      {name: "Aureli", age:"57", job:"Public Server", id:"3"}
    ]
  }

  addNinja = (ninja) => {
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas, ninja];
    this.setState({
      ninjas
    })
  }

  deleteNinja = (id) => {
    let ninjas = this.state.ninjas.filter(ninja => {
      return ninja.id !== id
    })
    this.setState({
      ninjas
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Welcome to My First React App!</h1>
        <p>My Children!</p>
        <Ninjas ninjas={this.state.ninjas} deleteNinja={this.deleteNinja}/>
        <br></br>
        <AddNinja addNinja={this.addNinja} />
      </div>
    );
  }
}

export default App;

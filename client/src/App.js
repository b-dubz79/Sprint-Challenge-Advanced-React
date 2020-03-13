import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import PlayerList from './PlayerList'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      teamInfo: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/players')
    .then(response => {
      this.setState({
        teamInfo: response.data
      })
    }, [])
  }

  render () {
  return (
    <div className="App">
      <PlayerList teamInfo={this.state.teamInfo}/>
    </div>
  );
  }
}

export default App;

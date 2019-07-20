import React from 'react';
import './App.css';

function App() {
  class Counter extends React.Component {
    constructor (){
      super()
      this.state = {
        score: 0
      };
    }

    decrementScore = () => {
      this.setState( prevState => ({
          score: prevState.score - 1          
      }));
    }

    incrementScore = () => {
      this.setState( prevState => ({
          score: prevState.score + 1  
      }));
    }

    render (){
      return (
        <div className="counter">
          <button className="counter-action decrement" onClick={ this.decrementScore }> - </button>
          <span className="counter-score">{ this.state.score }</span>
          <button className="counter-action increment" onClick={ this.incrementScore }> + </button>
        </div>
      );
    }
  };

  const Header = (props) => {
    console.log(props);
    if (props.totalPlayers < 1) {
      return(
        <header className="App-header">
          <div>Sorry, you can't play without players!</div>
        </header>
      );
    }

    let players = [];
    
    for (let i = 1; i <= props.totalPlayers; i++){
      players.push(<Player key={ 'player'+i.toString() } playerName={'Player '+ i } />);
    }

    return(
      <header className="App-header">
        <h1>{ props.title }</h1>
        <span className="stats">Total Players: { props.totalPlayers }</span>
        <div className="player-board">
          { players }
        </div>
      </header>
    );     

  };


  const Player = (props) => {
    return (
        <div className="player">
          <div className="player-name">
            <input type="text" className="player-name-input" defaultValue={ props.playerName } />
          </div>
          <Counter id={ props.playerName } />
        </div>
      );
  };

  return (
    <div className="App">
      <Header 
        title="Score Tracker" 
        totalPlayers={ prompt("How many players?") } 
      />    
    </div>
  );
}

export default App;

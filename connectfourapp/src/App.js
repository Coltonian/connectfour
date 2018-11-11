import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import {Board} from '../src/Components/Board/Board.jsx';
import {Game} from '../src/Components/Game/Game.jsx';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    
  }
  
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Game />
        </div>
        <div className="game-info">
          <div>{}</div>
          <ol>{}</ol>
        </div>
      </div>

    );
  }
}

export default App;

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
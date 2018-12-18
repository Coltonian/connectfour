import React from 'react';
import ReactDOM from 'react-dom';
import './Board.css'
import { Square } from '../Square/Square.jsx';
import { Scoreboard } from '../Scoreboard/Scoreboard.jsx';


export class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //starting board of blank squares
            squares: Array(42).fill(null),

            //tracks what color goes on this turn
            isBlueNext: true,

            //track which squares are clicked, by color
            clickedSquaresBlue: [],
            clickedSquaresRed: [],

            //these are the indices for the squares array that are considered legal moves on a given turn
            legalSquares: [0, 1, 2, 3, 4, 5, 6],

            //number of games won by each player.  this is displayed in the Scoreboard component
            blueGamesWon: [],
            redGamesWon: [],
        };

        this.handleClick = this.handleClick.bind(this);
    }
    
    //prints a 7x6 grid of square components
    renderSquare(i) {
        return <Square 
        value={i}
        color={this.state.squares[i]}
        onClick={() => this.handleClick(i)}/>;
    } 

    isLegalSquare(i) {
        return this.state.legalSquares.some(value => value == i);
    }

    updateLegalSquares(i) {
        let legalSquares = [...this.state.legalSquares].filter(v => v !== i);
        legalSquares.push((i + 7));
        this.setState({legalSquares: legalSquares});
    }


    handleClick = (i) => {
        //is this a legal square
        if(this.isLegalSquare(i)) {
            this.updateLegalSquares(i);
        } else {
            alert('You must choose an empty block in the bottom row or one that is directly above an already played block.');
            return;
        }
        
        //if it is, then change the color, then change isBlueNext
        const squares = [...this.state.squares];
        squares[i] = this.state.isBlueNext ? "blue" : "red";

        //Call calculate winner function from Game.jsx
        this.setState({
            squares: squares,
            isBlueNext: !this.state.isBlueNext,
            clickedSquaresBlue: this.state.isBlueNext ? [...this.state.clickedSquaresBlue, i] : [...this.state.clickedSquaresBlue],
            clickedSquaresRed: this.state.isBlueNext ? [...this.state.clickedSquaresRed] : [...this.state.clickedSquaresRed, i],
        }); 
        
        if(this.props.calculateWinner(this.state.clickedSquaresBlue, this.state.clickedSquaresRed, this.state.isBlueNext)) {
            this.setState({
                squares: Array(42).fill(null),
                isBlueNext: true,
                clickedSquaresBlue: [],
                clickedSquaresRed: [],
                legalSquares: [0, 1, 2, 3, 4, 5, 6],
                blueGamesWon: !this.state.isBlueNext ? [...this.state.blueGamesWon, 1] : [...this.state.blueGamesWon],
                redGamesWon: this.state.isBlueNext ? [...this.state.redGamesWon, 1] : [...this.state.redGamesWon]
            }, () => {           
                console.log(this.state.blueGamesWon);
                console.log(this.state.redGamesWon); 
                alert((!this.state.isBlueNext ? "Red" : "Blue") + " wins!  Would you like to play again?");
            });


            //this.props.handleWin();
        }
    }

    
    render() {
        const status = "Next player: " + (this.state.isBlueNext ? "Blue" : "Red");

        return(
            <div className="container">
                <div className="row">
                    <Scoreboard blueGamesWon={this.state.blueGamesWon} redGamesWon={this.state.redGamesWon}/>
                </div>
                <div className="row">
                    <div>
                    <div className="status">{status}</div>
                    <div className="board-row">
                        {this.renderSquare(41)}
                        {this.renderSquare(40)}
                        {this.renderSquare(39)}
                        {this.renderSquare(38)}
                        {this.renderSquare(37)}
                        {this.renderSquare(36)}
                        {this.renderSquare(35)}
                    </div>
                    <div className="board-row">
                        {this.renderSquare(34)}
                        {this.renderSquare(33)}
                        {this.renderSquare(32)}
                        {this.renderSquare(31)}
                        {this.renderSquare(30)}
                        {this.renderSquare(29)}
                        {this.renderSquare(28)}
                    </div>
                    <div className="board-row">
                        {this.renderSquare(27)}
                        {this.renderSquare(26)}
                        {this.renderSquare(25)}
                        {this.renderSquare(24)}
                        {this.renderSquare(23)}
                        {this.renderSquare(22)}
                        {this.renderSquare(21)}
                    </div>
                    <div className="board-row">
                        {this.renderSquare(20)}
                        {this.renderSquare(19)}
                        {this.renderSquare(18)}
                        {this.renderSquare(17)}
                        {this.renderSquare(16)}
                        {this.renderSquare(15)}
                        {this.renderSquare(14)}
                    </div>
                    <div className="board-row">
                        {this.renderSquare(13)}
                        {this.renderSquare(12)}
                        {this.renderSquare(11)}
                        {this.renderSquare(10)}
                        {this.renderSquare(9)}
                        {this.renderSquare(8)}
                        {this.renderSquare(7)}
                    </div>
                    <div className="board-row">
                        {this.renderSquare(6)}
                        {this.renderSquare(5)}
                        {this.renderSquare(4)}
                        {this.renderSquare(3)}
                        {this.renderSquare(2)}
                        {this.renderSquare(1)}
                        {this.renderSquare(0)}
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}



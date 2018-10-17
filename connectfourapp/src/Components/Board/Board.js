import React from 'react';
import ReactDOM from 'react-dom';
import './Board.css'
import { Square } from '../Square/Square.js';

export class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //tracks what color goes on this turn
            isBlueNext: true,

            //starting board of blank squares
            squares: Array(42).fill(null),

            //track which squares are clicked by color
            clickedSquaresBlue: [],
            clickedSquaresRed: [],

            //these are the indices for the squares array that are considered legal moves on a given turn
            legalSquares: [0, 1, 2, 3, 4, 5, 6],
        };
    }
    
    //prints a 7x6 grid of square components
    renderSquare(i) {
        return <Square 
        value={i}
        color={this.state.squares[i]}
        onClick={() => this.handleClick(i)}/>;
    } 

    //determines if a square can legally be clicked by validating against the legalsquares array in state
    isLegalSquare(i){
        return this.state.legalSquares.some(value => value == i);
    } 

    //updates legalsquares array once a player submits a legal move
    updateLegalSquare(i) {
        let legalSquares = this.state.legalSquares.filter(value => value !== i);
        this.setState({
            legalSquares: [...legalSquares, (i + 7)]
        });
    }

    handleClick(i) {
        if(this.isLegalSquare(i)) {
            this.updateLegalSquare(i);
        } else {
            alert('You must choose an empty block in the bottom row or one that is directly above an already played block.');
            return;
        }

        //updates the squares array
        const squares = [...this.state.squares];
        squares[i] = this.state.isBlueNext ? "blue" : "red";
        
        //update the board with the new values.  adds to appropriate clickedSquaresX array depending on isBlueNext value
        this.setState({
            squares: squares,
            clickedSquaresBlue: this.state.isBlueNext ? [...this.state.clickedSquaresBlue, i] : [...this.state.clickedSquaresBlue],
            clickedSquaresRed: this.state.isBlueNext ? [...this.state.clickedSquaresRed] : [...this.state.clickedSquaresRed, i], 
            isBlueNext: !this.state.isBlueNext,
            //determines how many connections are needed to win
            connectionsNeeded: 4,
        });

        console.log(this.state.isBlueNext);
        console.log(this.state.clickedSquaresBlue);
        console.log(this.state.clickedSquaresRed);

    }

    calculateWinner(squares) {
        const winningRowsColumnsDiagonals = [
            //rows on the board
            [41, 40, 39, 38, 37, 36, 35],
            [34, 33, 32, 31, 30, 29, 28],
            [27, 26, 25, 24, 23, 22, 21],
            [20, 19, 18, 17, 16, 15, 14],
            [13, 12, 11, 10, 9, 8, 7],
            [6, 5, 4, 3, 2, 1, 0],

            //columns on the board
            [41, 34, 27, 20, 13, 6],
            [40, 33, 26, 19, 12, 5],
            [39, 32, 25, 18, 11, 4],
            [38, 31, 24, 17, 10, 3],
            [37, 30, 23, 16, 9, 2],
            [36, 29, 22, 15, 8, 1],
            [35, 28, 21, 16, 7, 0],
            
            //diagnoals on the board
            [41, 33, 25, 17, 9, 1],
            [40, 32, 24, 16, 8, 0],
            [39, 31, 23, 15, 7],
            [38, 32, 26, 20],
            [38, 30, 22, 14],
            [37, 31, 25, 19, 13],
            [36, 30, 24, 18, 12, 6],
            [35, 29, 23, 17, 11, 5],
            [34, 26, 18, 10, 2],
            [28, 22, 16, 10, 4],
            [27, 19, 11, 3],
            [21, 15, 9, 3],
        ];

    winningRowsColumnsDiagonals.forEach(array => {
        let currentPlayerArray = this.state.isBlueNext ? [...this.state.clickedSquaresBlue] : [...this.state.clickedSquaresRed];
        let intersection = array.filter(v => currentPlayerArray.includes(v));
        if(intersection.length > this.state.connectionsNeeded) {
            return true;
            };
        });
    }
    
    render() {
        const status = "Next player: " + (this.state.isBlueNext ? "Blue" : "Red");

        return(
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
        );
        }
    };

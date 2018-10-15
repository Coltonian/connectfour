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
            clickedSquaresBlue: this.state.isBLueNext ? [...this.state.clickedSquaresBlue, i] : [...this.state.clickedSquaresBlue],
            clickedSquaresRed: this.state.isBLueNext ? [...this.state.clickedSquaresRed] : [...this.state.clickedSquaresRed, i], 
            isBlueNext: !this.state.isBlueNext
        });

        console.log(clickedSquaresBlue);
        console.log(clickedSquaresRed);

    }

    calculateWinner(squares) {
        
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
}


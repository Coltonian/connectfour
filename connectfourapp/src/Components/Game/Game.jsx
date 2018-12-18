import React from 'react';
import {Board} from '../Board/Board.jsx';
import ReactDOM from 'react-dom';
import { Scoreboard } from '../Scoreboard/Scoreboard.jsx';

export class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            connectionsToWin: 4,
        }
    }

    handleWin = () => {
        return console.log('Event Handler Called');
    }

    calculateWinner(clickedSquaresBlue, clickedSquaresRed, isBlueNext) {
        const winningRowsColumnsDiagonals = [
            //rows on the board (difference of 1 between squares)
            [41, 40, 39, 38, 37, 36, 35],
            [34, 33, 32, 31, 30, 29, 28],
            [27, 26, 25, 24, 23, 22, 21],
            [20, 19, 18, 17, 16, 15, 14],
            [13, 12, 11, 10, 9, 8, 7],
            [6, 5, 4, 3, 2, 1, 0],

            //columns on the board (differences of 7)
            [41, 34, 27, 20, 13, 6],
            [40, 33, 26, 19, 12, 5],
            [39, 32, 25, 18, 11, 4],
            [38, 31, 24, 17, 10, 3],
            [37, 30, 23, 16, 9, 2],
            [36, 29, 22, 15, 8, 1],
            [35, 28, 21, 14, 7, 0],
            
            //diagonals on the board (left to right, difference of 8)
            [41, 33, 25, 17, 9, 1],
            [40, 32, 24, 16, 8, 0],
            [39, 31, 23, 15, 7],
            [38, 30, 22, 14],
            [34, 26, 18, 10, 2],
            [27, 19, 11, 3],
            
            //diagonals on the board (right to left, difference of 6)
            [38, 32, 26, 20],
            [37, 31, 25, 19, 13],
            [36, 30, 24, 18, 12, 6],
            [35, 29, 23, 17, 11, 5],
            [28, 22, 16, 10, 4],
            [21, 15, 9, 3],
        ];

        const isContiguous = (array) => {
            array.sort((a, b) => a - b);
            let arrayOfDifferences = [];
            for(let i = 0 ; i < array.length - 1 ; i++) {
                arrayOfDifferences.push(array[i + 1] - array[i]);
            }
            console.log(arrayOfDifferences);
            if(arrayOfDifferences.filter(v => v == 1).length >= 3 ||
               arrayOfDifferences.filter(v => v == 6).length >= 3 ||
               arrayOfDifferences.filter(v => v == 7).length >= 3 ||
               arrayOfDifferences.filter(v => v == 8).length >= 3) {
                   return true
               } else {
                   return false
               }
        }

        const isWinningConnection = (array) => {
            let currentPlayerArray = !isBlueNext ? clickedSquaresBlue : clickedSquaresRed;
            let intersection = array.filter(v => currentPlayerArray.includes(v));
            if(intersection.length >= 4) {
                return isContiguous(intersection);
            }
        }

        return winningRowsColumnsDiagonals.some(v => isWinningConnection(v));
    }

    render() {
        return (

            <Board
                calculateWinner={this.calculateWinner}
                onWin={() => this.handleWin()}
            >
            </Board>

        )
    }
}
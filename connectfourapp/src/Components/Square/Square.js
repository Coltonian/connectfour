import React from 'react';
import ReactDOM from 'react-dom';

//creates a single square in the connect four board
export class Square extends React.Component {
    render() {
        return (
            <button 
                className="square"
                onClick={props.onClick}>
                {props.value}
                </button>
        );
        }
}
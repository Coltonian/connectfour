import React from 'react';
import ReactDOM from 'react-dom';
import './Square.css';


//creates a single square in the connect four board
export class Square extends React.Component {

    render() {
        return (
            <button 
            className={"btn m-1 square " + this.props.color} 
            onClick={() => this.props.onClick()}> 
            {this.props.value}
            </button>
        );
    }
}
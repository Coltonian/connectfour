import React from 'react';
import ReactDOM from 'react-dom';
import './Square.css';


//creates a single square in the connect four board
export class Square extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: null,
        }
    }

    render() {
        return (
            <button className={"square " + this.state.color} onClick={() => this.setState({color:"blue"})}> 
            {this.props.value} </button>
        );
    }
}
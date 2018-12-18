import React from 'react';
import ReactDOM from 'react-dom';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

export class Scoreboard extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return(
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Blue</th>
                            <th scope="col">Red</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{this.props.blueGamesWon.length}</td>
                            <td>{this.props.redGamesWon.length}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}
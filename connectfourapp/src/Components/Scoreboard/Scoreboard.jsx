import React from 'react';
import ReactDOM from 'react-dom';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

export class Scoreboard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            blueGamesWon: this.props.blueGamesWon.length,
            redGamesWon: this.props.redGamesWon.length
        }

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
                            <td>{this.state.blueGamesWon}</td>
                            <td>{this.state.redGamesWon}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}
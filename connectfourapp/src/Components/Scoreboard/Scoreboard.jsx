import React from 'React';
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
                            <th scope="col">Game</th>
                            <th scope="col">Blue</th>
                            <th scope="col">Red</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}
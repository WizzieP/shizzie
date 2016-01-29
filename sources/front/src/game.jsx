import React from 'react';
import { Link } from 'react-router';

export default class Game extends React.Component {

    render() {
        return <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3">
                        <Menu />
                    </div>
                    <div className="col-md-9">
                        {this.props.children}
                    </div>
                </div>
            </div>
    }
}

const Menu = () => (
    <ul>
        <li><Link to="/character">Character</Link></li>
        <li><Link to="/town">Town</Link></li>
    </ul>
);


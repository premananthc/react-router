import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Profile from './profile';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        console.log('url is: ', props.match);
    }

    render() {
        return (
            <div>
                <p>This is dashboard component</p>
                <ul>
                    <li>
                        <Link to={`${this.props.match.url}/profile`}>Profile</Link>
                    </li>
                </ul>
                <Route path={`${this.props.match.url}/profile`} component={Profile} />
            </div>
        );
    }
}

Dashboard.propTypes = {};

export default Dashboard;

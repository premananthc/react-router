import React from 'react';
import PropTypes from 'prop-types';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <p>Login Component</p>
            </div>
        );
    }
}

Login.propTypes = {};

export default Login;

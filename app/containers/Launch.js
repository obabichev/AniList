'use strict';

import React, {Component, Navigator, PropTypes} from 'react';

import {connect} from 'react-redux';
import {login} from '../actions/auth'

import {Container, Content, Spinner} from 'native-base';

class Launch extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.login(this.props.accessToken);
    }

    render() {
        return (
            <Container>
                <Content>
                    {this.props.downloading ? (<Spinner color='blue'/>) : null}
                </Content>
            </Container>);
    }
}

const mapStateToProps = state => ({
    accessToken: state.auth.tokens.access_token,
    downloading: state.router.downloading,
});
const mapDispatchToProps = dispatch => {
    return {
        login: accessToken => dispatch(login(accessToken))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Launch);
'use strict';

import React, {Component, PropTypes} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';

class Profile extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        console.log("Profile: render: user: " + JSON.stringify(this.props.user));
        return (
            <View style={styles.container}>
                <Text>Profile!</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

const mapStateToProps = state => ({
    user: state.user,
});

export default connect(mapStateToProps)(Profile);
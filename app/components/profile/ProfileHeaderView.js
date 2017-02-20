'use strict';

import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

class ProfileHeaderView extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.avatar}
                       source={{uri: this.props.avatarImageUrl}}/>
                <Text style={styles.title}>{this.props.username}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#02a9ff',
        height: 150,
        // justifyContent: 'bot',
    },
    avatar: {
        position: 'absolute',
        top: 50,
        left: 20,
        width: 100,
        height: 100
    },
    title: {
        backgroundColor: 'transparent',
        textAlign: 'center',
        color: 'white',
        fontSize: 18,
    }
});

ProfileHeaderView.propTypes = {
    avatarImageUrl: React.PropTypes.string,
    username: React.PropTypes.string
};

export default ProfileHeaderView;
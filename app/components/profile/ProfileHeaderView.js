'use strict';

import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

class ProfileHeaderView extends Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.nameContainer}>
                    <Text style={styles.title}>{this.props.username}</Text>
                </View>
                <Image style={styles.avatar}
                       source={{uri: this.props.avatarImageUrl}}/>
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
    nameContainer: {
        backgroundColor: '#0c597b',
        height: 36,
        // flex:1,
        // flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'center'
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
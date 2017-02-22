'use strict';

import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

import color from '../../core/settings/color';
import {connect} from 'react-redux';

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
        backgroundColor: color.PRIMARY_COLOR,
        height: 150,
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    nameContainer: {
        backgroundColor: color.PRIMARY_COLOR_DARK,
        height: 36,
        flex: 1,
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

const mapStateToProps = state => ({
    avatarImageUrl: state.user.user.image_url_lge,
    username: state.user.user.display_name
});

export default connect(mapStateToProps)(ProfileHeaderView);
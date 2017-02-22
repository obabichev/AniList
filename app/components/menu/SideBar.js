'ues strict';

import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {connect} from 'react-redux';

import color from '../../core/settings/color';
import ProfileHeaderView from '../profile/ProfileHeaderView';

class SideBar extends Component {

    render() {
        return (
            <View style={styles.container}>
                <ProfileHeaderView style={styles.header}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.PRIMARY_COLOR_DARK
    }
});


export default connect()(SideBar);

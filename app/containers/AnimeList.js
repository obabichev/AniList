'use strict';

import React, {Component, PropTypes} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';

import {showAnimeList} from '../actions/anime';

class AnimeList extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.showAnimeList(this.props.user);
    }

    animeList = (animeList) => animeList.map(anime => <Text key={anime.series_title}>{anime.series_title}</Text>);

    header = myinfo => {
        if (myinfo) return <View>
            <Text>Watching: {myinfo.user_watching}</Text>
            <Text>Completed: {myinfo.user_completed}</Text>
            <Text>Onhold: {myinfo.user_onhold}</Text>
            <Text>Dropped: {myinfo.user_dropped}</Text>
            <Text>Plan to watch: {myinfo.user_plantowatch}</Text>
            <Text>Days spent watching: {myinfo.user_days_spent_watching}</Text>
        </View>;
    };

    render() {
        console.log("render anime list: " + JSON.stringify(this.props.animeList));
        return (
            <View style={styles.container}>
                {this.header(this.props.animeList.myinfo)}
                <View style={{height:30}}/>
                {this.animeList(this.props.animeList.anime)}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20,
        // alignItems: 'center',
        // justifyContent: 'center'
    }
});

const mapStateToProps = state => ({
    user: state.auth.user,
    animeList: state.anime.animeList
});

const mapDispatchToProps = dispatch => ({
    showAnimeList: (user) => dispatch(showAnimeList(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(AnimeList);
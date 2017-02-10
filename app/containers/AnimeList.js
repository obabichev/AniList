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
        this.props.showAnimeList();
    }

    animeList = (animeList) => animeList.map(anime => <Text key={anime.series_title}>{anime.series_title}</Text>);

    render() {
        return (
            <View style={styles.container}>
                <Text>Anime list!</Text>
                {this.animeList(this.props.animeList)}
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
    animeList: state.anime.animeList
});

const mapDispatchToProps = dispatch => ({
    showAnimeList: () => dispatch(showAnimeList())
});

export default connect(mapStateToProps, mapDispatchToProps)(AnimeList);
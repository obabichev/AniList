import React, {Component, PropTypes} from 'react';
import {View, Text, StyleSheet, ListView} from 'react-native';

import AnimeItemCard from './AnimeItemCard';

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.series_animedb_id !== r2.series_animedb_id});


export default class AnimeListView extends Component {

    constructor(props) {
        super(props);

        this.state = {
            ...this.state,
            dataSource: ds.cloneWithRows(props.anime)
        };
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.anime.length !== nextProps.anime.length) {
            this.setState({
                ...this.state,
                dataSource: ds.cloneWithRows(nextProps.anime)
            });
        }
    }

    animeItemToCard = animeItem => <AnimeItemCard item={animeItem}/>;

    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                enableEmptySections={true}
                renderRow={this.animeItemToCard}
            />
        );
    }
};

AnimeListView.propTypes = {
    anime: React.PropTypes.array
};
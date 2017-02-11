import React, {Component, PropTypes} from 'react';
import {View, Text, StyleSheet, ListView} from 'react-native';

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.series_animedb_id !== r2.series_animedb_id});


export default class AnimeListView extends Component {

    constructor(props) {
        super(props);

        console.log(`AnimeListView: constructor: anime: ${JSON.stringify(props.anime.map(i => i.series_animedb_id))}`);

        this.state = {
            ...this.state,
            dataSource: ds.cloneWithRows(props.anime)
        };
    }

    componentWillReceiveProps(nextProps) {
        // console.log("Next props: " + JSON.stringify(nextProps));
        console.log(`render anime list! ${JSON.stringify(this.props.anime.map(i => i.series_animedb_id))}`);
        if (this.props.anime.length !== nextProps.anime.length) {
            this.setState({
                ...this.state,
                dataSource: ds.cloneWithRows(nextProps.anime)
            });
        }
    }

    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                enableEmptySections={true}
                renderRow={(animeItem) => <Text>{animeItem.series_title}</Text>}/>

        );
    }
};

AnimeListView.propTypes = {
    anime: React.PropTypes.array
};
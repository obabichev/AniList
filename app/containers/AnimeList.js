'use strict';

import React, {Component, PropTypes} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {
    Container,
    Header,
    Title,
    Content,
    Button,
    Left,
    Right,
    Body,
    Icon,
    List,
    ListItem,
    Thumbnail
} from 'native-base';

import {openNavBar} from '../actions/router';
import {uploadAnimeListAction} from '../actions/anime';

class AnimeList extends Component {

    componentDidMount() {
        if (this.props.user.id) {
            if (this.props.animeLists.length == 0) {
                this.props.fetchAnimeList(this.props.user.id);
            }
        }
    }

    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent
                                onPress={this.props.openNavBar}>
                            <Icon name='menu'/>
                        </Button>
                    </Left>
                    <Body>
                    <Title>Anime list</Title>
                    </Body>
                    <Right />
                </Header>

                <Content>
                    <List dataArray={this.props.animeLists.completed} renderRow={this.renderAnimeRow}/>
                </Content>
            </Container>
        );
    }

    renderAnimeRow = animeItem => <ListItem thumbnail>
        <Left>
            <Thumbnail square size={80} source={{uri: animeItem.anime.image_url_med}}/>
        </Left>
        <Body>
        <Text>{animeItem.anime.title_english}</Text>
        <Text note>{animeItem.anime.title_romaji}</Text>
        </Body>
        <Right>
            <Button transparent>
                <Text>View</Text>
            </Button>
        </Right>
    </ListItem>;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20,
    }
});

const mapStateToProps = state => ({
    user: state.user.user,
    animeLists: state.anime.animeLists
});

const mapDispatchToProps = dispatch => ({
    openNavBar: () => dispatch(openNavBar()),
    fetchAnimeList: userId => dispatch(uploadAnimeListAction(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(AnimeList);
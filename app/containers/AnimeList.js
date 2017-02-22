'use strict';

import React, {Component, PropTypes} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon} from 'native-base';

import {openNavBar} from '../actions/router';

class AnimeList extends Component {

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
                    <View>
                        <Text>ANIME LIST</Text>
                    </View>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20,
    }
});

const mapStateToProps = state => ({
    // user: state.auth.user,
    // animeList: state.anime.animeList
});

const mapDispatchToProps = dispatch => ({
    openNavBar: () => dispatch(openNavBar())
});

export default connect(mapStateToProps, mapDispatchToProps)(AnimeList);
'use strict';

import React, {Component, PropTypes} from 'react';
import {View, Text, Image, ScrollView, RefreshControl, StyleSheet} from 'react-native';
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
} from 'native-base';

import {openAnimeListScreen} from '../actions/router';
import {fetchUserData} from '../actions/user';

import ProfileHeaderView from '../components/profile/ProfileHeaderView';

class Profile extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if (!this.props.user.id) {
            this.props.fetchUserData(this.props.token);
        }
    }

    _refresh = () => {
        this.props.fetchUserData();
    };

    renderProfile = () => {
        if (this.props.user.id) {
            return <View>
                <ProfileHeaderView
                    style={styles.header}
                    avatarImageUrl={this.props.user.image_url_lge}
                    username={this.props.user.display_name}
                />
                <Text>ID:{this.props.user.id}</Text>
            </View>
        }
    };

    refreshControl = () => <RefreshControl
        refreshing={this.props.downloading}
        onRefresh={this._refresh}
    />;

    renderContent = () => (
        <Content refreshControl={this.refreshControl()}>
            {this.renderProfile()}
        </Content>
    );

    renderHeader = () => (
        <Header>
            <Left>
                <Button transparent>
                    <Icon name='menu'/>
                </Button>
            </Left>
            <Body>
            <Title>Profile</Title>
            </Body>
            <Right />
        </Header>
    );

    render() {
        return (
            <Container>
                {this.renderHeader()}
                {this.renderContent()}
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: 300,
        height: 300,
    },
    header: {
        width: 100,
        height: 400,
    }
});

const mapStateToProps = state => ({
    user: state.user.user,
    downloading: state.router.downloading,
});

const mapDispatchToProps = (dispatch) => {
    return {
        openAnimeListScreen: () => dispatch(openAnimeListScreen()),
        fetchUserData: token => dispatch(fetchUserData())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
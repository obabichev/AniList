'use strict';

import React, {Component, PropTypes} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {
    Container,
    Header,
    Title,
    Content,
    Footer,
    FooterTab,
    Button,
    Left,
    Right,
    Body,
    Icon,
    Spinner
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

    renderProfile = () => {
        if (this.props.user.id) {
            return this.showProfile();
        }
    };

    showProfile = () => (
        <Content>
            <ProfileHeaderView
                style={styles.header}
                avatarImageUrl={this.props.user.image_url_lge}
                username={this.props.user.display_name}
            />
            <Text>ID:{this.props.user.id}</Text>
        </Content>
    );

    showDownloadingSpinner = () => this.props.downloading ? (<Spinner color='blue'/>) : null;

    render() {
        console.log(`Pfofile: downloading: ${this.props.downloading}`);
        return (
            <Container>
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
                {this.showDownloadingSpinner()}
                {this.renderProfile()}
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: 300,
        height: 300,
        // flex: 1,
        // weight: 1,
        // alignItems: 'center',
        // justifyContent: 'center'
    },
    header: {
        width: 100,
        height: 400,
    }
});

const mapStateToProps = state => ({
    token: state.auth.tokens.access_token,
    user: state.user.user,
    downloading: state.router.downloading,
});

const mapDispatchToProps = (dispatch) => {
    return {
        openAnimeListScreen: () => dispatch(openAnimeListScreen()),
        fetchUserData: token => dispatch(fetchUserData(token))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
'use strict';

import React, {Component, PropTypes} from 'react';
import {View, Text, Image} from 'react-native';
import {Card, CardItem} from 'native-base';

export default class AnimeItemCard extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        console.log(`uri: ${this.props.item.series_image}`);


        return (
            <Card>
                <CardItem>
                    <Image
                        style={{width: 100, height: 100}}
                        source={{uri: this.props.item.series_image}}/>
                    <Text>{this.props.item.series_title}</Text>
                </CardItem>
            </Card>
        );
    }
};

AnimeItemCard.propTypes = {
    item: React.PropTypes.object
};
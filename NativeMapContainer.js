'use strict';
import React, { Component } from 'react';
import {
    Text,
    View,
    Button,
    StyleSheet,
} from 'react-native';
import MapView from  './MapView';
export default class NativeMapContainer extends Component {

    constructor(props){
        super(props);
        this.state = {
        }
    }

    componentDidMount() {

    }

    render() {
        return(
            <View style={styles.container}>
                <Text> native map </Text>
                <MapView style={styles.map}></MapView>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        padding: 20,
        marginTop: 65,
        alignItems: 'center'
    },
    map: {
        height: 400,
        width: 350
    }

});

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
        let region = {
            latitude: 37.48,
            longitude: -122.16,
            latitudeDelta: 0.1,
            longitudeDelta: 0.1,
        };

        return(
            <View style={styles.container}>
                <Text> native map </Text>
                <MapView style={styles.map}
                         zoomEnabled={false}
                         region={region}
                         onRegionChange={this._onRegionChange}
                />
            </View>
        );
    }

    _onRegionChange = (event) => {
        console.log("Region changed");
        console.log(event);
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

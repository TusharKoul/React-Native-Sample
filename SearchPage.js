'use strict';

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    Button,
    ActivityIndicator,
    Image,
    NativeModules
} from 'react-native';

import SearchResults from './SearchResults';
import AsyncStarCounter from './AsyncStarCounter';


export default class SearchPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchString: 'London',
            isLoading: false,
            message: ''
        };
    }

    render() {
        let {searchString,isLoading} = this.state;
        const spinner = isLoading ? <ActivityIndicator size="large"/> : null;

        return(
        <View style={styles.container}>

            <Text style={styles.description}> Search for houses to buy! </Text>
            <Text style={styles.description}> Search by place-name or postcode. </Text>

            <View style={styles.flowRight}>
                <TextInput  style={styles.searchInput}
                            value={searchString}
                            onChange={this._onSearchTextChanged}
                            placeholder='Search via name or postcode'/>
                <Button style={styles.goButton}
                        title='Go'
                        onPress={this._onGoPressed}
                />
            </View>
            <Image source={require('./Resources/house.png')} style={styles.image}/>

            {spinner}

            <Text style={styles.description}>{this.state.message}</Text>

            <Button style={styles.goButton} title='Call Native Module Method' onPress={this._onNativeMethodPressed} />
            <Button style={styles.goButton} title='Async Star Counter' onPress={this._onAsyncButtonPressed} />

        </View>
        );
    };

    // underscore indicates that the author intended this method to be private
    _onSearchTextChanged = (event) => {
        console.log('_onSearchTextChanged');
        this.setState({ searchString: event.nativeEvent.text });
        console.log('Current: '+this.state.searchString+', Next: '+event.nativeEvent.text);
    };

    _onGoPressed = (event) => {
        const query = urlForQueryAndPage('place_name', this.state.searchString, 1);
        console.log(query);
        this._executeQuery(query);
    };

    _onAsyncButtonPressed = (event) => {
        this.props.navigator.push({
            title: 'Async Star Counter',
            component: AsyncStarCounter
            // passProps: {listings: response.listings}
        });
    };

    _onNativeMethodPressed = (event) => {
        let CalendarManager = NativeModules.CalendarManager;
        let date = new Date();
        CalendarManager.addEventWithLocation('Birthday Party', '4 Privet Drive, Surrey');
        CalendarManager.addEvent('Birthday Party', {
           location: '4 Privet Drive, Surrey',
           time: date,
           description: 'best time ever'
        });
    };

    _executeQuery = (query) => {
        console.log(query);
        this.setState({ isLoading: true });

        fetch(query)
            .then(response => response.json())
            .then(json => this._handleResponse(json.response))
            .catch(error =>
                this.setState({
                    isLoading: false,
                    message: 'Something bad happened ' + error
                }));
    };

    _handleResponse= (response) => {
        this.setState({ isLoading: false , message: '' });
        if (response.application_response_code.substr(0, 1) === '1') {
            this.props.navigator.push({
                title: 'Results',
                component: SearchResults,
                passProps: {listings: response.listings}
            });
        }
        else {
            this.setState({ message: 'Location not recognized; please try again.'});
        }
    };
}

function urlForQueryAndPage(key, value, pageNumber) {
    const data = {
        country: 'uk',
        pretty: '1',
        encoding: 'json',
        listing_type: 'buy',
        action: 'search_listings',
        page: pageNumber,
    };
    data[key] = value;

    const querystring = Object.keys(data)
        .map(key => key + '=' + encodeURIComponent(data[key]))
        .join('&');

    return 'https://api.nestoria.co.uk/api?' + querystring;
}


const styles = StyleSheet.create({
    description: {
        marginBottom: 20,
        fontSize: 18,
        textAlign: 'center',
        color: '#656565'
    },
    container: {
        padding: 20,
        marginTop: 65,
        alignItems: 'center'
    },
    flowRight: {
        flexDirection:'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        alignSelf: 'stretch'
    },
    searchInput: {
        height: 36,
        padding: 4,
        marginRight: 5,
        flexGrow: 1,
        fontSize: 18,
        borderWidth: 1,
        borderColor: '#48BBEC',
        borderRadius: 8,
        color: '#48BBEC',
    },
    goButton: {
        color:'#48BBEC',
    },
    image: {
        width: 217,
        height: 138,
    },

});

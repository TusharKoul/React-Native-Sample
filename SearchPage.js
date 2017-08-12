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
} from 'react-native';


export default class SearchPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchString: 'London',
            isLoading: false
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
        </View>
        );
    }

    // underscore indicates that the author intended this method to be private
    _onSearchTextChanged = (event) => {
        console.log('_onSearchTextChanged');
        this.setState({ searchString: event.nativeEvent.text });
        console.log('Current: '+this.state.searchString+', Next: '+event.nativeEvent.text);
    };

    _onGoPressed = (event) => {
        let {isLoading} = this.state;
        console.log('isLoading is '+ isLoading);
        this.setState({
            isLoading: !isLoading
        })

    }

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

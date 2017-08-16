'use strict';
import React, { Component } from 'react';
import {
    Text,
    View,
    Button,
    StyleSheet
} from 'react-native';
import { NativeModules } from 'react-native';

export default class AsyncStarCounter extends Component {

    constructor(props){
        super(props);
        this.state = {
            stars: '_'
        }
    }

    componentDidMount() {

        /*
        From https://medium.com/@dalejefferson/the-answer-of-why-do-you-need-to-call-done-2ad6cc2c4503

        The answer of why you need to call .done() also applies to promises.
        Without .done(), the call to setState() and the subsequent render(), will be within the context of the promise,
        and as such errors will be hidden, i.e. no red box errors.
        First time this happened I wasted 30 min debugging. Note: .done() is not part of the official ES6 promise spec.

         */
        this.fetchData().done();
    }

    async fetchData() {
        const url = 'https://api.github.com/repos/facebook/react-native';

        // fetch returns a promise
        // await makes sure it will return the value to 'response' when it is resolved
        const response = await fetch(url);
        const json = await response.json();
        const stars = json.stargazers_count;
        this.setState({
            stars:stars
        });
    }

    render() {
        return(
        <View style={styles.container}>
            <Text> React Native repo has {this.state.stars} stars </Text>
            <Button style={styles.goButton} title='Call Native Async Method' onPress={this._onNativeMethodPressed} />
        </View>
        );
    }

    _onNativeMethodPressed = (event) => {
        console.log('event button pressed');

        // here UI was updated even without done()
        this.updateEvents();
    };

    updateEvents = async() => {
        try {
            let CalendarManager = NativeModules.CalendarManager;
            let events = await CalendarManager.findCalendarEvents();
            console.log(events);
            this.setState({ events });
        } catch (e) {
            console.error(e);
        }
    };
}


const styles = StyleSheet.create({
    container: {
        padding: 20,
        marginTop: 65,
        alignItems: 'center'
    },
});

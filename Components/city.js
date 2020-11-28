import React from 'react';
import { ListItem } from 'react-native-elements';
import { StyleSheet } from 'react-native';

export default class City extends React.Component {
    constructor(props){
        super(props)

        this.onPressHandler = this.onPressHandler.bind(this)
    }

    onPressHandler(){
        const api = require('../weatherapi/api_constants');

        fetch(api.url + api.methods.forecast + '?key=' + api.key + '&q=' + this.props.city + '&days=1')
        .then((response) => response.json())
        .then((responseJson) => {
            this.props.navigation.navigate('CurrentWeather', {
                location: responseJson.location,
                current: responseJson.current,
                forecast: responseJson.forecast,
            })
        })
        .catch( error => {
            console.log(error)
        })

    }

    render(){
        return (
            <ListItem 
                bottomDivider
                onPress={ this.onPressHandler }
            >
                <ListItem.Title>
                    {this.props.city}
                </ListItem.Title>
            </ListItem>
        );
    }
}

const styles = StyleSheet.create({
    item: {
        borderWidth: 1,
    }
});
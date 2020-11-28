import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import SearchBarCity from '../Components/searchbar';
import MapView from 'react-native-maps';


export default function MainScreen ({ navigation }){
    
    const api = require('../weatherapi/api_constants');

    const getCurrentWeather = (lat, long) => {
        fetch(api.url + api.methods.forecast + '?key=' + api.key + '&q=' + lat + ',' + long + '&days=1')
        .then((response) => response.json())
        .then((responseJson) => {
            navigation.navigate('CurrentWeather', {
                location: responseJson.location,
                current: responseJson.current,
                forecast: responseJson.forecast,
            })
        })
        .catch( error => {
            console.log(error)
        })
    }

    const mapPress= e => {
        var lat = e.nativeEvent.coordinate.latitude;
        var lng =  e.nativeEvent.coordinate.longitude;
        getCurrentWeather(lat, lng);
    };


    return (
        <View style={styles.container}>
            <View style={styles.textCont}>
                <Text style={styles.text}>Seleccione en el mapa la ubicacion que desee.</Text>
            </View>
            <View style={styles.mapCont}>
                <MapView
                    style={styles.mapStyle} 
                    followUserLocation={true}
                    onPress={ e => mapPress(e) }
                />
            </View>
            <View style={styles.barCont}>
                <SearchBarCity 
                    style={styles.searchBar}
                    navigation={navigation}
                />
            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'column',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: 'lightgrey'
    },
    searchBar: {
        flexDirection:'column',
    },
    barCont: {
        flex: 1,
        paddingTop: 25,
    },
    mapStyle: {
        width: Dimensions.get('window').width/1.5,
        height: Dimensions.get('window').height/2,
    },
    mapCont: {        
        flex: 4,
        backgroundColor: 'grey',
        padding: 10,
    },
    text: {
        fontSize: 15,
        marginBottom: 20
    },
    textCont: {
        flex: 1,
        alignItems: "center",
        marginTop: 5,
        paddingTop: 15,
    }
});

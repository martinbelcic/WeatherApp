import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import Forecast from '../Components/forecast';

export default function CurrentWeatherScreen({ route, navigation }){

    const {location, current, forecast} = route.params;

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.title}>{ location.name }</Text>
                    <Text style={styles.tempTitle}>{ current.temp_c }</Text>
                    <Text>{ location.region }</Text>
                    <Text>{ location.country }</Text>
                </View>
                <View style={styles.smallcontainer}>
                    <Forecast forecast={ forecast } />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 3,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        height: 150,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    smallcontainer: {
        flex: 3,
        flexDirection:'column',
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    tempTitle: {
        fontWeight: 'bold',
        fontSize: 20,    
    }
});
  
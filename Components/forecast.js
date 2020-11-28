import React from 'react';
import ForecastHour from './forecast_hour';
import { StyleSheet, View } from 'react-native';

const Separator = () => (
    <View style={styles.separator} />
);

export default class Forecast extends React.Component {
    constructor(props){
        super(props)
    }
      
    render(){
        return (
            this.props.forecast.forecastday[0].hour.map((hour, i) =>{
                return (
                    <View key={i}>
                        <Separator/>
                        <ForecastHour {...hour}/>
                    </View>
                );
            })
        );
    }
}

const styles = StyleSheet.create({
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
});
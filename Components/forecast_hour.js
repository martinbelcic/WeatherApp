import React from 'react';
import { Text, Image, StyleSheet, View } from 'react-native';

export default class ForecastHour extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.hourContainer}>
                    <Text style={styles.t_hour}>{this.props.time.split(" ")[1]}</Text>
                </View>
                <View>
                    <Text style={styles.temp}>{this.props.temp_c}</Text>
                    <Text style={styles.text}>{this.props.condition.text}</Text>
                </View>
                <View>
                    <Image
                        source={{ uri: this.props.condition.icon }}
                        style={styles.tinyLogo}
                    />
                </View>    
            </View>
        );
    }
}

const styles = StyleSheet.create({
    tinyLogo: {
      width: 50,
      height: 50,
    },
    container: {
        flexDirection:'row'
    },
    hourContainer: {
        marginRight: 50,
        marginLeft: 25,
    },
    t_hour: {
        fontSize: 20,
    },
    temp: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    text: {
        fontSize: 15
    }
});

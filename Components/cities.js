import React from 'react';
import { View } from 'react-native';
import City from './city';

export default class CityList extends React.Component {
    constructor(props){
        super(props)
    }

    render (){
        return (
            <View>
                {
                this.props.cityList.map((city, i) => {
                    return (    
                        <City 
                            key={i} 
                            city={city} 
                            navigation={this.props.navigation}
                        />
                    )
                })
                }
            </View>
        );
    }
}
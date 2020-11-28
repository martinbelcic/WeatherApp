import React from 'react';
import { SearchBar } from 'react-native-elements';
import CityList from './cities';
import { StyleSheet, TextInput } from 'react-native';

var list = require('../Assets/city_list').city_list;

export default class SearchBarCity extends React.Component {
    state = {
        search: '',
        cities: null,
    };

    searchCity(value) {
        var result = list.filter(word => word.startsWith(value));
        this.setState({
            ...this.state,
            cities: result
        });
    }
  
    updateSearch = (search) => {
        this.searchCity(search);
        this.setState({ search });
    };

    get renderResults() {
        let results = null;
        if (this.state.cities && this.state.cities.length > 0 && this.state.search !== '') {
            results = <CityList 
                        cityList={this.state.cities} 
                        navigation={this.props.navigation}
                        style={styles.cityList}
                    />;
        }
    
        return results;
    }
    
    render() {
        const { search } = this.state;
  
        return (
            <>
                <TextInput
                    placeholder="Buscar Ciudad..."
                    onChangeText={this.updateSearch}
                    value={search}
                    style={styles.serachbar}
                />
                { this.renderResults }
            </>
        );
    }
}

const styles = StyleSheet.create({
    serachbar: {
        width: 300,
        borderWidth: 1,
        borderRadius: 2,
        paddingLeft: 10,
        backgroundColor: 'white',
    },
    sityList: {
        position: 'absolute',
    }
});
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Wheather</Text>
      <View style={styles.fixToText}>
        <Button 
          title="Empezar"
          onPress={() => navigation.navigate('Main')}
          color={'black'}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightgrey'
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

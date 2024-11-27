import * as React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';

import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import RandomPlace from '../screens/RandomPlace';

const Stack = createNativeStackNavigator();

function NavigationScreen() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={({navigation}) => ({
            headerTitle: 'Historical Places',
            headerRight: () => {
              const item = useSelector(state => state.items);
              const randomItem = item[Math.floor(Math.random() * item.length)];
              return (
                <TouchableOpacity
                  style={styles.randomButton}
                  onPress={() =>
                    navigation.navigate('Random', {HistoricalPlace: randomItem})
                  }>
                  <Text style={styles.randomButtonText}>Random Place</Text>
                </TouchableOpacity>
              );
            },
          })}
        />
        <Stack.Screen
          name="Details"
          component={DetailScreen}
          options={({route}) => ({
            headerTitle: `${route.params.HistoricalPlace.historic_name}`,
          })}
        />
        <Stack.Screen
          name="Random"
          component={RandomPlace}
          options={({route}) => ({
            headerTitle: `${route.params.HistoricalPlace.historic_name}`,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  randomButton: {
    borderRadius: 8,
    padding: 8,
    backgroundColor: '#add8e6',
  },
  randomButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: '#000000',
  },
});

export default NavigationScreen;

import React from 'react';
import {
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import { Provider } from 'react-redux';

import store from './redux/store';
import NavigationScreen from './navigation/NavigationScreen';

const App = () => {

  return (
    <Provider store={store}>
    <View style={styles.container}>
    <StatusBar barStyle="default" />
    <NavigationScreen/>
    </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  }
});

export default App;

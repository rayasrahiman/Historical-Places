import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import {toggleVisited} from '../redux/itemSlice';
import Card from '../components/Card';
import List from '../components/List';

const HomeScreen = ({navigation}) => {
  const dataItems = useSelector(state => state.items);
  const dispatch = useDispatch();

  const renderItem = ({item}) => (
    <View style={styles.listItem}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Details', {HistoricalPlace: item})}>
        <View style={{padding: 16}}>
          <Card
            HP={item}
            onToggle={() => dispatch(toggleVisited(item.id))}
            HPItem={item}
            page="Home"
          />
        </View>
      </TouchableOpacity>
    </View>
  );
  return (
    <View style={styles.container}>
      <List data={dataItems} render={renderItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listItem: {
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 16,
    backgroundColor: '#ffffff',
    elevation: 4,
    shadowColor: '#000000',
    shadowOpacity: 0.35,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 16,
  },
});

export default HomeScreen;

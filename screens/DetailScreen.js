import React from 'react';
import {View, StyleSheet} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { toggleVisited } from '../redux/itemSlice';
import Card from '../components/Card';

export default function DetailScreen({route}) {
  const {HistoricalPlace} = route.params;
  const item = useSelector(state => state.items.find(todo => todo.id === HistoricalPlace.id))
  const dispatch = useDispatch()
  return (
    <View style={styles.item}>
    <Card HP={HistoricalPlace} onToggle={() => dispatch(toggleVisited(HistoricalPlace.id))} HPItem={item} page="detail" />
      </View>
  );
}

const styles = StyleSheet.create({
  item: {
    margin: 16,
    padding: 16,
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

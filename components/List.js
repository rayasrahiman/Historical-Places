import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';

export default function List({data, render}) {
  return (
    <View style={styles.listContainer}>
      <FlatList
        data={data}
        renderItem={render}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f9f9f9',
  },
});

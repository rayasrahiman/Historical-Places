import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

export default function Card({HP, onToggle, HPItem, page}) {
  return (
    <View>
      <Image
        style={[styles.image, {height: page === 'detail' ? 350 : 200}]}
        source={{uri: HP.image_url}}
      />
      {page === 'detail' ? (
        <Text style={styles.description}>{HP.description}</Text>
      ) : (
        <Text style={styles.title}>{HP.historic_name}</Text>
      )}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={onToggle}
          style={[
            styles.button,
            {backgroundColor: HPItem.visited ? '#6A98B3' : '#add8e6'},
          ]}>
          <Text style={styles.buttonText}>
            {HPItem.visited ? 'Visited' : 'Not Visited'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    color: '#000000',
  },
  description: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 22,
    color: '#000000',
  },
  buttonContainer: {
    marginVertical: 10,
    alignItems: 'center',
  },
  button: {
    borderRadius: 8,
    width: '80%',
    alignItems: 'center',
    padding: 8,
  },
  buttonText: {
    color: '#000000',
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});

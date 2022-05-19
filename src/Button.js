import React from 'react';
import {Text, StyleSheet, Pressable, View} from 'react-native';

export default function Button(props) {
  const {onPress, title = 'Save'} = props;
  return (
    <Pressable style={styles.pressable}
      onPress={onPress}>
      <View style={[styles.button, props.style]}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </Pressable >
  );
}

const styles = StyleSheet.create({
  pressable: function({pressed}) {
    return {opacity: pressed ? 0.9 : 1.0};
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    elevation: 3,
    backgroundColor: '#333',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#EEE',
  },
});
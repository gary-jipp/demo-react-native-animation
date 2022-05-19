import React, {useState} from 'react';
import {Animated, StyleSheet, View, Text} from 'react-native';
import {SafeAreaView, StatusBar, Pressable} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Button from './Button';

const App = function() {
  const [value, setValue] = useState(0);
  const [transformStyle, setTransformStyle] = useState([]);

  const moveDown = function() {
    setTransformStyle({transform: [{translateY: value + 40}]});
    setValue(value + 40);
  };

  const moveUp = function() {
    setTransformStyle({transform: [{translateY: value - 40}]});
    setValue(value - 40);
  };

  const reset = function() {
    setTransformStyle({transform: []});
    setValue(0);
  };

  console.log("style:", transformStyle);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <View style={styles.main}>
        <Animated.View style={[styles.circle, transformStyle]}>
          <Pressable style={styles.pressable}
            onPress={moveDown} onLongPress={moveUp}>
            <View>
              <Ionicons name="ios-arrow-up" size={50} color='#EEE' />
            </View>
          </Pressable>
        </Animated.View>
      </View >
      <View style={styles.footer}>
        <Button title="Move Down" style={styles.button} onPress={moveDown} />
        <Button title="Reset" style={styles.button} onPress={reset} />
        <Button title="Move Up" style={styles.button} onPress={moveUp} />
      </View>
    </SafeAreaView >
  );
};

const styles = StyleSheet.create({
  pressable: function({pressed}) {
    return {opacity: pressed ? 0.7 : 1.0};
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gold',
    // borderColor: 'blue',
    // borderWidth: 4,
  },
  circle: {
    height: 100,
    width: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#555',
  },
  main: {
    alignItems: 'center',
    flexDirection: 'row',
    flexGrow: 1,
    // borderColor: 'red',
    // borderWidth: 2,
  },
  footer: {
    flexDirection: 'row',
    flexGrow: 0,
    // borderColor: 'red',
    // borderWidth: 2,
  },
  button: {
    marginVertical: 5,
    marginHorizontal: 5,
    paddingHorizontal: 15,
    width: 120
  },
});

export default App;

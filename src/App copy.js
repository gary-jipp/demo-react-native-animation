import React, {useRef, useState} from 'react';
import {Animated, StyleSheet, View, SafeAreaView, StatusBar, Pressable} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Button from './Button';

const App = function() {
  const [transform, setTransform] = useState([]);

  const animateValue = useRef(new Animated.Value(0)).current;

  const interpolate = animateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '-360deg']
  });

  const options = {toValue: 1, duration: 3000, useNativeDriver: false};

  // Start whatever animation styles you have created
  const rotateY = function() {
    setTransform([{rotateY: interpolate}]);
    Animated.timing(animateValue, options).start();
  };

  // Start whatever animation styles you have created
  const rotateX = function() {
    setTransform([{rotateX: interpolate}]);
    Animated.timing(animateValue, options).start();
  };

  // Start whatever animation styles you have created
  const rotateZ = function() {
    setTransform([{rotateZ: interpolate}]);
    Animated.timing(animateValue, options).start();
  };

  // const transform = [{rotateY: interpolate}];
  const transformStyle = {transform};

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />

      <View style={styles.main}>
        <Animated.View style={[styles.circle, transformStyle]}>
          <Ionicons name="ios-arrow-up" size={50} color='#EEE' />
        </Animated.View>
      </View>

      <View style={styles.footer}>
        <Button title="Rotate X" style={styles.button} onPress={rotateX} />
        <Button title="Rotate Z" style={styles.button} onPress={rotateZ} />
        <Button title="Rotate Y" style={styles.button} onPress={rotateY} />
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

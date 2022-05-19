import React, {useState} from 'react';
import {Animated, StyleSheet, View, Text} from 'react-native';
import {SafeAreaView, StatusBar, Pressable} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Button from './Button';

const App = function() {
  const [rotateValue, setRotateValue] = useState(0);
  const [translateValue, setTranslateValue] = useState(0);
  const [transform, setTransform] = useState([]);

  const moveDown = function() {
    addTransform({translateY: translateValue + 40});
    setTranslateValue(translateValue + 40);
  };

  const moveUp = function() {
    addTransform({translateY: translateValue - 40});
    setTranslateValue(translateValue - 40);
  };

  const rotateX = function() {
    addTransform({rotateX: `${rotateValue + 15}deg`});
    setRotateValue(rotateValue + 15);
  };

  const rotateY = function() {
    addTransform({rotateY: `${rotateValue - 15}deg`});
    setRotateValue(rotateValue - 15);
  };

  const rotateZ = function() {
    addTransform({rotateZ: `${rotateValue + 45}deg`});
    setRotateValue(rotateValue + 45);
  };

  const reset = function() {
    setTransform([]);
    setTranslateValue(0);
    setRotateValue(0);
  };

  const addTransform = function(action) {
    const array = [...transform, action];
    setTransform(array);
  };

  const transformStyle = {transform};
  console.log("style:", transformStyle);


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <View style={styles.main}>
        <Animated.View style={[styles.circle, transformStyle]}>
          <Pressable style={styles.pressable} onPress={rotateZ} >
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

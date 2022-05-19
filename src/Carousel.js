import React, {useRef, useState} from 'react';
import {Animated, Button, Dimensions, Image, PanResponder, View, StyleSheet, } from 'react-native';
const image = require('./image.jpg');

const MAX_WIDTH = Dimensions.get('screen').width;

const Carousel = () => {
  const animation = useRef(new Animated.Value(0));
  const [currentImage, setCurrentImage] = useState(0);
  const [distanceMoved, setDistanceMoved] = useState(0);

  const imageData = [image, image, image, image, image, image, image];

  const panResponder = useRef(
    PanResponder.create({
      // Ask to be the responder:
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,

      onPanResponderGrant: (evt, gestureState) => {
        // The gesture has started. Show visual feedback so the user knows
        // what is happening!
        // gestureState.d{x,y} will be set to zero now
      },
      onPanResponderMove: (evt, gestureState) => {
        // The most recent move distance is gestureState.move{X,Y}
        // The accumulated gesture distance since becoming responder is
        // gestureState.d{x,y}
        // console.log(41, Math.abs(gestureState.dx));

        // if(gestureState.dx > Dimensions.get('screen').width/2) {
        // console.log(44, gestureState.dx, Dimensions.get('screen').width)
        // }

        // if(gestureState.dx < -Dimensions.get('screen').width/2) {
        // console.log(48, gestureState.dx, Dimensions.get('screen').width)
        // }
        setDistanceMoved(Math.floor(gestureState.dx));

      },
      onPanResponderTerminationRequest: (evt, gestureState) => true,
      onPanResponderRelease: (evt, gestureState) => {
        // The user has released all touches while this view is the
        // responder. This typically means a gesture has succeeded
      },
      onPanResponderTerminate: (evt, gestureState) => {
        // Another component has become the responder, so this gesture
        // should be cancelled
      },
      onShouldBlockNativeResponder: (evt, gestureState) => {
        // Returns whether this component should block native components from becoming the JS
        // responder. Returns true by default. Is currently only supported on android.
        return true;
      },
    }),
  ).current;

  console.log("Pan:", distanceMoved);

  const moveLeft = () => {
    let newCurrentImage = currentImage + 1;
    if (newCurrentImage >= imageData.length) {
      return;
    }

    const toValue = -(Dimensions.get('screen').width * newCurrentImage);
    console.log("toValue=", toValue);

    Animated.spring(animation.current, {toValue, useNativeDriver: true, }).start();

    setCurrentImage(newCurrentImage);
  };


  const images = imageData.map((image, i) => (
    <Image key={i} source={image} style={styles.image} />
  ));

  const transformStyle = {transform: [{translateX: animation.current}]};

  return (
    <>
      <View {...panResponder.panHandlers}>
        <Animated.View
          style={[styles.container, transformStyle]}>

          {images}

        </Animated.View>

      </View>
      <Button title="Swipe" onPress={moveLeft} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  image: {
    resizeMode: 'cover',
    height: 250,
    width: MAX_WIDTH,
  },
});

export default Carousel;

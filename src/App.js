import React from 'react';
import {StyleSheet, View, SafeAreaView, StatusBar, Pressable} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const App = function() {

  const onPress = function() {
    console.log("Pressed");
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <View style={styles.main}>
        <View style={styles.circle}>
          <Pressable style={styles.pressable} onPress={onPress} >
            <View>
              <Ionicons name="ios-arrow-up" size={50} color='#EEE' />
            </View>
          </Pressable>
        </View>
      </View >
      <View style={styles.footer}>
      </View>
    </SafeAreaView >
  );
};


const styles = StyleSheet.create({
  pressable: function({pressed}) {
    return [{opacity: pressed ? 0.7 : 1.0}];
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gold',
  },
  circle: {
    height: 100,
    width: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#555',
    // borderWidth: 4,
    // borderColor: "red",
  },
  main: {
    alignItems: 'center',
    flexDirection: 'row',
    flexGrow: 1,
    // borderWidth: 4,
    // borderColor: "red",
  },
  footer: {
    flexDirection: 'row',
    flexGrow: 0,
  },
});


export default App;

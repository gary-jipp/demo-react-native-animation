import React from 'react';
import {StyleSheet, View, Text, SafeAreaView, StatusBar} from 'react-native';

const App = function() {

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <View>
        <Text style={styles.text}>Hello React Native</Text>
      </View>
    </SafeAreaView >
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: '600',
  },
});

export default App;

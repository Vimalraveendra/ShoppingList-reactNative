import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const App = () => {
  return (
    <View style={styles.viewText}>
      <Text style={styles.text}>Hellooo</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewText: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'red',
    fontSize: 25,
  },
});

export default App;

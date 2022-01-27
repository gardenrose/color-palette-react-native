import React from 'react';
import {View, SafeAreaView, StyleSheet} from 'react-native';
import ColorBox from './komponente/ColorBox';

const App = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <ColorBox color="green" colorHex="#52fc03" />
        <ColorBox color="blue" colorHex="#0f42d9" />
        <ColorBox color="violet" colorHex="#4c0fd9" />
        <ColorBox color="pink" colorHex="#d90f99" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingTop: 40,
  },
});

export default App;

import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { 
  StyleSheet, 
  Text, 
  View } 
from 'react-native';

import { Navbar } from './src/Navbar';
import { Counter } from './src/Counter';

export default function App() {
  return (
    <View style={styles.container}>
      <Navbar/>
      <Counter/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {}
});

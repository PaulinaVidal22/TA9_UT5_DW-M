import React from 'react';
import { View, Text, StyleSheet, Dimensions, Platform } from 'react-native';

export default function App() {
  const { width } = Dimensions.get('window');
  const isSmallDevice = width < 360;

  const styles = createStyles(isSmallDevice);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Adaptable App</Text>
      <Text style={styles.text}>
        {isSmallDevice ? "Small screen" : "Big screen"} en {Platform.OS === 'ios' ? 'iOS' : 'Android'}
      </Text>
    </View>
  );
}


const createStyles = (isSmallDevice) => StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Platform.select({
      ios: isSmallDevice ? '#ffebee' : '#c8e6c9',
      android: isSmallDevice ? '#ffe0b2' : '#bbdefb',
    }),
  },
  title: {
    fontSize: isSmallDevice ? 18 : 24,
    fontWeight: 'bold',
    color: Platform.OS === 'ios' ? '#333' : '#111',
  },
  text: {
    fontSize: isSmallDevice ? 14 : 18,
    color: Platform.OS === 'ios' ? '#666' : '#444',
  },
});


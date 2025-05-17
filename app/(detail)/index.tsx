import React, { JSX } from 'react';
import { StyleSheet, Text, View } from 'react-native';

function Detail(): JSX.Element {
  return (
    <View style={styles.container}>
      <Text>Detail</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',  
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Detail;
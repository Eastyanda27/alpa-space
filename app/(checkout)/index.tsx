import { colors } from '@/assets/styles/colors';
import React, { JSX } from 'react';
import { StyleSheet, View } from 'react-native';

function Checkout(): JSX.Element {
  return (
    <View style={styles.container}>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
});

export default Checkout;
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { JSX } from 'react';

import { SafeAreaView, StyleSheet } from 'react-native';
import 'react-native-reanimated';
import Booking from './(booking)';
import Checkout from './(checkout)';
import Detail from './(detail)';
import Home from './(home)';
import Success from './(success)';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <Stack.Navigator initialRouteName='(home)' screenOptions={{ headerShown: false }}>
        <Stack.Screen name='(home)' component={Home}/>
        <Stack.Screen name='(detail)' component={Detail}/>
        <Stack.Screen name='(booking)' component={Booking}/>
        <Stack.Screen name='(checkout)' component={Checkout}/>
        <Stack.Screen name='(success)' component={Success}/>
      </Stack.Navigator>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
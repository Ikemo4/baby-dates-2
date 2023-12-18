import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Calendar from './components/Calendar';

function CalendarScreen() {
  return (
    <View style={styles.container}>
      <Calendar month="January" numberOfDays={31} />
      {/* Add more components/views as needed */}
    </View>
  );
};

const Stack = createNativeStackNavigator();

function App() {
  <NavigationContainer>
    <Stack.Navigator initialRouteName='Calendar'>
      <Stack.Screen name='Calendar' component={CalendarScreen} />
    </Stack.Navigator>
  </NavigationContainer>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;

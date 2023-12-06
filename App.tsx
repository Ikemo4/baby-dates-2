import React from 'react';
import { View, StyleSheet } from 'react-native';
import Calendar from './components/Calendar';

const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <Calendar month="January" numberOfDays={31} />
      {/* Add more components/views as needed */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;

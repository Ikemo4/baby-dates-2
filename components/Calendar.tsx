// src/components/Calendar.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, StyleProp, ViewStyle } from 'react-native';

interface CalendarProps {
  month: string;
  numberOfDays: number;
}

function Calendar({ month, numberOfDays }: CalendarProps) {
  const [buttonWidth, setButtonWidth] = useState(0);

  useEffect(() => {
    // Calculate the maximum number of buttons per row (7)
    const maxButtonsPerRow = 7;

    const screenWidth = Dimensions.get('window').width;
    const calculatedButtonWidth = screenWidth / maxButtonsPerRow - 4; // Adjusted for margin and padding

    setButtonWidth(calculatedButtonWidth);
  }, []);

  const days = Array.from({ length: numberOfDays }, (_, index) => index + 1);

  // Create a stylesheet
  const buttonStyle: StyleProp<ViewStyle> = StyleSheet.create({
    dayButton: {
      width: buttonWidth,
      height: 40,
      margin: 2,
      backgroundColor: '#e0e0e0',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 4,
      paddingVertical: 8,
    },
  }).dayButton;

  return (
    <View style={styles.container}>
      <Text style={styles.monthText}>{month}</Text>
      <View style={{ ...styles.daysContainer, maxWidth: '100%' }}>
        {days.map((day) => (
          <TouchableOpacity key={day} onPress={() => console.log(`Day ${day} clicked`)} style={buttonStyle}>
            <Text>{day}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    margin: 16,
  },
  monthText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  daysContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
});

export default Calendar;

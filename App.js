import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const colors = [
  { name: 'GREEN', color: 'green' },
  { name: 'BLUE', color: 'blue' },
  { name: 'BROWN', color: 'brown' },
  { name: 'YELLOW', color: 'yellow' },
  { name: 'RED', color: 'red' },
  { name: 'BLACK', color: 'black' },
];

export default function App() {
  const [bgColor, setBgColor] = useState('green'); // Màu nền mặc định

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      {colors.map((item, index) => (
        <TouchableOpacity 
          key={index} 
          style={[styles.button, { backgroundColor: item.color }]}
          onPress={() => setBgColor(item.color)} // Cập nhật màu nền khi bấm nút
        >
          <Text style={styles.text}>{item.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: '80%',
    paddingVertical: 15,
    marginVertical: 5,
    alignItems: 'center',
    borderRadius: 5,
  },
  text: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
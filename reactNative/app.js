import React, { useState } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const App = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handlePress = (value) => {
    if (value === '=') {
      try {
        setResult(eval(input).toString());
      } catch (e) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else {
      setInput((prev) => prev + value);
    }
  };

  const Button = ({ value }) => (
    <TouchableOpacity
      style={styles.button}
      onPress={() => handlePress(value)}>
      <Text style={styles.buttonText}>{value}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>{input}</Text>
        <Text style={styles.resultText}>{result}</Text>
      </View>
      <View style={styles.buttonContainer}>
        {['1', '2', '3', '+'].map((val) => (
          <Button key={val} value={val} />
        ))}
        {['4', '5', '6', '-'].map((val) => (
          <Button key={val} value={val} />
        ))}
        {['7', '8', '9', '*'].map((val) => (
          <Button key={val} value={val} />
        ))}
        {['C', '0', '=', '/'].map((val) => (
          <Button key={val} value={val} />
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  resultContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    margin: 20,
  },
  resultText: {
    fontSize: 32,
    color: '#333',
  },
  buttonContainer: {
    flex: 2,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  button: {
    width: '22%',
    height: 80,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4caf50',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 24,
    color: '#fff',
  },
});

export default App;

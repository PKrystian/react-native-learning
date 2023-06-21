import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const App = () => {
  const [result, setResult] = useState('');
  
  const handleButtonPress = (buttonValue) => {
    if (buttonValue === '=') {
      calculateResult();
    } else if (buttonValue === 'C') {
      clearResult();
    } else {
      setResult((prevResult) => prevResult + buttonValue);
    }
  };

  const calculateResult = () => {
    try {
      const calculatedResult = eval(result);
      setResult(calculatedResult.toString());
    } catch (error) {
      setResult('Error');
    }
  };

  const clearResult = () => {
    setResult('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.result}>{result}</Text>
      <View style={styles.buttonRow}>
        <Button title="1" onPress={() => handleButtonPress('1')} />
        <Button title="2" onPress={() => handleButtonPress('2')} />
        <Button title="3" onPress={() => handleButtonPress('3')} />
        <Button title="+" onPress={() => handleButtonPress('+')} />
      </View>
      <View style={styles.buttonRow}>
        <Button title="4" onPress={() => handleButtonPress('4')} />
        <Button title="5" onPress={() => handleButtonPress('5')} />
        <Button title="6" onPress={() => handleButtonPress('6')} />
        <Button title="-" onPress={() => handleButtonPress('-')} />
      </View>
      <View style={styles.buttonRow}>
        <Button title="7" onPress={() => handleButtonPress('7')} />
        <Button title="8" onPress={() => handleButtonPress('8')} />
        <Button title="9" onPress={() => handleButtonPress('9')} />
        <Button title="*" onPress={() => handleButtonPress('*')} />
      </View>
      <View style={styles.buttonRow}>
        <Button title="C" onPress={() => handleButtonPress('C')} />
        <Button title="0" onPress={() => handleButtonPress('0')} />
        <Button title="=" onPress={() => handleButtonPress('=')} />
        <Button title="/" onPress={() => handleButtonPress('/')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  result: {
    fontSize: 48,
    marginBottom: 20,
  },
  buttonRow: {
    flexDirection: 'row',
    marginBottom: 10,
  },
});

export default App;
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';

export default function App() {
  const [text, setText] = useState('');
  const [data, setData] = useState([]);

  const buttonPressed = () => {
    setData([...data, { key: text }]);
    setText('');
  }

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} onChangeText={text => setText(text)} value={text} />
      <View style={{flexDirection: 'row', paddingVertical: 50, paddingBottom: 0 }}>
        <Button style={styles.button} onPress={buttonPressed} title="  ADD  " />
        <Button style={styles.button} onPress={() => setData([])} title="CLEAR" />
      </View>
      <Text style={styles.text}>Shopping list</Text>
      <FlatList style={styles.list}
        data={data}
        renderItem={({ item }) =>
          <Text>{item.key}</Text>
        }
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  input: {
    marginTop: 50,
    marginBottom: 5,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1 
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 6,
    backgroundColor: 'red',
  },
  text: {
    marginTop: 50,
    marginBottom: 10,
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'blue',
  },
});
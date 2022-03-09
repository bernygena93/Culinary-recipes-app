import {View, Text, TextInput} from 'react-native';
import React from 'react';
import {styles} from './styles';

const InputOption = ({label, placeholder, form, setForm, name}) => {
  const password = name === "password" ? true : false
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        secureTextEntry={password}
        onChangeText={text => setForm({...form, [name]: text})}
      />
    </View>
  );
};

export default InputOption;

import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './styles';

const Button = ({style, onPress, title, color}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{...styles.container, ...style}}>
        <Text style={{color: color, ...styles.font}}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;

import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './styles';

const AuthenticateRequireScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Esta sección requiere que estes logueado</Text>
    </View>
  );
};

export default AuthenticateRequireScreen;

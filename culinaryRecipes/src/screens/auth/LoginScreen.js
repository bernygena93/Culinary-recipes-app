import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import InputOption from '../../components/form/InputOption';
import Button from '../../components/button/Button';
import {useDispatch} from 'react-redux';
import {signin} from '../../store/actions/user.action';

const LoginScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = () => {
    dispatch(signin(form.email, form.password));
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.title}>Ingreso</Text>
        <InputOption
          label="Email"
          placeholder="email@email.com"
          setForm={setForm}
          form={form}
          name="email"
        />
        <InputOption
          label="Contraseña"
          placeholder="*******"
          setForm={setForm}
          form={form}
          name="password"
        />
        <Button
          title="Ingresar"
          style={styles.button}
          color="white"
          onPress={handleSubmit}
        />
      <View style={styles.linkContainer}>
        <Text>Si no tenes cuenta registrate</Text>
        <TouchableOpacity onPress={()=> navigation.navigate("register")}>
          <Text style={styles.link}>aqui</Text>
        </TouchableOpacity>
      </View>
      </View>
    </View>
  );
};

export default LoginScreen;

import {View, TouchableOpacity, Text, Alert} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import InputOption from '../../components/form/InputOption';
import Button from '../../components/button/Button';
import {useDispatch} from 'react-redux';
import {signup} from '../../store/actions/user.action';
import {COLORS} from '../../utils/constants/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Geolocation from '@react-native-community/geolocation';

const RegisterScreen = ({navigation}) => {
  const [address, setAddress] = useState('Ubicacion');
  const [pickedLocation, setPickedLocation] = useState();
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    name: '',
    email: '',
    address: '',
    password: '',
  });

  const handleSubmit = () => {
    dispatch(signup(form.name, form.address, form.email, form.password));
  };

  const handleGetLocation = () => {
    setAddress('Cargando ubicacion...');
    Geolocation.getCurrentPosition(
      async position => {
        console.warn(position);
        const {latitude, longitude} = position.coords;
        const location = {
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        };
        try {
          const response = await fetch(
            `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.latitude},${location.longitude}&key=AIzaSyDuWEO5ZTit0Zo498096LBA3Sy41FZkuDI`,
          );
          const resData = await response.json();
          const newAddress = resData.results[0].formatted_address;
          setPickedLocation(newAddress);
        } catch (err) {
          console.log(err.message);
          setPickedLocation(null);
        }
      },
      error => {
        console.warn(error);
        Alert.alert(
          'Could not fetch location',
          'Please enable location services and try again',
          [{text: 'Okay'}],
        );
      },
      {
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 10000,
        forceRequestLocation: true,
        showLocationDialog: true,
      },
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.title}>Registro</Text>
        <InputOption
          label="Nombre"
          placeholder="Walter"
          setForm={setForm}
          form={form}
          name="name"
        />
        <InputOption
          label="Email"
          placeholder="email@email.com"
          setForm={setForm}
          form={form}
          name="email"
        />
        <TouchableOpacity
          style={styles.inputAddress}
          onPress={handleGetLocation}>
          {pickedLocation ? (
            <>
              <Text style={styles.textAddress}>{pickedLocation}</Text>
              <Ionicons
                name="location-sharp"
                size={20}
                color={COLORS.DARK_VIOLET}
              />
            </>
          ) : (
            <>
              <Text style={styles.textAddress}>{address}</Text>
              <Ionicons
                name="location-sharp"
                size={20}
                color={COLORS.DARK_VIOLET}
              />
            </>
          )}
        </TouchableOpacity>
        <InputOption
          label="Contraseña"
          placeholder="*******"
          setForm={setForm}
          form={form}
          name="password"
        />
        <Button
          title="Registrarse"
          style={styles.button}
          color="white"
          onPress={handleSubmit}
        />
        <View style={styles.linkContainer}>
          <Text>Si estas registrado ingresa</Text>
          <TouchableOpacity onPress={() => navigation.navigate('login')}>
            <Text style={styles.link}>aqui</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default RegisterScreen;

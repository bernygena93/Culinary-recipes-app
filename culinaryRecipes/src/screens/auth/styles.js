import {StyleSheet} from 'react-native';
import {COLORS} from '../../utils/constants/Colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    width: '90%',
    paddingVertical: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 1,
    backgroundColor: 'white',
  },
  button: {
    marginTop: 15,
    width: 230,
    backgroundColor: COLORS.LIGHT_RED,
    paddingVertical: 15,
  },
  title: {
    color: COLORS.DARK_VIOLET,
    fontSize: 24,
    fontWeight: '500',
  },
  inputAddress: {
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 0.5,
    borderBottomColor: COLORS.LIGHT_GRAY,
    width: 300,
    fontSize: 20,
  },
  textAddress: {
    fontSize: 20,
    color: COLORS.DARK_VIOLET,
  },
  linkContainer:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 15
  },
  link:{
    paddingHorizontal: 5,
    fontSize: 18,
    color: COLORS.BLUE,
  }
  });

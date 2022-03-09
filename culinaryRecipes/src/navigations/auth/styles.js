import {StyleSheet} from 'react-native';
import {COLORS} from '../../utils/constants/Colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 250,
    height: 50,
    backgroundColor: COLORS.LIGHT_RED,
  },
  email: {
    paddingVertical: 10,
    fontSize: 21,
    fontWeight: '600',
    color: COLORS.BLUE,
  },
});

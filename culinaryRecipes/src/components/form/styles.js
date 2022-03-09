import {StyleSheet} from 'react-native';
import {COLORS} from '../../utils/constants/Colors';

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
  },
  label: {
    fontSize: 16,
    color: COLORS.DARK_VIOLET,
  },
  input: {
    borderBottomWidth: 0.5,
    borderBottomColor: COLORS.LIGHT_GRAY,
    width: 300,
    fontSize: 20,
  },
});

import {StyleSheet} from 'react-native';
import {COLORS} from '../../utils/constants/Colors';

export const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  recipesContainer: {
    backgroundColor: '#F9F9F9',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: '100%',
    paddingHorizontal: 5,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 320,
    backgroundColor: COLORS.LIGHT_GRAY,
  },
  form: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: 'white',
    elevation: 2,
    width: '100%',
    height: '100%',
    paddingHorizontal: 40,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
  },
  select: {
    backgroundColor: 'white',
    borderBottomWidth: 0.5,
    width: '100%',
    borderBottomColor: COLORS.LIGHT_GRAY,
  },
  button: {
    marginVertical: 30,
    width: 350,
    paddingVertical: 15,
    borderRadius: 5,
    backgroundColor: COLORS.DARK_RED,
  },
  deleteButton:{
    width: 380,
    paddingVertical: 10,
    borderRadius: 5,
    backgroundColor: COLORS.DARK_RED,
  },
  buttonAdd: {
    marginVertical: 5,
    paddingVertical: 5,
    borderRadius: 5,
    backgroundColor: COLORS.BLUE,
    width: 100,
  },
  fontSelect: {
    fontSize: 14,
    color: COLORS.DARK_VIOLET,
  },
  ingredientsContainer: {
    borderWidth: 0.5,
    borderColor: COLORS.LIGHT_GRAY,
    marginVertical: 20,
    padding: 20,
    width: '100%',
  },
  instructionContainer: {
    width: '100%',
    borderWidth: 0.5,
    borderColor: COLORS.LIGHT_GRAY,
    marginVertical: 20,
    padding: 20,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

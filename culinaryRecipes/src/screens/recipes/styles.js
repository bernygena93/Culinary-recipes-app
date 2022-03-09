import {StyleSheet} from 'react-native';
import {COLORS} from '../../utils/constants/Colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: '100%',
    paddingHorizontal: 25,
  },
  recipesContainer: {
    backgroundColor: '#F9F9F9',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: '100%',
    paddingHorizontal: 5,
  },
  avatar: {
    width: 35,
    height: 35,
    backgroundColor: 'lightgray',
    borderRadius: 50,
    marginRight: 10,
  },
  carouselContainer: {
    borderRadius: 10,
    marginTop: 10,
  },
  image: {
    marginTop: 10,
    width: 370,
    height: 320,
    borderRadius: 10,
    elevation: 2,
  },
  titleContainer: {
    width: '100%',
    justifyContent: 'flex-start',
    paddingVertical: 5,
  },
  userContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'flex-start',
  },
  title: {
    marginVertical: 10,
    fontSize: 28,
    fontWeight: '700',
    color: COLORS.DARK_VIOLET,
  },
  infoContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
    paddingVertical: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: COLORS.LIGHT_GRAY,
  },
  subtitle: {
    marginVertical: 10,
    fontSize: 22,
    fontWeight: '600',
    color: COLORS.DARK_VIOLET,
  },
  text: {
    marginVertical: 5,
    fontSize: 18,
    fontWeight: '400',
    color: COLORS.DARK_VIOLET,
  },
  steps: {
    marginVertical: 5,
    fontSize: 19,
    fontWeight: '500',
    color: COLORS.DARK_VIOLET,
  },
  divider: {
    color: COLORS.LIGHT_GRAY,
  },
  listContainer: {
    borderBottomWidth: 0.5,
    borderBottomColor: COLORS.LIGHT_GRAY,
    width: '100%',
    paddingVertical: 10,
  },
  instructionContainer: {
    borderBottomWidth: 0.5,
    borderBottomColor: COLORS.LIGHT_GRAY,
    width: '100%',
    paddingVertical: 10,
    paddingRight: 50,
  },
  textPhoto: {
    marginTop: 20,
  },
});

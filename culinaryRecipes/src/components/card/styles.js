import {StyleSheet} from 'react-native';
import {COLORS} from '../../utils/constants/Colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: 380,
    height: 155,
    marginVertical: 10,
    borderRadius: 5,
    elevation: 1,
    backgroundColor: 'white',
  },
  img: {
    width: '40%',
    height: '100%',
    borderRadius: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
  },
  text: {
    fontSize: 12,
    marginLeft: 5,
    fontWeight: '600',
    marginRight: 10,
  },
  icon: {
    position: 'absolute',
    right: 15,
    top: 15,
  },
  userContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  avatar: {
    width: 25,
    height: 25,
    backgroundColor: 'lightgray',
    borderRadius: 50,
    marginRight: 5,
  },
  descriptionContainer: {
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    width: '32.5%',
    paddingLeft: 5,
  },
  description: {
    borderTopWidth: 0.5,
    borderTopColor: COLORS.DARK_VIOLET,
    paddingTop: 15,
    alignItems: 'center',
    flexDirection: 'row',
  },
});

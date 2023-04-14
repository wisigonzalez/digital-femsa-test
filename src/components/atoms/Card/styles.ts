import {StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export const CardStyles = StyleSheet.create({
  container: {
    marginLeft: 28,
    marginRight: 28,
    minWidth: 286,
    minHeight: 143,
    backgroundColor: '#334FFA',
    borderRadius: 20,
  },
  title: {
    marginLeft: 19,
    marginTop: 21,
    fontFamily: 'Avenir',
    fontStyle: 'normal',
    fontWeight: '800',
    fontSize: 16,
    lineHeight: 22,
    color: Colors.white,
  },
  value: {
    marginTop: 7,
    marginLeft: 35,
    minWidth: 191,
    fontFamily: 'Avenir',
    fontStyle: 'normal',
    fontWeight: '800',
    fontSize: 32,
    lineHeight: 44,
    color: Colors.white,
  },
});

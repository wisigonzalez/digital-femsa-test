import {StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export const ButtonStyles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    height: 50,
    backgroundColor: '#334FFA',
    borderRadius: 10,
  },
  text: {
    textAlign: 'center',
    fontFamily: 'Avenir',
    fontStyle: 'normal',
    fontWeight: '800',
    fontSize: 16,
    lineHeight: 22,
    color: Colors.white,
  },
});

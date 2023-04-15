import {StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import {resPixel, resText} from '../../../utils/responsive';

export const ButtonStyles = StyleSheet.create({
  container: {
    borderRadius: 10,
    height: resPixel(50),
    justifyContent: 'center',
    backgroundColor: '#334FFA',
  },
  text: {
    fontWeight: '900',
    color: Colors.white,
    textAlign: 'center',
    fontStyle: 'normal',
    fontFamily: 'Avenir',
    fontSize: resText(14),
    lineHeight: resText(22),
  },
});

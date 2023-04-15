import {StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import {resPixel, resText} from '../../../utils/responsive';

export const CardStyles = StyleSheet.create({
  container: {
    shadowOffset: {
      width: 0,
      height: 4,
    },
    elevation: 4,
    shadowRadius: 4,
    borderRadius: 20,
    shadowOpacity: 0.5,
    minWidth: resPixel(286),
    minHeight: resPixel(143),
    marginLeft: resPixel(28),
    marginRight: resPixel(28),
    shadowColor: Colors.black,
    backgroundColor: '#334FFA',
  },
  title: {
    fontWeight: '900',
    color: Colors.white,
    fontStyle: 'normal',
    fontFamily: 'Avenir',
    fontSize: resText(13),
    marginTop: resPixel(21),
    lineHeight: resText(22),
    marginLeft: resPixel(19),
  },
  value: {
    fontWeight: '900',
    color: Colors.white,
    alignSelf: 'center',
    fontStyle: 'normal',
    fontFamily: 'Avenir',
    fontSize: resText(26),
    marginTop: resPixel(7),
    minWidth: resPixel(191),
    lineHeight: resText(44),
  },
});

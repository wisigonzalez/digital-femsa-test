import {StyleSheet} from 'react-native';

import {resPixel, resText} from '../../utils/responsive';

export const ListItemStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: resPixel(15),
  },
  image: {
    borderRadius: 10,
    width: resPixel(55),
    height: resPixel(55),
    marginRight: resPixel(10),
  },
  leftContentSide: {
    flex: 1,
    flexDirection: 'row',
  },
  rightContentSide: {
    marginTop: resPixel(-4),
  },
  title: {
    fontWeight: '900',
    fontStyle: 'normal',
    fontFamily: 'Avenir',
    fontSize: resText(12),
    lineHeight: resText(19),
  },
  date: {
    fontWeight: '400',
    fontStyle: 'normal',
    fontFamily: 'Avenir',
    fontSize: resText(10),
    marginTop: resPixel(10),
    lineHeight: resText(16),
  },
  points: {
    fontWeight: '900',
    fontStyle: 'normal',
    fontFamily: 'Avenir',
    fontSize: resText(12),
    marginTop: resPixel(14),
    lineHeight: resText(19),
  },
  positive: {
    color: '#00B833',
  },
  negative: {
    color: '#FF0000',
  },
  arrow: {
    fontWeight: '900',
    fontStyle: 'normal',
    fontFamily: 'Avenir',
    fontSize: resText(14),
    marginTop: resPixel(10),
    lineHeight: resText(19),
    marginLeft: resPixel(20),
  },
});

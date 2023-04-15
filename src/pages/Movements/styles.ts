import {StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import {resPixel, resText} from '../../utils/responsive';

export const MovmentsStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: resPixel(20),
    paddingRight: resPixel(20),
    paddingBottom: resPixel(20),
    backgroundColor: Colors.white,
  },
  welcomeText: {
    fontWeight: '900',
    fontStyle: 'normal',
    fontFamily: 'Avenir',
    fontSize: resText(18),
    lineHeight: resText(27),
  },
  welcomeName: {
    fontStyle: 'normal',
    fontFamily: 'Avenir',
    fontSize: resText(14),
    marginTop: resPixel(-8),
    lineHeight: resText(27),
  },
  sectionOne: {
    color: '#9B9898',
    fontWeight: '900',
    fontStyle: 'normal',
    fontFamily: 'Avenir',
    fontSize: resText(12),
    marginTop: resPixel(10),
    lineHeight: resText(19),
  },
  cardContainer: {
    marginTop: resPixel(20),
  },
  sectionTwo: {
    color: '#9B9898',
    fontWeight: '900',
    fontStyle: 'normal',
    fontFamily: 'Avenir',
    fontSize: resText(12),
    marginTop: resPixel(16),
    lineHeight: resText(19),
  },
  listContainer: {
    flex: 1,
    marginTop: resPixel(24),
  },
  buttonContainer: {
    position: 'relative',
    justifyContent: 'flex-end',
  },
  buttonContainerTwo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  customButtonStyles: {
    width: resPixel(170),
    text: {
      fontSize: resPixel(12),
    },
  },
});

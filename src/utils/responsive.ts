import {Dimensions, Platform, PixelRatio} from 'react-native';

const windowDimensions = Dimensions.get('window');

const {height: windowScreenHeight, width: windowScreenWidth} = windowDimensions;

const referenceWidth = 375;
const referenceHeight = 667;

const useWidth =
  windowScreenWidth / referenceWidth < windowScreenHeight / referenceHeight;

const ratio = useWidth
  ? windowScreenWidth / referenceWidth
  : windowScreenHeight / referenceHeight;

const scaleWithWidth = windowDimensions.width / 320; // 320 based on phone scale

const responsiveText = (pixels: number): number => {
  const size = pixels * scaleWithWidth;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(size));
  }

  return Math.round(PixelRatio.roundToNearestPixel(size)) - 3;
};

const responsivePixels = (value: number): number => {
  return Math.round(value * ratio);
};

export const resText = responsiveText;
export const resPixel = responsivePixels;

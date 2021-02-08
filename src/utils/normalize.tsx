import { Dimensions } from 'react-native';
import {
  widthPercentageToDP as width,
  heightPercentageToDP as height,
  heightPercentageToDP as font,
} from 'react-native-responsive-screen';

const { width: screenWidth, height: screenHeight } = Dimensions.get('screen');

const normalizeWidth = (number: number) => {
  return screenWidth * (number / 375);
};

const normalizeHeight = (number: number) => {
  return screenHeight * (number / 812);
};

export { width, height, font, normalizeWidth, normalizeHeight };

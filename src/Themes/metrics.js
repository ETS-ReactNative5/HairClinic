import { Dimensions, Platform } from 'react-native';
const { width, height } = Dimensions.get('window');

const screenWidth = width < height ? width : height;
const screenHeight = width < height ? height : width;
const radiusFull = Math.round((screenWidth + screenHeight) / 2);

const metrics = {
  screenWidth,
  screenHeight,
  radiusFull,
  buttonRadius: 2,
  buttonRadiusVariant: 25,
  inputRadius: 4,
  radius: 4,
  marginHorizontal: 10,
  marginVertical: 10,
  section: 25,
  smallMargin: 5,
  baseMargin: 10,
  semiMargin: 15,
  doubleBaseMargin: 20,
  doubleSemiMargin: 30,
  tripleBaseMargin: 40,
  doubleBaseMarginPlatform: Platform.OS === 'ios' ? 20 : 10,
  doubleSection: 50,
  horizontalLineHeight: 1,
  navBarHeight: Platform.OS === 'ios' ? 64 : 54,
  activeOpacity: 1,
  icons: {
    tiny: 15,
    small: 20,
    normal: 24,
    medium: 30,
    large: 45,
    xl: 60,
    xxl: 70
  },
  images: {
    small: 20,
    medium: 40,
    large: 60,
    logo: 200
  }
};

export default metrics;

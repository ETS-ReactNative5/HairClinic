import { StyleSheet, Platform } from 'react-native';
import { Metrics, Colors, Fonts } from '../../Themes';

export const ITEM_HEIGHT = Metrics.screenHeight * 0.75;
export const ITEM_WIDTH = Metrics.screenWidth;
export const DOT_SIZE = 8;
export const HEIGHT = Metrics.screenHeight;
export const DOT_SPACING = 8;
export const DOT_INDICATOR_SIZE = DOT_SIZE + DOT_SPACING;
const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: Colors.pureWhite
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10
  },
  carouselContainer: {
    flex: 1
  },
  headerIconWrapper: {
    marginTop: 30,
    position: 'absolute',
    zIndex: 999
  },
  headerIcon: {
    fontSize: 35,
    color: Colors.pureWhite
  },
  image: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    resizeMode: 'cover'
  },
  imageContainer: {
    height: ITEM_HEIGHT,
    overflow: 'hidden'
  },
  pagination: {
    position: 'absolute',
    top: ITEM_HEIGHT / 2,
    left: 20
  },
  dot: {
    width: DOT_SIZE,
    height: DOT_SIZE,
    borderRadius: DOT_SIZE,
    backgroundColor: Colors.grey.grey30,
    marginBottom: DOT_SPACING
  },
  dotIndicator: {
    width: DOT_INDICATOR_SIZE,
    height: DOT_INDICATOR_SIZE,
    borderRadius: DOT_INDICATOR_SIZE,
    borderWidth: 1,
    borderColor: Colors.grey.grey30,
    position: 'absolute',
    top: -DOT_SIZE / 2,
    left: -DOT_SIZE / 2
  },
  clinicInfoContainer: {
    marginHorizontal: Metrics.baseMargin,
    marginTop: Metrics.baseMargin
  },
  clinicFavNameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  clinicNameWrapper: {
    maxWidth: '70%'
  },
  clinicName: {
    fontFamily: Fonts.type.Medium,
    color: Colors.black,
    fontSize: Fonts.size.medium
  },
  clinicLocation: {
    fontFamily: Fonts.type.regular,
    fontSize: Fonts.size.small,
    color: Colors.grey.grey60
  },

  favoriteIcon: {
    fontSize: 20
  }
});
export default styles;

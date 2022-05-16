import { StyleSheet } from 'react-native';
import { Colors, Fonts, Metrics } from '../../../Themes';

const styles = StyleSheet.create({
  popularListContainer: {
    marginHorizontal: Metrics.doubleBaseMargin,
    marginTop: Metrics.baseMargin
  },
  popularListHeaderWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  popularText: {
    fontFamily: Fonts.type.Bold,
    color: Colors.black,
    fontSize: Fonts.size.regular
  },
  seeAllText: {
    fontFamily: Fonts.type.Regular,
    fontSize: Fonts.size.medium,
    color: Colors.grey.grey60
  },
  clinicContainer: {
    backgroundColor: Colors.pureWhite,
    marginTop: Metrics.baseMargin,
    borderRadius: 10,
    width: Metrics.screenWidth * 0.7,
    marginRight: Metrics.baseMargin,
    maxheight: '30%'
  },
  clinicWrapper: {
    margin: Metrics.baseMargin
  },
  clinicImageContainer: {},
  clinicImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    resizeMode: 'cover'
  },
  favoriteIconContainer: {
    width: '100%',
    position: 'absolute',
    marginTop: Metrics.baseMargin,
    alignItems: 'flex-end',
    right: Metrics.baseMargin
  },
  favoriteIconWrapper: {
    backgroundColor: Colors.pureWhite,
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  favoriteIcon: {
    fontSize: 15
  },
  selectFavoriteIcon: {
    fontSize: 15,
    color: Colors.red
  },
  descriptionContainer: {
    width: '100%',
    marginTop: Metrics.baseMargin
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
  clinicReviewContainer: {
    width: '50%',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: Metrics.baseMargin
  },
  clinicReviewIcon: {
    fontSize: Fonts.size.small,
    color: Colors.orange
  },
  clinicReviewText: {
    marginLeft: Metrics.smallMargin,
    fontFamily: Fonts.type.regular,
    fontSize: Fonts.size.small,
    color: Colors.grey.grey60
  },
  popularListItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

export default styles;

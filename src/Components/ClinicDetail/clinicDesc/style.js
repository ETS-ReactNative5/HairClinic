import { StyleSheet, Platform } from 'react-native';
import { Metrics, Colors, Fonts } from '../../../Themes';

const styles = StyleSheet.create({
  container: {
    marginTop: Metrics.baseMargin
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  headerText: {
    fontFamily: Fonts.type.Medium,
    fontSize: Fonts.size.h14,
    color: Colors.grey.grey60
  },
  selectHeaderText: {
    fontFamily: Fonts.type.Medium,
    fontSize: Fonts.size.h14,
    color: Colors.black
  },
  aboutContainer: {
    marginTop: Metrics.baseMargin
  },
  aboutText: {
    fontFamily: Fonts.type.Medium,
    fontSize: Fonts.size.h12,
    color: Colors.grey.black
  },
  doctorContainer: {
    marginTop: Metrics.baseMargin,
    alignItems: 'center'
  },
  doctorItemContainer: {
    marginTop: Metrics.baseMargin,
    width: Metrics.screenWidth * 0.8,
    borderRadius: 10,
    borderWidth: 0.2,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 6
    },
    shadowOpacity: 0.21,
    shadowRadius: 6.65,
    elevation: 9
  },
  doctorItemWrapper: {
    padding: Metrics.baseMargin,
    flexDirection: 'row'
  },
  doctorImg: {
    width: 70,
    height: 100,
    resizeMode: 'cover',
    borderRadius: 10
  },
  doctorNameTitleContainer: {
    width: '80%',
    marginLeft: Metrics.baseMargin
  },
  doctorName: {
    fontFamily: Fonts.type.Medium,
    color: Colors.black,
    fontSize: Fonts.size.h15
  },
  doctorTitle: {
    fontFamily: Fonts.type.regular,
    fontSize: Fonts.size.h13,
    color: Colors.grey.grey60
  },
  reviewContainer: {
    marginTop: Metrics.baseMargin
  },
  reviewWrapper: {
    borderBottomColor: Colors.grey.grey40,
    borderBottomWidth: 1,
    marginTop: Metrics.baseMargin,
    padding: Metrics.smallMargin
  },
  ratingBarContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '30%'
  },
  starImg: {
    width: 20,
    height: 20,
    resizeMode: 'cover'
  },
  reviewNameDateContainer: {
    marginTop: Metrics.baseMargin,
    flexDirection: 'row'
  },
  reviewNameDateText: {
    fontFamily: Fonts.type.regular,
    fontSize: Fonts.size.h13,
    color: Colors.grey.grey60,
    marginRight: Metrics.smallMargin
  },
  reviewContentText: {
    marginTop: Metrics.baseMargin,
    fontFamily: Fonts.type.Medium,
    color: Colors.black,
    fontSize: Fonts.size.h13
  }
});
export default styles;

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
  }
});
export default styles;

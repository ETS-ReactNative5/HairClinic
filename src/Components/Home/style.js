import { StyleSheet } from 'react-native';
import { Colors, Fonts, Metrics } from '../../Themes';

const styles = StyleSheet.create({
  headerContainer: {
    marginTop: Metrics.baseMargin,
    marginHorizontal: Metrics.doubleBaseMargin
  },
  headerTitle: {
    color: Colors.grey.grey60,
    fontFamily: Fonts.type.Medium,
    fontSize: Fonts.size.medium
  },
  headerSubtitle: {
    color: Colors.black,
    fontFamily: Fonts.type.Bold,
    fontSize: Fonts.size.h5
  }
});

export default styles;

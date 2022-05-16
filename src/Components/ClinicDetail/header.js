import { View, Text } from 'react-native';
import React from 'react';
import styles from './style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';

const Header = ({ data }) => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerWrapper}>
        <View>
          <Ionicons style={styles.headerIcon} name='ios-chevron-back-outline' />
        </View>
        <View>
          <Text>{data?.name}</Text>
        </View>
        <Octicons style={styles.headerIcon} name='heart' />
      </View>
    </View>
  );
};

export default Header;

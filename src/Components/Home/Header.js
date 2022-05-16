import { View, Text } from 'react-native';
import React from 'react';
import styles from './style';
const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerSubtitle} >Hi Berkcan,</Text>
      <Text style={styles.headerTitle}>Welcome Back !</Text>
    </View>
  );
};

export default Header;

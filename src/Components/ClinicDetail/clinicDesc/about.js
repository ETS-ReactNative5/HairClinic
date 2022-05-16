import { View, Text } from 'react-native';
import React from 'react';
import styles from './style';

const About = ({ data }) => {
  return (
    <View style={styles.aboutContainer}>
      <Text style={styles.aboutText}>{data}</Text>
    </View>
  );
};

export default About;

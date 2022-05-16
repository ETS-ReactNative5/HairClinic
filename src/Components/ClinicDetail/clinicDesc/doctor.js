import { View, Text, Image, ScrollView } from 'react-native';
import React from 'react';
import styles from './style';

const Doctor = ({ data }) => {
  if (data.length === 0) return null;
  return (
    <View style={styles.doctorContainer}>
      <ScrollView>
        {data.map((item, index) => {
          if (!item) return null;
          return (
            <View key={index} style={styles.doctorItemContainer}>
              <View style={styles.doctorItemWrapper}>
                <Image style={styles.doctorImg} source={{ uri: item?.image }} />
                <View style={styles.doctorNameTitleContainer}>
                  <Text style={styles.doctorName}>{item?.name}</Text>
                  <Text style={styles.doctorTitle}>{item?.title}</Text>
                </View>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Doctor;

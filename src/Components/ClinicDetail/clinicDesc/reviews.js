import { View, Text } from 'react-native';
import React from 'react';
import styles from './style';
import RatingBar from './ratingBar';

const Reviews = ({ data }) => {
  return (
    <View style={styles.reviewContainer}>
      {data.map((item, index) => {
        return (
          <View key={`review-${index}`} style={styles.reviewWrapper}>
            <RatingBar starCount={item.star} />
            <View style={styles.reviewNameDateContainer}> 
              <Text style={styles.reviewNameDateText}>{item?.name}</Text>
              <Text style={styles.reviewNameDateText}>{item?.date}</Text>
            </View>
            <Text style={styles.reviewContentText}>{item?.title}</Text>
          </View>
        );
      })}
    </View>
  );
};

export default Reviews;

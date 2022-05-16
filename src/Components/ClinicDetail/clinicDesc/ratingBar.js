import { View, Text, Image } from 'react-native';
import React, { useState } from 'react';
import Octicons from 'react-native-vector-icons/Octicons';
import styles from './style';
const RatingBar = ({ starCount }) => {
  const [star, setStar] = useState(starCount);
  const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);
  const starImgFill =
    'https://raw.githubusercontent.com/Monte9/react-native-ratings/master/src/images/airbnb-star-selected.png';
  const startImgCorner =
    'https://raw.githubusercontent.com/Monte9/react-native-ratings/master/src/images/airbnb-star.png';
  return (
    <View style={styles.ratingBarContainer}>
      {maxRating.map((item, index) => {
        return (
          <Image
            style={styles.starImg}
            source={item <= star ? { uri: starImgFill } : { uri: startImgCorner }}
          />
        );
      })}
    </View>
  );
};

export default RatingBar;

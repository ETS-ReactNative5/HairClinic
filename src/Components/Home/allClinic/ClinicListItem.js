import { View, Text, Image } from 'react-native';
import React from 'react';
import styles from './style';
import Octicons from 'react-native-vector-icons/Octicons';
const ClinicListItem = ({ item }) => {
  return (
    <View style={styles.clinicContainer}>
      <View style={styles.clinicWrapper}>
        <View style={styles.clinicImageContainer}>
          <Image
            style={styles.clinicImage}
            source={{
              uri: item?.clinicMainImage
            }}
          />
          <View style={styles.favoriteIconContainer}>
            <View style={styles.favoriteIconWrapper}>
              <Octicons name='heart' style={styles.favoriteIcon} />
            </View>
          </View>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.clinicName}>{item?.name}</Text>
          <Text style={styles.clinicLocation}>{item?.location}</Text>
        </View>
        <View style={styles.clinicReviewContainer}>
          <Octicons name='star-fill' style={styles.clinicReviewIcon} />
          <Text style={styles.clinicReviewText}>{item?.star}</Text>
          <Text style={styles.clinicReviewText}>({item?.reviewCount} Reviews)</Text>
        </View>
      </View>
    </View>
  );
};

export default ClinicListItem;
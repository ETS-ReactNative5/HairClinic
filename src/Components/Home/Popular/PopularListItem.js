import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './style';
import Octicons from 'react-native-vector-icons/Octicons';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../../../Redux/favorite/favoriteSlice';
const PopularListItem = ({ item, navigate }) => {
  const { id, clinicMainImage, name, location, star, reviewCount } = item;
  const dispatch = useDispatch();
  const favorite = useSelector(state => state.favorite);
  const defaultFavorite = favorite.filter(x => x.id === id);
  console.log('defaultFavorite: ', defaultFavorite);
  const changeFavorite = id => {
    if (defaultFavorite.length > 0) {
      dispatch(removeFavorite(id));
    } else {
      dispatch(addFavorite(id));
    }
  };
  return (
    <TouchableOpacity
      style={styles.clinicContainer}
      onPress={() => navigate('ClinicDetail', { data: item })}
      activeOpacity={0.9}
    >
      <View style={styles.clinicWrapper}>
        <View style={styles.clinicImageContainer}>
          <Image
            style={styles.clinicImage}
            source={{
              uri: clinicMainImage
            }}
          />
          <View style={styles.favoriteIconContainer}>
            <TouchableOpacity onPress={() => changeFavorite(id)} style={styles.favoriteIconWrapper}>
              {defaultFavorite.length > 0 ? (
                <Octicons name='heart-fill' style={styles.selectFavoriteIcon} />
              ) : (
                <Octicons name='heart' style={styles.favoriteIcon} />
              )}
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.clinicName}>{name}</Text>
          <Text style={styles.clinicLocation}>{location}</Text>
        </View>
        <View style={styles.clinicReviewContainer}>
          <Octicons name='star-fill' style={styles.clinicReviewIcon} />
          <Text style={styles.clinicReviewText}>{star}</Text>
          <Text style={styles.clinicReviewText}>({reviewCount} Reviews)</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PopularListItem;

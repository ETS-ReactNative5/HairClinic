import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './style';
import Octicons from 'react-native-vector-icons/Octicons';
import ClinicDesc from './clinicDesc';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../../Redux/favorite/favoriteSlice';

const ClinicInformation = ({ data }) => {
  const { name, location, id } = data;
  const dispatch = useDispatch();
  const favorite = useSelector(state => state.favorite);
  const defaultFavorite = favorite.filter(x => x.id === id);
  const changeFavorite = id => {
    if (defaultFavorite.length > 0) {
      dispatch(removeFavorite(id));
    } else {
      dispatch(addFavorite(id));
    }
  };
  if (!data) return null;
  return (
    <View style={styles.clinicInfoContainer}>
      <View style={styles.clinicFavNameContainer}>
        <View style={styles.clinicNameWrapper}>
          <Text style={styles.clinicName}>{name}</Text>
          <Text style={styles.clinicLocation}>{location}</Text>
        </View>
        <View>
          <TouchableOpacity onPress={() => changeFavorite(id)} style={styles.favoriteIconWrapper}>
            {defaultFavorite.length > 0 ? (
              <Octicons name='heart-fill' style={styles.selectFavoriteIcon} />
            ) : (
              <Octicons name='heart' style={styles.favoriteIcon} />
            )}
          </TouchableOpacity>
        </View>
      </View>
      <ClinicDesc data={data} />
    </View>
  );
};

export default ClinicInformation;

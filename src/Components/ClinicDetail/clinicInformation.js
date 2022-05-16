import { View, Text } from 'react-native';
import React from 'react';
import styles from './style';
import Octicons from 'react-native-vector-icons/Octicons';
import ClinicDesc from './clinicDesc';
const ClinicInformation = ({ data }) => {

  return (
    <View style={styles.clinicInfoContainer}>
      <View style={styles.clinicFavNameContainer}>
        <View style={styles.clinicNameWrapper}>
          <Text style={styles.clinicName}>{data?.name}</Text>
          <Text style={styles.clinicLocation}>{data?.location}</Text>
        </View>
        <View>
          <Octicons name='heart' style={styles.favoriteIcon} />
        </View>
      </View>
      <ClinicDesc data={data} />
    </View>
  );
};

export default ClinicInformation;

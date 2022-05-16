import { View, Text, FlatList, ScrollView } from 'react-native';
import React from 'react';
import styles from './style';
import { popularHospital } from '../../../Assets/fakeDb/popularHospital';
import ClinicListItem from './ClinicListItem';

const ClinicList = ({navigate}) => {
  return (
    <View style={styles.popularListContainer}>
      <View style={styles.popularListHeaderWrapper}>
        <Text style={styles.popularText}>All Clinic</Text>
        <Text style={styles.seeAllText}>See all</Text>
      </View>
      <View>
        {popularHospital.map((item, index) => {
          return <ClinicListItem navigate={navigate} key={`${index}-clinic-list`} item={item} />;
        })}
      </View>
    </View>
  );
};

export default ClinicList;

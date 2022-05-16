import { View, Text, FlatList, ScrollView } from 'react-native';
import React from 'react';
import styles from './style';
import { popularHospital } from '../../../Assets/fakeDb/popularHospital';
import PopularListItem from './PopularListItem';

const PopularList = ({ navigate }) => {
  return (
    <View style={styles.popularListContainer}>
      <View style={styles.popularListHeaderWrapper}>
        <Text style={styles.popularText}>Popular Clinic</Text>
        <Text style={styles.seeAllText}>See all</Text>
      </View>

      <View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.popularListItemContainer}>
            {popularHospital.map((item, index) => {
              return <PopularListItem navigate={navigate} item={item} />;
            })}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default PopularList;

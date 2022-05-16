import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import styles from './style';
import About from './about';
import Doctor from './doctor';
import Reviews from './reviews';

const ClinicDesc = ({ data }) => {
  const { about, doctor,review } = data?.info;
  const cat = [
    { id: 1, name: 'About' },
    { id: 2, name: 'Doctors' },
    { id: 3, name: 'Reviews' }
  ];
  const selectedCat = index => {
    setSelectCat(index);
  };

  const [selectCat, setSelectCat] = useState(1);
  if (!data) return null;
  return (
    <View style={styles.container}>
      <View style={styles.headerWrapper}>
        {cat.map((item, index) => {
          return (
            <TouchableOpacity onPress={() => selectedCat(item.id)} key={`cat-name-${item.name}`}>
              <Text style={selectCat === item.id ? styles.selectHeaderText : styles.headerText}>
                {item.name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <View>
        {selectCat === 1 && <About data={about} />}
        {selectCat === 2 && <Doctor data={doctor} />}
        {selectCat === 3 && <Reviews data={review} />}
      </View>
    </View>
  );
};

export default ClinicDesc;

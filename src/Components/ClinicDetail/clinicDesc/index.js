import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import styles from './style';
import About from './about';
import Doctor from './doctor';
import Reviews from './reviews';

const ClinicDesc = () => {
  const cat = [
    { id: 1, name: 'About' },
    { id: 2, name: 'Doctors' },
    { id: 3, name: 'Reviews' }
  ];
  const selectedCat = index => {
    setSelectCat(index);
  };

  const [selectCat, setSelectCat] = useState(1);
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
        {selectCat === 1 && <About />}
        {selectCat === 2 && <Doctor />}
        {selectCat === 3 && <Reviews />}
      </View>
    </View>
  );
};

export default ClinicDesc;

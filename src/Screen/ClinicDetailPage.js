import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import React from 'react';
import { ClinicInformation, Header, ImageCarousel } from '../Components/ClinicDetail';
import { popularHospital } from '../Assets/fakeDb/popularHospital';

const ClinicDetailPage = ({ navigation, route }) => {
  const { data } = route.params;
  return <ImageCarousel navigation={navigation} data={data} />;
};

export default ClinicDetailPage;

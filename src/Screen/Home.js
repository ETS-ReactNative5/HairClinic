import { View, ScrollView, StyleSheet } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ClinicList, Header, PopularList } from '../Components/Home';

const Home = ({ navigation }) => {
  const { navigate } = navigation;
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header />
        <PopularList navigate={navigate} />
        <ClinicList />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

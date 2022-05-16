import { View, Text, FlatList, Image, Animated, StatusBar } from 'react-native';
import React from 'react';
import styles, { ITEM_HEIGHT, DOT_INDICATOR_SIZE, HEIGHT } from './style';
import { SliderBox } from 'react-native-image-slider-box';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import ClinicInformation from './clinicInformation';
const ImageCarousel = ({ data, navigation }) => {
  const scrollY = React.useRef(new Animated.Value(0)).current;
  return (
    <View style={styles.carouselContainer}>
      <StatusBar hidden />
      <View style={styles.headerIconWrapper}>
        <Ionicons
          onPress={() => {
            navigation.goBack();
          }}
          style={styles.headerIcon}
          name='ios-chevron-back-outline'
        />
      </View>
      <View style={styles.imageContainer}>
        <Animated.FlatList
          data={data?.clinicImage}
          keyExtractor={(_, index) => index.toString()}
          snapToInterval={ITEM_HEIGHT}
          decelerationRate='fast'
          showsVerticalScrollIndicator={false}
          bounces={false}
          onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], {
            useNativeDriver: true
          })}
          renderItem={({ item }) => {
            return (
              <View>
                <Image source={{ uri: item }} style={styles.image} />
              </View>
            );
          }}
        />
        <View style={styles.pagination}>
          {data?.clinicImage.map((_, index) => {
            return <View key={index} style={[styles.dot]} />;
          })}
          <Animated.View
            style={[
              styles.dotIndicator,
              {
                transform: [
                  {
                    translateY: Animated.divide(scrollY, ITEM_HEIGHT).interpolate({
                      inputRange: [0, 1],
                      outputRange: [0, DOT_INDICATOR_SIZE]
                    })
                  }
                ]
              }
            ]}
          />
        </View>
      </View>
      <BottomSheet initialSnapIndex={0} snapPoints={[HEIGHT - ITEM_HEIGHT, HEIGHT * 0.75]}>
        <BottomSheetScrollView
          style={{ backgroundColor: '#fff' }}
          contentContainerStyle={{ padding: 20 }}
        >
          <ClinicInformation data={data} />
        </BottomSheetScrollView>
      </BottomSheet>
    </View>
  );
};

export default ImageCarousel;

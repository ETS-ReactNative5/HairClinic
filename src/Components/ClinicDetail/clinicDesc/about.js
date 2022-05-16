import { View, Text } from 'react-native';
import React from 'react';
import styles from './style';

const About = () => {
  return (
    <View style={styles.aboutContainer}>
      <Text style={styles.aboutText}>
        Providing beauty everywhere – with multiple locations around the globe, Esteworld Medical
        Group is pleased to extend its cosmetic and health care services to the 4 corners of the
        world. Being present in key world destinations – Istanbul, Dubai, London, Berlin, New York –
        allowed us to push the envelope in hair transplantation, cosmetic surgery treatments and
        medical tourism industry, helping thousands of international patients receive first class
        treatment at an affordable cost. As a truly multidisciplinary cosmetic surgery center within
        world-class, integrating health care delivery system, we strive to combine broad-based,
        innovative approaches with high-quality patient care. Our hair transplantation, cosmetic
        surgery and skin care team is comprised of experienced health care professionals – including
        hair restauration specialists, plastic surgeons, facial plastic surgery specialist,
        dermatologists, cosmetic dental experts and support staff – who are at the ready to help you
        realise all your appearance goals. Our patients can choose from wide range of procedures for
        hair, face, breast and body, the most advanced plastic surgery and hair restauration options
        including robotic hair transplantation, hair auto-cloning, breast implants, facelift, nose
        surgery, liposuction among others. We wish you a pleasant journey to a whole new beautiful
        you!
      </Text>
    </View>
  );
};

export default About;

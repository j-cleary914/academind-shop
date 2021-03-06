import React from 'react';
import { StyleSheet, Platform } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import Colors from '../../constants/Colors';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const HeaderDrawToggle = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.toggleDrawer();
      }}
    >
      <FontAwesomeIcon icon={['fas', 'bars']} style={styles.icon} size={28} />
    </TouchableOpacity>
  );
};

const iconColor = Platform.OS === 'ios' ? Colors.primary : 'white';

const styles = StyleSheet.create({
  icon: {
    color: iconColor,
    paddingHorizontal: 30,
  },
});

export default HeaderDrawToggle;

import React from 'react';
import PropTypes from 'prop-types';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet, View, Text } from 'react-native';

export default function BottomBarIcons({ focused, variant, color }) {
  const screens = {
    Home: {
      icon: <Entypo name='home' size={24} color={color} />,
      text: 'Home',
    },
    Breathe: {
      icon: <Ionicons name='person-circle-outline' size={24} color={color} />,
      text: 'Breathe',
    },
    Advice: {
      icon: (
        <MaterialCommunityIcons name='apple-icloud' size={24} color={color} />
      ),
      text: 'Advice',
    },
    Profile: {
      icon: <MaterialCommunityIcons name='pharmacy' size={24} color={color} />,
      text: 'Profile',
    },
  };

  const selectedVariant = screens[variant];

  return (
    <View>
      <View style={styles.iconContainer(focused)}>{selectedVariant.icon}</View>
      <Text style={styles.text(focused)}>{selectedVariant.text}</Text>
    </View>
  );
}

BottomBarIcons.propTypes = {
  focused: PropTypes.bool.isRequired,
  variant: PropTypes.oneOf(['Home', 'Breathe', 'Advice', 'Profile']).isRequired,
  color: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  iconContainer: (focused) => ({
    backgroundColor: focused ? 'deepskyblue' : undefined,
    borderRadius: 100,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 4,
    marginHorizontal: 10,
  }),
  text: (focused) => ({
    fontSize: 10,
    fontWeight: '700',
    textAlign: 'center',
    color: focused ? 'black' : 'gainsboro',
    textTransform: 'uppercase',
  }),
});

import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  Button,
  View,
  Animated,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function ExerciseOne({ navigation }) {
  const sizeAnim = useRef(new Animated.Value(100)).current;
  const [exerciseOn, setExerciseOn] = useState(false);
  const [shownText, setShownText] = useState('Start');

  const startExercise = () => {
    setExerciseOn(true);
    Animated.loop(
      Animated.sequence([
        Animated.timing(sizeAnim, {
          toValue: 300,
          duration: 4000,
          useNativeDriver: false,
        }),
        Animated.delay(7000),
        Animated.timing(sizeAnim, {
          toValue: 100,
          duration: 8000,
          useNativeDriver: false,
        }),
      ]),
    ).start();
  };

  const startExerciseText = () => {
    setShownText('Inhale');
    setTimeout(() => setShownText('Hold'), 4000);
    setTimeout(() => setShownText('Exhale'), 11000);
    setTimeout(() => startExerciseText(), 19000);
  };

  return (
    <LinearGradient style={styles.container} colors={['#00e6ff', '#1c1cd0']}>
      <SafeAreaView style={styles.container}>
        <View styles={styles.view}>
          <Animated.View
            style={[
              styles.ball,
              {
                width: sizeAnim,
                height: sizeAnim,
              },
            ]}
          >
            <Text style={styles.text}>{shownText}</Text>
          </Animated.View>
        </View>

        <View style={styles.buttonRow}>
          <Button
            title={exerciseOn ? 'Stop exercise' : 'Start exercise'}
            onPress={
              exerciseOn
                ? () => {
                    navigation.goBack();
                  }
                : () => {
                    startExercise();
                    startExerciseText();
                  }
            }
            color='white'
          />
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

ExerciseOne.propTypes = {
  navigation: PropTypes.shape(),
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  view: {
    height: 600,
  },
  ball: {
    backgroundColor: 'white',
    borderRadius: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
  buttonRow: {
    marginTop: 100,
    position: 'absolute',
    bottom: 100,
  },
});

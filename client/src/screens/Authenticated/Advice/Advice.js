import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, SafeAreaView, Image, Text } from 'react-native';
import { BleManager } from 'react-native-ble-plx';
import game from '../../../../public/game.png';
import { theme } from '../../../utils/Theme';

export default function Advice({ navigation }) {
  const manager = new BleManager();

  useEffect(() => {
    const subscription = manager.onStateChange((state) => {
      if (state === 'PoweredOn') {
        scanAndConnect();
        subscription.remove();
      }
    }, true);
  }, []);

  const scanAndConnect = () => {
    manager.startDeviceScan(null, null, (error, device) => {
      if (error) {
        // Handle error (scanning will be stopped automatically)
        return;
      }

      // Check if it is a device you are looking for based on advertisement data
      // or other criteria.
      if (device.name === 'TI BLE Sensor Tag' || device.name === 'SensorTag') {
        // Stop scanning as it's not necessary if you are scanning for one device.
        manager.stopDeviceScan();

        // Proceed with connection.
        const info = device
          .connect()
          .then((device) => {
            console.log(device);
            return device.discoverAllServicesAndCharacteristics();
          })
          .then((device) => {
            // Do work on device with services and characteristics
          })
          .catch((error) => {
            // Handle errors
          });
      }
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.image} source={game} />
      <Text style={styles.title}>Stressful game</Text>
      <Text style={styles.title}>Other Breathing exercises</Text>
    </SafeAreaView>
  );
}

Advice.propTypes = {
  navigation: PropTypes.shape(),
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  image: {
    width: 400,
    height: 200,
  },
  title: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: '700',
  },
  percent: {
    marginTop: 50,
    fontSize: 80,
    color: theme.blue,
    fontWeight: '700',
  },
});

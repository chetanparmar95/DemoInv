import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, NativeModules } from 'react-native';

const { SimulatorCheckModule } = NativeModules;

interface Props {
    style?: object
}

const SimulatorText = ({ style }: Props) => {
  const [isRunningOnSimulator, setIsRunningOnSimulator] = useState(null);

  useEffect(() => {
    const checkSimulator = async () => {
      try {
        const isSimulator = await SimulatorCheckModule.isRunningOnSimulator();
        setIsRunningOnSimulator(isSimulator);
      } catch (error) {
        console.log('Error checking simulator:', error);
      }
    };

    checkSimulator();
  }, []);

  if (isRunningOnSimulator === null) {
    return null; // or show a loading indicator
  }

  return (
    <Text style={[styles.text, style]}>
      {isRunningOnSimulator ? 'Running on Simulator' : 'Running on Device'}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default SimulatorText;

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, PanResponder, Animated, SafeAreaView } from 'react-native';
import AppButton from '../../components/Button';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useAppSelector } from '../../store';
import { RootState } from '../../store';
import SimulatorText from '../../components/SimulatorText';

interface ButtonProps {
  navigation: any;
}

const Buttons = ({navigation}: ButtonProps) => {
  const name = useAppSelector((state: RootState) => state.user.name);

  const navigate = () => {
    navigation.navigate('SimulatorCheck');
  }

  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.welcomeText}>Welcome {name}</Text>
        <GestureHandlerRootView style={styles.gestureContainer}>
        <View style={styles.buttonsView}>
          <Text style={styles.heading}>4 Variantions of a buttons</Text>
          <AppButton variant={1} title='Press me' onPress={navigate}/>
          <AppButton variant={2} title='Press me' onPress={navigate}/>
          <AppButton variant={3} title='Press me' onPress={navigate}/>
          <AppButton variant={4} title='Slide me to press' onPress={navigate}/>
        </View>
      </GestureHandlerRootView>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    marginHorizontal: 16
  },
  welcomeText: {
    marginTop: 16, 
    fontSize: 18
  },
  buttonsView: {
    flex: 1, 
    width: '100%', 
    justifyContent: 'flex-end'
  },
  gestureContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    textAlign: 'center', 
    marginBottom: 16, 
    fontSize: 18
  }
});

export default Buttons;

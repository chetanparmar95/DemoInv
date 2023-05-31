import React, { useRef, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Button } from 'react-native';
import SlideButton from 'rn-slide-button';

interface ButtonProps {
    variant?: number;
    title: string;
    onPress: () => void;
}

const AppButton = ({variant = 1, title, onPress}: ButtonProps) => {

    const generateVariant = () => {
        switch(variant) {
            case 1:
                return (
                    <View style={styles.variant1}>
                      <Button title={title} onPress={onPress} />
                    </View>
                )
            case 2:
                return (
                    <TouchableOpacity style={[styles.button, styles.variant2]} onPress={onPress}>
                        <Text style={styles.buttonText}>{title}</Text>
                    </TouchableOpacity>
                )
            case 3:
                return (
                    <TouchableOpacity style={[styles.button, styles.variant3]} onPress={onPress}>
                        <Text style={[styles.buttonText, styles.whiteText]}>{title}</Text>
                    </TouchableOpacity>
                )
            case 4:
                return (
                    <SlideButton title={title} onReachedToEnd={onPress} autoReset />
                )
            default:
                return <View />
        }
    }

    return generateVariant();
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  button: {
    marginBottom: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    justifyContent: 'center',
    backgroundColor: '#2196F3',
  },
  whiteText: {
    color: '#FFF'
  },
  buttonText: {
    color: '#14a0ed',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  variant1: {
    marginVertical: 16,
  },
  variant2: {
    width: '100%',
    height: 50,
    backgroundColor: '#848883'
  },
  variant3: {
    width: '100%',
    height: 50,
    backgroundColor: '#14a0ed'
  },
  slideButton: {
    width: '100%',
    backgroundColor: '#4CAF50',
  }
});

export default AppButton;

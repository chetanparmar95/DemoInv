import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import SimulatorText from '../../components/SimulatorText';

const SimulatorCheck = () => {
    return (
        <SafeAreaView style={styles.container}>
            <SimulatorText />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    }
});
export default SimulatorCheck;
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const Selector = ({ activeValue, handleSelector, value }) => {
    return (
        <TouchableOpacity
            onPress={() => handleSelector(value)}
            style={[styles.base, activeValue === value ? styles.active : styles.inactive]}>
            <Text style={styles.text}>{value}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    base: {
        borderColor: '#bbb',
        borderRadius: 15,
        borderWidth: 2,
        marginBottom: 4,
        marginTop: 4,
        padding: 10,
        width: 200
    },
    active: {
        backgroundColor: 'papayawhip'
    },
    inactive: {
        backgroundColor: '#eee'
    },
    text: {
        textAlign: 'center'
    }
})

export default Selector;
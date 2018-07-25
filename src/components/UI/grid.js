import React from 'react';
import { StyleSheet, View } from 'react-native';

export const Row = props => (
    <View {...props} style={[styles.row, props.style]}>{props.children}</View>
);

export const Column = props => (
    <View {...props} style={[styles.row, props.style]}>{props.children}</View>
);

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%'
    },
    column: {
        // flex: 1,
    }
});
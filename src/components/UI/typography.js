import React from 'react';
import { StyleSheet, Text } from 'react-native';

export const Header = props => (
    <Text {...props} style={[styles.header, props.style]}>{props.children}</Text>
);

export const Subheading = props => (
    <Text {...props} style={[styles.subheading, props.style]}>{props.children}</Text>
);

const styles = StyleSheet.create({
    header: {
        color: '#000',
        fontSize: 28,
        fontWeight: 'bold'
    },
    subheading: {
        color: '#111',
        fontSize: 14
    }
});

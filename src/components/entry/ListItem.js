import React from 'react';
import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const ListItem = ({ icon, title, showForm }) => (
    <TouchableOpacity onPress={() => showForm(title)}>
        <View style={styles.container}>
            <Icon
                name={Platform.OS === 'android' ? `md-${icon}` : `ios-${icon}`}
                size={60}
            />
            <Text>{title}</Text>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        height: '100%',
        justifyContent: 'center',
        width: '100%'
    }
});

export default ListItem;
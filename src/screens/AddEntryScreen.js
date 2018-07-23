import React, { Component } from 'react';
import {
    Button,
    StyleSheet,
    Text,
    View
} from 'react-native';
import { Navigation } from 'react-native-navigation';

export default class AddEntryScreen extends Component {
    closeModal = () => {
        Navigation.dismissModal({
            animationType: 'slide-down'
        });
    }

    render() {
        return (
            <View style={styles.modal}>
                <Text>Add a new entry!</Text>
                <Button title='Close' onPress={this.closeModal} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    modal: {
        alignItems: 'center',
        backgroundColor: 'papayawhip',
        flex: 1,
        justifyContent: 'flex-start',
        marginTop: 30
    }
});
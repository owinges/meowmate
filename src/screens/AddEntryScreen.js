import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Navigation } from 'react-native-navigation';

import EntryList from '../components/entry/EntryList';
import Button from '../components/Button';
import theme from '../styles/theme';

export default class AddEntryScreen extends Component {
    static navigatorStyle = {
        navBarBackgroundColor: theme.tertiary
    };

    closeModal = () => {
        Navigation.dismissModal({
            animationType: 'slide-down'
        });
    }

    showForm = (entryType) => {
        this.props.navigator.push({
            screen: 'meowmate.EntryFormScreen',
            title: entryType,
            passProps: {
                type: entryType
            }
        })
    }

    render() {
        return (
            <View style={styles.modal}>
                <EntryList showForm={this.showForm} />
                <View style={styles.buttonContainer}>
                    <Button style='default' onPress={this.closeModal}>Close</Button>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    modal: {
        alignItems: 'center',
        backgroundColor: theme.primary,
        flex: 1,
        justifyContent: 'flex-start',
        paddingTop: 30
    },
    buttonContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 12
    }
});
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import FeedingForm from '../components/entry/forms/FeedingForm';
import PoopingForm from '../components/entry/forms/PoopingForm';
import PlayingForm from '../components/entry/forms/PlayingForm';
import DewormingForm from '../components/entry/forms/DewormingForm';
import MedicineForm from '../components/entry/forms/MedicineForm';
import VetVisitForm from '../components/entry/forms/VetVisitForm';

export default class EntryFormScreen extends Component {

    displayForm = () => {
        const { type } = this.props;

        switch (type) {
            case 'Feeding':
                return <FeedingForm />;
            case 'Pooping':
                return <PoopingForm />;
            case 'Playing':
                return <PlayingForm />;
            case 'Deworming':
                return <DewormingForm />;
            case 'Medicine':
                return <MedicineForm />;
            case 'Vet visit':
                return <VetVisitForm />;
            default:
                return;
        }
    }
    render() {
        return (
            <View style={styles.container}>
                {this.displayForm()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: 'papayawhip',
        flex: 1,
        paddingTop: 12
    }
})
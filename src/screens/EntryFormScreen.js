import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import FeedingForm from '../components/entry/forms/FeedingForm';
import PoopingForm from '../components/entry/forms/PoopingForm';
import PlaytimeForm from '../components/entry/forms/PlaytimeForm';
import DewormingForm from '../components/entry/forms/DewormingForm';
import MedicineForm from '../components/entry/forms/MedicineForm';
import VetVisitForm from '../components/entry/forms/VetVisitForm';

export default class EntryFormScreen extends Component {

    displayForm = () => {
        const { type } = this.props;

        switch (type) {
            case 'Feeding':
                return <FeedingForm returnToProfile={this.backToProfile} />;
            case 'Pooping':
                return <PoopingForm returnToProfile={this.backToProfile} />;
            case 'Playtime':
                return <PlaytimeForm returnToProfile={this.backToProfile} />;
            case 'Deworming':
                return <DewormingForm returnToProfile={this.backToProfile} />;
            case 'Medicine':
                return <MedicineForm returnToProfile={this.backToProfile} />;
            case 'Vet visit':
                return <VetVisitForm returnToProfile={this.backToProfile} />;
            default:
                return;
        }
    }

    backToProfile = () => {
        // this.props.navigator.popToRoot({
        //     animated: true,
        //     animationType: 'fade'
        // });

        this.props.navigator.dismissAllModals({
            animationType: 'slide-down'
        });
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
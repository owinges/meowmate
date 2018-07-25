import React, { Component } from 'react';
import { Button, Picker, StyleSheet, Text, TextInput, View } from 'react-native';
import { connect } from 'react-redux';

import { addEntry } from '../../../store/entryActions';

class FeedingForm extends Component {
    state = {
        foodType: 'Wet food',
        quantity: '10 grams',
        consistency: 'normal', // for poop: runny, normal, dry
        duration: '15 minutes', // for playtime
        name: 'Advocate', // name of deworming, medicine or vet visit
        frequency: 'monthly', // frequency: daily, weekly, monthly
        startDate: '' // start date used to calculate frequency reminders
    }

    newEntry = () => {
        const entry = {
            key: Math.random().toString(),
            date: new Date(),
            foodType: this.state.foodType,
            quantity: this.state.quantity
        }
        this.props.onAddEntry(entry);
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    value={this.state.quantity}
                    placeholder='Enter quantity in grams'
                    onChangeText={(value) => this.setState({ quantity: value })}
                />
                <Picker
                    style={styles.picker}
                    mode='dropdown'
                    selectedValue={this.state.foodType}
                    onValueChange={(itemValue) => this.setState({ foodType: itemValue })}
                >
                    <Picker.Item label={'Wet food'} value={'Wet food'} />
                    <Picker.Item label={'Dry food'} value={'Dry food'} />
                    <Picker.Item label={'Raw food'} value={'Raw food'} />
                </Picker>
                <Button title='submit' onPress={this.newEntry} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '80%'
    },
    picker: {
        width: '100%'
    },
    input: {
        width: '100%'
    }
});

const mapDispatchToProps = dispatch => {
    return {
        onAddEntry: (entry) => dispatch(addEntry(entry))
    }
}

export default connect(null, mapDispatchToProps)(FeedingForm);
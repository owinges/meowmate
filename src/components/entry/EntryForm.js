import React, { Component } from 'react';
import { Button, Picker, StyleSheet, Text, TextInput, View } from 'react-native';

export default class EntryForm extends Component {
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
        this.props.addEntry(this.props.type, entry);
    }

    render() {
        const { type } = this.props;
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
                    selectedValue={selectedValue}
                    onValueChange={(itemValue) => valueChange(type, itemValue)}
                >
                    <Picker.Item label={values[0]} value={values[0]} />
                    <Picker.Item label={values[1]} value={values[1]} />
                    <Picker.Item label={values[2]} value={values[2]} />
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

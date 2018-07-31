import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { connect } from 'react-redux';
import moment from 'moment';

import Button from '../../Button';
import Selector from './Selector';
import { Header } from '../../UI/typography';
import { addFeeding } from '../../../store/entryActions';

class FeedingForm extends Component {
    state = {
        foodType: 'Dry food',
        quantity: null,
        name: 'Advocate', // name of deworming, medicine or vet visit
        frequency: 'monthly', // frequency: daily, weekly, monthly
        startDate: '', // start date used to calculate frequency reminders
        isDateTimePickerVisible: false,
        date: new Date()
    }

    toggleDateTimePicker = () => this.setState({
        isDateTimePickerVisible: !this.state.isDateTimePickerVisible
    });

    handleDatePicked = (date) => {
        this.setState({ date });
        this.toggleDateTimePicker();
    };

    newEntry = () => {
        if (this.state.quantity === null) {
            return;
        }

        const feedingEntry = {
            date: moment(this.state.date),
            foodType: this.state.foodType,
            quantity: this.state.quantity
        }

        this.props.onAddFeeding(feedingEntry);
        this.props.returnToProfile();
    }

    handleSelector = foodType => {
        this.setState({ foodType });
    }

    render() {
        return (
            <View style={styles.container}>
            <TouchableOpacity onPress={this.toggleDateTimePicker}>
                <Text>{this.state.date.toDateString()}</Text>
            </TouchableOpacity>
            <DateTimePicker
                mode='datetime'
                maximumDate={new Date()}
                isVisible={this.state.isDateTimePickerVisible}
                onConfirm={this.handleDatePicked}
                onCancel={this.toggleDateTimePicker}
            />
            <Header style={styles.quantity}>How much food?</Header>
                <TextInput
                    style={styles.input}
                    value={this.state.quantity}
                    placeholder='Enter quantity in grams'
                    keyboardType='number-pad'
                    maxLength={3}
                    onChangeText={(value) => this.setState({ quantity: value })}
                />
                <Header style={styles.type}>Type of food?</Header>
                <Selector
                    handleSelector={this.handleSelector}
                    value='Wet food'
                    activeValue={this.state.foodType}
                />
                <Selector
                    handleSelector={this.handleSelector}
                    value='Dry food'
                    activeValue={this.state.foodType}
                />
                <Selector
                    handleSelector={this.handleSelector}
                    value='Raw food'
                    activeValue={this.state.foodType}
                />
                <Button type='Default' onPress={this.newEntry}>Submit</Button>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        width: '80%'
    },
    quantity: {
        marginBottom: 22,
        marginTop: 16
    },
    type: {
        marginTop: 16
    },
    input: {
        backgroundColor: 'white',
        borderColor: '#eee',
        borderRadius: 10,
        borderWidth: 2,
        fontSize: 24,
        paddingBottom: 6,
        paddingLeft: 12,
        paddingRight: 12,
        paddingTop: 6,
        width: '100%'
    }
});

const mapDispatchToProps = dispatch => {
    return {
        onAddFeeding: (feeding) => dispatch(addFeeding(feeding))
    }
}

export default connect(null, mapDispatchToProps)(FeedingForm);
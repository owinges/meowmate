import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { connect } from 'react-redux';
import moment from 'moment';

import Button from '../../Button';
import Selector from './Selector';
import { Header } from '../../UI/typography';
import { addPooping } from '../../../store/entryActions';

class PoopingForm extends Component {
    state = {
        consistency: 'Normal',
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
        const poopingEntry = {
            date: moment(this.state.date),
            consistency: this.state.consistency
        }

        this.props.onAddPooping(poopingEntry);
        this.props.returnToProfile();
    }

    handleSelector = consistency => {
        this.setState({ consistency });
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
                <Header style={styles.type}>Please select the consistency.</Header>
                <Selector
                    handleSelector={this.handleSelector}
                    value='Dry'
                    activeValue={this.state.consistency}
                />
                <Selector
                    handleSelector={this.handleSelector}
                    value='Normal'
                    activeValue={this.state.consistency}
                />
                <Selector
                    handleSelector={this.handleSelector}
                    value='Runny'
                    activeValue={this.state.consistency}
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
    type: {
        marginTop: 16
    }
});

const mapDispatchToProps = dispatch => {
    return {
        onAddPooping: (pooping) => dispatch(addPooping(pooping))
    }
}

export default connect(null, mapDispatchToProps)(PoopingForm);